<template>
	<div>
		<Navigation></Navigation>
		<main class="container">
			<h1 class="my-5">Новый партнёр</h1>
			<div class="data-container max-width-480">
				<h4 class="mb-4">Параметры</h4>
				<div class="mb-3">
					<label>Название организации:</label>
					<input v-model="newPartner.name" class="form-control" type="text" />
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
			newPartner: {
				name: "",
			},
			isAdmin: this.$store.getters.isAdmin
		};
	},

	methods: {
		async onBtnAddClick() {
			let response;
			try {
				response = await this.axios.post("partners", { ...this.newPartner });
				if (response.status === 201) {
					this.$router.push("/partners").catch(err => err);
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