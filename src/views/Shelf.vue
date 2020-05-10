<template>
	<div>
		<Navigation></Navigation>
		<main v-if="shelfData" class="container">
			<h1 class="my-5">Полка {{ shelfData.shelf.uid }}</h1>
			<div class="data-container">
				<h4 class="mb-4">Информация</h4>
				<div class="row mb-4">
					<div class="col-4">Кол-во уникальных товаров: {{ shelfData.items.length }}</div>
					<div class="col-4">Свободное место: {{ freeSpace }} / {{ shelfData.shelf.capacity }}</div>
				</div>

				<h5 class="mb-4">Товары на полке</h5>
				<table class="table">
					<thead>
						<tr>
							<th style="max-width: 50px; width: 50px;" scope="col">#</th>
							<th style="max-width: 240px; width: 240px;" scope="col">Наименование</th>
							<th style="max-width: 80px; width: 80px;" scope="col">Кол-во</th>
							<th style="max-width: 200px; width: 200px;" scope="col">Занимаемое место</th>
							<th scope="col">Действие</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="(itemData, index) in shelfData.items" :key="itemData.item.id">
							<th scope="row">{{ index + 1 }}</th>
							<td>{{ itemData.item.name }}</td>
							<td>{{ itemData.amount }}</td>
							<td>{{ itemData.amount * itemData.item.size }}</td>
							<td>
								<router-link class="btn btn-primary btn-sm" to="">Отгрузить</router-link>
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
			shelfData: null
		};
	},

	computed: {
		freeSpace() {
			const filledSpaceByItems = this.shelfData.items.map(
				itemData => itemData.amount * itemData.item.size
			);
			return (
				this.shelfData.shelf.capacity -
				filledSpaceByItems.reduce(
					(accumulator, current) => accumulator + current,
					0
				)
			);
		}
	},

	async mounted() {
		let response;
		try {
			response = await this.axios.get(
				`storage/shelves/${this.$route.params.id}`
			);
			this.shelfData = response.data;
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
.rack {
	height: 120px;
	background-color: #eeeeee;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: #f4f2fe;
	box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.3);
	transition: all 0.2s;
	text-decoration: none;

	&:hover {
		box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.5);
	}
}
</style>