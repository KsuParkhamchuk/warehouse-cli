<template>
	<div>
		<Navigation></Navigation>
		<main v-if="item && shelf && partners.length > 0" class="container">
			<h1 class="my-5">Отгрузка</h1>
			<div class="data-container max-width-480">
				<h4 class="mb-3">Параметры</h4>
				<p class="mb-3">Товар: {{ item.name }}, с полки {{ shelf.shelf.uid }}</p>
				<div class="mb-3">
					<label>Количество:</label>
					<input v-model="newShipment.amount" class="form-control" type="text" />
				</div>
				<div class="mb-3">
					<label>Кому отправляем:</label>
					<v-select
						:value="selectedPartner"
						@input="setSelectedPartner"
						:options="partners"
						label="name"
					>
						<template v-slot:no-options="{ search, searching }">
							<template v-if="searching">
								Не найдено результатов для
								<em>{{ search }}</em>.
							</template>
							<em style="opacity: 0.5;" v-else>Начните вводить название.</em>
						</template>
					</v-select>
				</div>
				<div class="mb-4">
					<label>Дата отгрузки:</label>
					<div>
						<date-picker v-model="newShipment.shipmentDate" type="date" valuetype="format"></date-picker>
					</div>
				</div>
				<button v-on:click="onBtnAddClick()" class="btn btn-success">Отгрузить</button>
			</div>
		</main>
	</div>
</template>

<script>
import Navigation from "../components/Navigation.vue";
import vSelect from "vue-select";
import DatePicker from "vue2-datepicker";
import "vue2-datepicker/locale/ru";

export default {
	data() {
		return {
			item: null,
			shelf: null,
			partners: [],
			newShipment: {
				itemId: "",
				amount: "",
				shipmentDate: new Date()
			},
			selectedPartner: {
				id: -1,
				name: "Выберите партнёра"
			}
		};
	},

	async mounted() {
		const partnersPromise = this.axios.get("partners");
		const itemPromise = this.axios.get(
			`items/${this.$route.params.itemId}`
		);
		const shelfPromise = this.axios.get(
			`storage/shelves/${this.$route.params.shelfId}`
		);
		const [partners, item, shelf] = await Promise.all([
			partnersPromise,
			itemPromise,
			shelfPromise
		]);
		this.partners = partners.data;
		this.item = item.data;
		this.shelf = shelf.data;
	},

	computed: {
		formattedItem() {
			const formattedItem = Object.assign(this.item, {});
			formattedItem.type =
				formattedItem.type === "PRODUCT" ? "Продукт" : "Деталь";
			return formattedItem;
		}
	},

	methods: {
		setSelectedPartner(value) {
			this.selectedPartner = value;
		},

		async onBtnAddClick() {
			try {
				const removeItemFromShelf = await this.axios.patch("storage", {
					itemId: this.item.id,
					shelfId: this.shelf.shelf.id,
					amount: this.newShipment.amount
				});

				if (removeItemFromShelf.status === 200) {
					const addShipmentDocument = await this.axios.post(
						"shipment-documents",
						{
							itemId: this.item.id,
							partnerId: this.selectedPartner.id,
							amount: this.newShipment.amount,
							date: this.newShipment.shipmentDate,
						}
					);

					if (addShipmentDocument.status === 201) {
						this.$router
							.push(`/warehouse/shelves/${this.shelf.shelf.id}`)
							.catch(err => err);
					}
				}
			} catch (e) {
				console.log(e);
			}
		}
	},

	components: {
		Navigation,
		vSelect,
		DatePicker
	}
};
</script>

<style lang="scss" scoped>
</style>