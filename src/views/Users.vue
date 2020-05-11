<template>
	<div>
		<Navigation></Navigation>
		<main v-if="users" class="container">
			<h1 class="my-5">
				Пользователи <router-link v-if="isAdmin" to="/add-new-user" class="btn btn-success btn-sm font-weight-bold">+</router-link>
			</h1>
			<div class="data-container">
				<h4 class="mb-4">Поиск</h4>
				<div class="row mb-4">
					<div class="col-4">Всего: {{ users.length }}</div>
				</div>
				<table class="table">
					<thead>
						<tr>
							<th style="max-width: 50px; width: 50px;" scope="col">#</th>
							<th style="max-width: 240px; width: 240px;" scope="col">ФИО</th>
							<th style="max-width: 240px; width: 240px;" scope="col">Позиция</th>
							<th style="max-width: 240px; width: 240px;" scope="col">E-mail</th>
							<th style="max-width: 240px; width: 240px;" scope="col">Роль</th>
							<th scope="col">Дополнительно</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="(user, index) in formattedUsers" :key="user.id">
							<th scope="row">{{ index + 1 }}</th>
							<td>{{ user.fullName }}</td>
							<td>{{ user.position }}</td>
							<td>{{ user.login }}</td>
							<td>{{ user.role }}</td>
							<td>
								<router-link class="btn btn-primary btn-sm" :to="`/users/${user.id}`">Подробнее</router-link>
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
			users: null,
			isAdmin: this.$store.getters.isAdmin,
		};
	},

	computed: {
		formattedUsers() {
			return this.users.map((user) => {
				user.role = user.role === 'ADMIN' ? 'Администратор' : 'Менеджер';
				return user;
			});
		}
	},

	async mounted() {
		let response;
		try {
			response = await this.axios.get(
				`users`
			);
			this.users = response.data;
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