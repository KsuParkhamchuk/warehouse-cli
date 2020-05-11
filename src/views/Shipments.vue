<template>
	<div>
		<Navigation></Navigation>
		<main v-if="documents" class="container">
			<h1 class="my-5">
				Документы отгрузки
			</h1>
			<div class="data-container">
				<h4 class="mb-4">Поиск</h4>
				<div class="row mb-4">
					<div class="col-4">Всего: {{ formattedDocuments.length }}</div>
				</div>
				<table class="table">
					<thead>
						<tr>
							<th style="max-width: 50px; width: 50px;" scope="col">#</th>
							<th style="max-width: 160px; width: 160px;" scope="col">Дата</th>
							<th style="max-width: 240px; width: 240px;" scope="col">Товар</th>
							<th style="max-width: 140px; width: 140px;" scope="col">Кол-во</th>
							<th scope="col">Для партнёра</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="(document, index) in formattedDocuments" :key="document.id">
							<th scope="row">{{ index + 1 }}</th>
							<td>{{ document.date }}</td>
							<td>{{ document.item.name }}</td>
							<td>{{ document.amount }}</td>
							<td>{{ document.partner.name }}</td>
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
			documents: [],
			isAdmin: this.$store.getters.isAdmin,
		};
	},

	async mounted() {
		let response;
		try {
			response = await this.axios.get(
				`shipment-documents`
			);
			this.documents = response.data;
		} catch (e) {
			console.log(e);
		}
	},

	computed: {
		formattedDocuments() {
			return this.documents.map((document) => {
				document.date = moment(document.date).format('DD.MM.YYYY');
				return document;
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