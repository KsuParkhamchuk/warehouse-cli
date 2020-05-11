<template>
	<div>
		<Navigation></Navigation>
		<main class="container">
			<h1 class="my-5">Новая поставка</h1>
			<div v-if="items && partners" class="data-container max-width-480">
				<h4 class="mb-4">Заполните форму</h4>
				<div class="mb-3">
					<label>Товар:</label>
					<v-select :value="selectedItem" @input="setSelectedItem" :options="items" label="name">
						<template v-slot:no-options="{ search, searching }">
							<template v-if="searching">
								Не найдено результатов для
								<em>{{ search }}</em>.
							</template>
							<em style="opacity: 0.5;" v-else>Начните вводить название.</em>
						</template>
					</v-select>
				</div>
				<div class="mb-3">
					<label>Количество:</label>
					<input v-model="newSupply.amount" class="form-control" type="text" />
				</div>
				<div class="mb-3">
					<label>Партнёр:</label>
					<v-select :value="selectedPartner" @input="setSelectedPartner" :options="partners" label="name">
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
					<label>Запланировать на:</label>
					<div>
						<date-picker v-model="newSupply.deliveryDate" type="date" valuetype="format"></date-picker>
					</div>
				</div>
				<button v-on:click="onBtnAddClick()" class="btn btn-success">Добавить</button>
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
			newSupply: {
				amount: "",
				deliveryDate: new Date(),
				itemId: "",
				partnerId: ""
			},
			items: [],
			partners: [],
			isAdmin: this.$store.getters.isAdmin,
			selectedItem: {
				id: -1,
				name: "Выберите товар",
			},
			selectedPartner: {
				id: -1,
				name: "Выберите партнёра",
			},
		};
	},

	async mounted() {
		const partnersPromise = this.axios.get("partners");
		const itemsPromise = this.axios.get("items");
		const [ partners, items ] = await Promise.all([
			partnersPromise,
			itemsPromise
		]);
		this.partners = partners.data;
		this.items = items.data;
	},

	methods: {
		setSelectedItem(value) {
			this.selectedItem = value;
		},

		setSelectedPartner(value) {
			this.selectedPartner = value;
		},

		async onBtnAddClick() {
			let response;
			try {
				response = await this.axios.post("supplies", {
					amount: this.newSupply.amount,
					deliveryDate: this.newSupply.deliveryDate,
					itemId: this.selectedItem.id,
					partnerId: this.selectedPartner.id,
				});
				if (response.status === 201) {
					this.$router.push("/supplies").catch(err => err);
				}
			} catch (e) {
				console.log(e);
			}
		}
	},

	components: {
		Navigation,
		DatePicker,
		vSelect
	}
};
</script>

<style lang="scss" scoped>
</style>