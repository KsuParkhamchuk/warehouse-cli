<template>
	<div>
		<Navigation></Navigation>
		<main class="container">
			<h1 class="my-5">История</h1>
			<table class="table">
				<thead>
					<tr>
						<th style="max-width: 60px; width: 60px;" scope="col">#</th>
						<th style="max-width: 180px; width: 180px;" scope="col">Время</th>
						<th scope="col">Что произошло</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="(row, index) in history" :key="row.id">
						<th scope="row">{{ index + 1 }}</th>
						<td>{{ row.createdAt }}</td>
						<td>{{ row.action }}</td>
					</tr>
				</tbody>
			</table>
		</main>
	</div>
</template>

<script>
import Navigation from "../components/Navigation.vue";
import * as moment from "moment";

export default {
	data() {
		return {
			history: []
		};
	},

	async mounted() {
		let response;
		try {
			response = await this.axios.get("history");
			response.data.forEach(row => {
				row.createdAt = moment(row.createdAt).format(
					"DD.MM.YYYY, HH:mm"
				);
			});
			this.history = response.data;
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