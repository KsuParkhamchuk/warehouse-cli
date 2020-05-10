<template>
	<div>
		<Navigation></Navigation>
		<main v-if="supply" class="container">
			<h1 class="my-5">Поставка {{ supply.uid }}</h1>
			<div class="data-container">
				<h4 class="mb-4">Информация</h4>
			</div>
		</main>
	</div>
</template>

<script>
import Navigation from "../components/Navigation.vue";

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

	methods: {},

	components: {
		Navigation
	}
};
</script>

<style lang="scss" scoped>
</style>