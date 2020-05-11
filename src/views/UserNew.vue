<template>
	<div>
		<Navigation></Navigation>
		<main class="container">
			<h1 class="my-5">Новый пользователь</h1>
			<div class="data-container max-width-480">
				<h4 class="mb-4">Параметры</h4>
				<div class="mb-3">
					<label>Фамилия, имя:</label>
					<input v-model="newUser.fullName" class="form-control" type="text" />
				</div>
				<div class="mb-3">
					<label>Позиция:</label>
					<input v-model="newUser.position" class="form-control" type="text" />
				</div>
				<div class="mb-3">
					<label>Логин:</label>
					<input v-model="newUser.login" class="form-control" type="text" />
				</div>
				<div class="mb-3">
					<label>Пароль:</label>
					<input v-model="newUser.password" class="form-control" type="password" />
				</div>
				<div class="mb-4">
					<label>Роль:</label>
					<v-select :value="selectedRole" @input="setSelectedRole" :options="roles" label="label">
						<template v-slot:no-options="{ search, searching }">
							<template v-if="searching">
								Не найдено результатов для
								<em>{{ search }}</em>.
							</template>
							<em style="opacity: 0.5;" v-else>Начните вводить название.</em>
						</template>
					</v-select>
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
			newUser: {
				fullName: "",
				position: "",
				login: "",
				password: "",
				role: "",
			},
			isAdmin: this.$store.getters.isAdmin,
			roles: [
				{ value: "USER", label: "Менеджер" },
				{ value: "ADMIN", label: "Администратор" }
			],
			selectedRole: { value: "USER", label: "Менеджер" },
		};
	},

	methods: {
		setSelectedRole(value) {
			this.selectedRole = value;
		},

		async onBtnAddClick() {
			let response;
			try {
				response = await this.axios.post("users", {
					...this.newUser,
					role: this.selectedRole.value
				});
				if (response.status === 201) {
					this.$router.push("/users").catch(err => err);
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