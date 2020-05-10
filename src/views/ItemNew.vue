<template>
	<div>
		<Navigation></Navigation>
		<main class="container">
			<h1 class="my-5">Новый товар</h1>
			<div class="data-container max-width-480">
				<h4 class="mb-4">Параметры</h4>
				<div class="mb-3">
					<label>Название:</label>
					<input v-model="newItem.name" class="form-control" type="text" />
				</div>
				<div class="mb-3">
					<label>Тип:</label>
					<v-select :value="selectedType" @input="setSelectedType" :options="types" label="label">
						<template v-slot:no-options="{ search, searching }">
							<template v-if="searching">
								Не найдено результатов для
								<em>{{ search }}</em>.
							</template>
							<em style="opacity: 0.5;" v-else>Начните вводить название.</em>
						</template>
					</v-select>
				</div>
				<div class="mb-4">
					<label>Размер:</label>
					<input v-model="newItem.size" class="form-control" type="text" />
				</div>
				<button v-on:click="onBtnAddClick()" class="btn btn-success">Добавить</button>
			</div>
		</main>
	</div>
</template>

<script>
import Navigation from "../components/Navigation.vue";
import vSelect from "vue-select";

export default {
	data() {
		return {
			newItem: {
				name: "",
				type: "",
				size: ""
			},
			isAdmin: this.$store.getters.isAdmin,
			types: [
				{ value: "PRODUCT", label: "Продукт" },
				{ value: "DETAIL", label: "Деталь" }
			],
			selectedType: { value: "PRODUCT", label: "Продукт" }
		};
	},

	methods: {
		setSelectedType(value) {
			this.selectedType = value;
		},

		async onBtnAddClick() {
			let response;
			try {
				response = await this.axios.post("items", {
					...this.newItem,
					type: this.selectedType.value
				});
				if (response.status === 201) {
					this.$router.push("/items").catch(err => err);
				}
			} catch (e) {
				console.log(e);
			}
		}
	},

	components: {
		Navigation,
		vSelect
	}
};
</script>

<style lang="scss" scoped>
</style>