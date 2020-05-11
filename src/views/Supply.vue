<template>
	<div>
		<Navigation></Navigation>
		<main v-if="supply" class="container">
			<h1 class="my-5">Поставка {{ supply.uid }}</h1>
			<div class="data-container max-width-480">
				<h4 class="mb-4">Информация</h4>
				<p class="mb-2">Статус: {{ formatedSupply.isOk === null ? 'ожидается' : 'принята' }}</p>
				<p class="mb-2">Запланирована на: {{ formatedSupply.deliveryDate }}</p>
				<p class="mb-2">Поставщик: {{ formatedSupply.partner.name }}</p>
				<p class="mb-2">Товар: {{ formatedSupply.item.name }}</p>
				<p class="mb-2">Кол-во: {{ formatedSupply.amount }}</p>
				<p class="mb-2">Потребуется места: {{ formatedSupply.amount * formatedSupply.item.size }}</p>
				<hr>
				<div v-if="formatedSupply.isOk === null">
					<p class="text-muted">Товар уже на месте?<br> Давайте оформим и разместим его: <router-link :to="`/accept-supply/${supply.id}`" class="btn btn-success btn-sm">Принять поставку</router-link></p>
				</div>
				<div v-if="formatedSupply.isOk !== null">
					<h4 class="mb-4">Информация о приёмке</h4>
					<p class="mb-2">Принята: {{ formatedSupply.deliveryDate }}</p>
					<p class="mb-2">Итоговое кол-во: {{ formatedSupply.amount }}</p>
					<p v-if="formatedSupply.isOk" class="text-success mb-2">Товар в порядке</p>
					<p v-if="!formatedSupply.isOk" class="text-danger mb-2">С товаром были проблемы</p>
				</div>
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
			supply: null,
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
			formattedSupply.deliveryDate = moment(formattedSupply.deliveryDate).format('DD.MM.YYYY');
			if (formattedSupply.finalDelivaryDate) {
				formattedSupply.finalDelivaryDate = moment(formattedSupply.finalDelivaryDate).format('DD.MM.YYYY');
			}
			return formattedSupply;
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