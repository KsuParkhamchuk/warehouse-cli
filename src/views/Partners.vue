<template>
	<div>
		<Navigation></Navigation>
		<main v-if="partners" class="container">
			<h1 class="my-5">
				Партнёры <router-link v-if="isAdmin" to="/add-new-partner" class="btn btn-success btn-sm font-weight-bold">+</router-link>
			</h1>
			<div class="data-container max-width-480">
				<h4 class="mb-4">Все</h4>
				<div class="row mb-4">
					<div class="col-4">Всего: {{ partners.length }}</div>
				</div>
				<table class="table">
					<thead>
						<tr>
							<th style="max-width: 50px; width: 50px;" scope="col">#</th>
							<th style="max-width: 240px; width: 240px;" scope="col">Название организации</th>
							<th scope="col">Дополнительно</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="(partner, index) in partners" :key="partner.id">
							<th scope="row">{{ index + 1 }}</th>
							<td>{{ partner.name }}</td>
							<td>
								<router-link class="btn btn-primary btn-sm" :to="`/partners/${partner.id}`">Подробнее</router-link>
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

export default {
	data() {
		return {
			partners: null,
			isAdmin: this.$store.getters.isAdmin,
		};
	},

	async mounted() {
		let response;
		try {
			response = await this.axios.get(
				`partners`
			);
			this.partners = response.data;
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