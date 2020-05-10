<template>
	<div>
		<Navigation></Navigation>
		<main class="container">
			<h1 class="my-5">
				Поставки <router-link to="/add-new-supply" class="btn btn-success btn-sm font-weight-bold">+</router-link>
			</h1>
			<div class="data-container">
				<h4 class="mb-4">Поиск</h4>
				<div class="d-flex mb-4">
					<div class="form-group form-check mr-4">
						<input
							v-model="searchSettings.findFutureSupplies"
							type="checkbox"
							class="form-check-input"
							id="findFutureSupplies"
						/>
						<label class="form-check-label" for="findFutureSupplies">Будущие поставки</label>
					</div>
					<div class="form-group form-check">
						<input
							v-model="searchSettings.findAcceptedSupplies"
							type="checkbox"
							class="form-check-input"
							id="findAcceptedSupplies"
						/>
						<label class="form-check-label" for="findAcceptedSupplies">Принятые поставки</label>
					</div>
				</div>

				<div v-if="supplies">
					<h5>Результаты поиска</h5>
					<table class="table">
						<thead>
							<tr>
								<th style="max-width: 60px; width: 60px;" scope="col">#</th>
								<th style="max-width: 180px; width: 180px;" scope="col">Запланирована на</th>
								<th style="max-width: 240px; width: 180px;" scope="col">Товар</th>
								<th style="max-width: 90px; width: 90px;" scope="col">Кол-во</th>
								<th style="max-width: 240px; width: 180px;" scope="col">Партнёр</th>
								<th style="max-width: 180px; width: 180px;" scope="col">Статус</th>
								<th scope="col">Дополнительно</th>
							</tr>
						</thead>
						<tbody>
							<tr v-for="(supply, index) in suppliesForTable" :key="supply.id">
								<th scope="row">{{ index + 1 }}</th>
								<td>{{ supply.deliveryDate }}</td>
								<td>{{ supply.item.name }}</td>
								<td>{{ supply.amount }}</td>
								<td>{{ supply.partner.name }}</td>
								<td>{{ supply.isOk === null ? 'Ожидается' : 'Принята' }}</td>
								<td>
									<router-link :to="`/supplies/${supply.id}`" class="btn btn-primary btn-sm">Подробнее</router-link>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</main>
	</div>
</template>

<script>
import * as moment from "moment";
import Navigation from "../components/Navigation.vue";

export default {
	data() {
		return {
			supplies: null,
			searchSettings: {
				findFutureSupplies: false,
				findAcceptedSupplies: false
			}
		};
	},

	async mounted() {
		const response = await this.loadSupplies(this.searchSettings);
		this.supplies = response.data;
	},

	watch: {
		searchSettings: {
			async handler(val) {
				const response = await this.loadSupplies(val);
				this.supplies = response.data;
			},
			deep: true
		}
	},

	methods: {
		async loadSupplies(settings) {
			const formattedSettings = {
				findFutureSupplies:
					settings.findFutureSupplies === true ? 1 : 0,
				findAcceptedSupplies:
					settings.findAcceptedSupplies === true ? 1 : 0
			};
			let response;
			try {
				response = await this.axios.get("supplies", {
					params: {
						...formattedSettings
					}
				});
			} catch (e) {
				console.log(e);
			}
			return response;
		}
	},

	computed: {
		suppliesForTable() {
			return this.supplies.map(supply => {
				supply.deliveryDate = moment(supply.deliveryDate).format(
					"DD.MM.YYYY"
				);
				return supply;
			});
		}
	},

	components: {
		Navigation
	}
};
</script>

<style lang="scss" scoped>
</style>