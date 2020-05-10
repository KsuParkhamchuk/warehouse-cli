<template>
	<div>
		<Navigation></Navigation>
		<main class="container">
			<h1 class="my-5">Новый стеллаж</h1>
			<div class="data-container max-width-480">
				<h4 class="mb-4">Параметры</h4>
				<div class="mb-3">
					<label>Количество полок:</label>
					<input v-model="newRack.shelfCount" class="form-control" type="text" />
				</div>
				<div class="mb-4">
					<label>Вместимость одной полки:</label>
					<input v-model="newRack.shelfCapacity" class="form-control" type="text" />
				</div>
				<button v-on:click="onBtnAddClick()" class="btn btn-success">Добавить</button>
			</div>
		</main>
	</div>
</template>

<script>
import Navigation from "../components/Navigation.vue";

export default {
	data() {
		return {
			newRack: {
				shelfCount: "",
				shelfCapacity: ""
			},
			isAdmin: this.$store.getters.isAdmin
		};
	},

	methods: {
		async onBtnAddClick() {
			let response;
			try {
				response = await this.axios.post("storage/racks", { ...this.newRack });
				if (response.status === 201) {
					this.$router.push("/warehouse").catch(err => err);
				}
			} catch (e) {
				console.log(e);
			}
		}
	},

	components: {
		Navigation
	}
};
</script>

<style lang="scss" scoped>
</style>