<template>
	<div>
		<Navigation></Navigation>
		<main class="container">
			<h1 class="my-5">Редактирование пользователя</h1>
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
				<button v-on:click="onBtnSaveClick()" class="btn btn-primary">Сохранить</button>
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
			user: null,
			newUser: {
				fullName: "",
				position: "",
			},
			isAdmin: this.$store.getters.isAdmin,
			roles: [
				{ value: "USER", label: "Менеджер" },
				{ value: "ADMIN", label: "Администратор" }
			],
			selectedRole: { value: "USER", label: "Менеджер" },
		};
	},

	async mounted() {
		let response;
		try {
			response = await this.axios.get(
				`users/${this.$route.params.id}`
			);
			this.user = response.data;
			if (this.user.role === 'ADMIN') {
				this.selectedRole = this.roles[1];
			} else {
				this.selectedRole = this.roles[0];
			}
			this.newUser.fullName = this.user.fullName;
			this.newUser.position = this.user.position;
		} catch (e) {
			console.log(e);
		}
	},

	methods: {
		setSelectedRole(value) {
			this.selectedRole = value;
		},

		async onBtnSaveClick() {
			let response;
			try {
				response = await this.axios.patch(`users/${this.user.id}`, {
					...this.newUser,
					role: this.selectedRole.value
				});
				if (response.status === 200) {
					this.$router.push(`/users/${this.user.id}`).catch(err => err);
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