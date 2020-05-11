<template>
	<div>
		<Navigation></Navigation>
		<main v-if="supply" class="container">
			<h1 class="my-5">Приёмка поставки {{ supply.uid }}</h1>
			<div style="max-width: 670px" class="data-container d-flex mb-4">
				<div style="width: 360px;" class="max-width-480">
					<h4 class="mb-4">Информация</h4>
					<p class="mb-2">Статус: принимается</p>
					<p class="mb-2">Запланирована на: {{ formatedSupply.deliveryDate }}</p>
					<p class="mb-2">Поставщик: {{ formatedSupply.partner.name }}</p>
					<p class="mb-2">Товар: {{ formatedSupply.item.name }}</p>
					<p class="mb-2">Кол-во: {{ formatedSupply.amount }}</p>
					<p class="mb-2">Потребуется места: {{ formatedSupply.amount * formatedSupply.item.size }}</p>
				</div>
				<div>
					<h4 class="mb-4">Приёмка</h4>
					<div class="mb-3">
						<label>Принята:</label>
						<div>
							<date-picker v-model="editSupply.finalDate" type="date" valuetype="format"></date-picker>
						</div>
					</div>
					<div class="mb-3">
						<label>Количество (реальное):</label>
						<input v-model="editSupply.finalAmount" class="form-control" type="text" />
					</div>
					<div class="form-group form-check">
						<input v-model="editSupply.isOk" type="checkbox" class="form-check-input" id="isItemOk" />
						<label class="form-check-label" for="isItemOk">Товар в порядке</label>
					</div>
					<button v-on:click="onBtnSaveClick()" class="btn btn-success">Разместить</button>
				</div>
			</div>

			<div v-if="affectedShelves.length > 0" style="max-width: 670px" class="data-container">
				<h4 class="mb-4">Товар размещён па полки</h4>
				<table class="table">
					<thead>
						<tr>
							<th style="max-width: 60px; width: 60px;" scope="col">#</th>
							<th style="max-width: 180px; width: 180px;" scope="col">UID полки</th>
							<th scope="col">Дополнительно</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="(shelf, index) in affectedShelves" :key="shelf.id">
							<th scope="row">{{ index + 1 }}</th>
							<td>{{ shelf.uid }}</td>
							<td>
								<router-link :to="`/warehouse/shelves/${shelf.id}`" class="btn btn-primary btn-sm">Показать</router-link>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</main>
	</div>
</template>

<script>
import Navigation from "../components/Navigation.vue";
import * as moment from "moment";
import DatePicker from "vue2-datepicker";
import "vue2-datepicker/locale/ru";

export default {
	data() {
		return {
			supply: null,
			editSupply: {
				finalDate: new Date(),
				finalAmount: "",
				isOk: true
			},
			affectedShelves: []
		};
	},

	async mounted() {
		let response;
		try {
			response = await this.axios.get(
				`supplies/${this.$route.params.id}`
			);
			this.supply = response.data;
		} catch (e) {
			console.log(e);
		}
	},

	computed: {
		formatedSupply() {
			const formattedSupply = Object.assign(this.supply, {});
			formattedSupply.deliveryDate = moment(
				formattedSupply.deliveryDate
			).format("DD.MM.YYYY");
			if (formattedSupply.finalDelivaryDate) {
				formattedSupply.finalDelivaryDate = moment(
					formattedSupply.finalDelivaryDate
				).format("DD.MM.YYYY");
			}
			return formattedSupply;
		}
	},

	methods: {
		async onBtnSaveClick() {
			let response;
			try {
				response = await this.axios.patch("storage/put-items-automatically", {
					amount: this.editSupply.finalAmount,
					itemId: this.supply.id,
				});
				if (response.status === 200) {
					this.affectedShelves = response.data;
					await this.axios.patch(`supplies/${this.supply.id}`, {
						finalAmount: this.editSupply.finalAmount,
						finalDeliveryDate: this.editSupply.finalDate,
						isOk: this.editSupply.isOk === true ? 1 : 0,
					});
					//this.$router.push("/supplies").catch(err => err);
				}
			} catch (e) {
				console.log(e);
			}
		}
	},

	components: {
		Navigation,
		DatePicker
	}
};
</script>

<style lang="scss" scoped>
</style>