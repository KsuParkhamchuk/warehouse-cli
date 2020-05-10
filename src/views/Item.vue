<template>
	<div>
		<Navigation></Navigation>
		<main v-if="item" class="container">
			<h1 class="my-5">Товар {{ item.name }}</h1>
			<div class="data-container max-width-480">
				<h4 class="mb-3">Информация</h4>
				<p class="mb-5">{{ formattedItem.type }}, занимает {{ formattedItem.size }} ед. места</p>
				<h4 class="mb-4">Можно найти на полках</h4>
				<table class="table">
					<thead>
						<tr>
							<th style="max-width: 60px; width: 60px;" scope="col">#</th>
							<th style="max-width: 180px; width: 180px;" scope="col">UID полки</th>
							<th scope="col">Дополнительно</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="(shelf, index) in item.shelves" :key="shelf.id">
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

export default {
	data() {
		return {
			item: null
		};
	},

	async mounted() {
		let response;
		try {
			response = await this.axios.get(
				`items/${this.$route.params.id}`
			);
			this.item = response.data;
		} catch (e) {
			console.log(e);
		}
	},

	computed: {
		formattedItem() {
			const formattedItem = Object.assign(this.item, {});
			formattedItem.type = formattedItem.type === 'PRODUCT' ? 'Продукт' : 'Деталь';
			return formattedItem; 
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