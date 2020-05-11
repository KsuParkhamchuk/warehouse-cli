<template>
	<div>
		<Navigation></Navigation>
		<main v-if="user" class="container">
			<h1 class="my-5">Пользователь</h1>
			<div class="data-container max-width-480 mb-4">
				<h4 class="mb-3">Информация</h4>
				<p class="mb-2">ФИО: {{ formattedUser.fullName }}</p>
				<p class="mb-2">Позиция: {{ formattedUser.position }}</p>
				<p class="mb-2">Логин: {{ formattedUser.login }}</p>
				<p class="mb-3">Роль: {{ formattedUser.role }}</p>
				<router-link :to="`/edit-user/${formattedUser.id}`" class="btn btn-primary btn-sm">Редактировать</router-link>
			</div>
			<div class="data-container">
				<h4 class="mb-4">Действия пользователя</h4>
				<table class="table">
					<thead>
						<tr>
							<th style="max-width: 60px; width: 60px;" scope="col">#</th>
							<th style="max-width: 180px; width: 180px;" scope="col">Время</th>
							<th scope="col">Что произошло</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="(row, index) in user.histories" :key="row.id">
							<th scope="row">{{ index + 1 }}</th>
							<td>{{ row.createdAt }}</td>
							<td>{{ row.action }}</td>
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
			user: null
		};
	},

	async mounted() {
		let response;
		try {
			response = await this.axios.get(`users/${this.$route.params.id}`);
			this.user = response.data;
		} catch (e) {
			console.log(e);
		}
	},

	computed: {
		formattedUser() {
			const formattedUser = Object.assign(this.user, {});
			formattedUser.role =
				formattedUser.role === "ADMIN" ? "Администратор" : "Менеджер";
			if (formattedUser.histories) {
				formattedUser.histories.forEach(history => {
					history.createdAt = moment(history.createdAt).format(
						"DD.MM.YYYY, HH:mm"
					);
				});
			}
			return formattedUser;
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