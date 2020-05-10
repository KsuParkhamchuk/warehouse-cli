<template>
	<div>
		<Navigation></Navigation>
		<main v-if="partner" class="container">
			<h1 class="my-5">Партнёр {{ partner.name }}</h1>
			<div class="data-container">
				<h4 class="mb-4">Поставки</h4>
				<table class="table">
					<thead>
						<tr>
							<th style="max-width: 60px; width: 60px;" scope="col">#</th>
							<th style="max-width: 180px; width: 180px;" scope="col">Запланирована на</th>
							<th style="max-width: 240px; width: 180px;" scope="col">Товар</th>
							<th style="max-width: 90px; width: 90px;" scope="col">Кол-во</th>
							<th style="max-width: 180px; width: 180px;" scope="col">Статус</th>
							<th scope="col">Дополнительно</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="(supply, index) in formattedPartner.supplies" :key="supply.id">
							<th scope="row">{{ index + 1 }}</th>
							<td>{{ supply.deliveryDate }}</td>
							<td>{{ supply.item.name }}</td>
							<td>{{ supply.amount }}</td>
							<td>{{ supply.isOk === null ? 'Ожидается' : 'Принята' }}</td>
							<td>
								<router-link :to="`/supplies/${supply.id}`" class="btn btn-primary btn-sm">Подробнее</router-link>
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

export default {
	data() {
		return {
			partner: null
		};
	},

	async mounted() {
		let response;
		try {
			response = await this.axios.get(
				`partners/${this.$route.params.id}`
			);
			this.partner = response.data;
		} catch (e) {
			console.log(e);
		}
	},

	computed: {
		formattedPartner() {
			const formattedPartner = Object.assign(this.partner, {});
			formattedPartner.supplies.forEach((supply) => {
				supply.deliveryDate = moment(supply.deliveryDate).format('DD.MM.YYYY');
				return supply;
			})
			return formattedPartner;
		}
	},

	methods: {},

	components: {
		Navigation
	}
};
</script>

<style lang="scss" scoped>
</style>