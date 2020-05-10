<template>
	<div>
		<Navigation></Navigation>
		<main class="container">
			<h1 class="my-5">
				Товары
				<router-link to="/add-new-item" class="btn btn-success btn-sm font-weight-bold">+</router-link>
			</h1>
			<div class="data-container">
				<h4 class="mb-4">Наименования</h4>
				<table class="table">
					<thead>
						<tr>
							<th style="max-width: 60px; width: 60px;" scope="col">#</th>
							<th style="max-width: 320px; width: 320px;" scope="col">Название</th>
							<th style="max-width: 180px; width: 180px;" scope="col">Тип</th>
							<th style="max-width: 120px; width: 120px;" scope="col">Размер</th>
							<th scope="col">Дополнительно</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="(item, index) in formattedItems" :key="item.id">
							<th scope="row">{{ index + 1 }}</th>
							<td>{{ item.name }}</td>
							<td>{{ item.type }}</td>
							<td>{{ item.size }}</td>
							<td>
								<router-link :to="`/items/${item.id}`" class="btn btn-primary btn-sm">Подробнее</router-link>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</main>
	</div>
</template>

<script>
//import * as moment from "moment";
import Navigation from "../components/Navigation.vue";

export default {
	data() {
		return {
			items: [],
		};
	},

	async mounted() {
		const response = await this.loadItems();
		this.items = response.data;
	},

	computed: {
		formattedItems() {
			return this.items.map((item) => {
				item.type = item.type === 'PRODUCT' ? 'Продукт' : 'Деталь';
				return item;
			});
		}
	},

	methods: {
		async loadItems() {
			let response;
			try {
				response = await this.axios.get("items");
			} catch (e) {
				console.log(e);
			}
			return response;
		}
	},

	components: {
		Navigation
	}
};
</script>

<style lang="scss" scoped>
</style>