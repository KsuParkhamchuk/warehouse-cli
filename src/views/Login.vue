<template >
	<div class="loginWindow d-flex justify-content-center align-items-center">
		<div class="loginWindow__content">
			<div class="row h-100">
				<div class="col-6">
					<div class="loginImg__container"></div>
				</div>
				<div class="col-6">
					<div class="autorisation d-flex justify-content-center align-items-center">
						<div class="autorisation__content">
							<p class="autorisation__content--title text-center mb-4">Авторизация</p>
							<div v-if="errors.length">
								<div class="text-danger mb-3" v-for="error in errors" v-bind:key="error">{{error}}</div>
							</div>
							<form class="autorisation__content--form" action>
								<input type="text" v-model="login" placeholder="Логин..." />
								<br />
								<input type="password" v-model="password" placeholder="Пароль..." />
								<br />
								<button type="button" v-on:click="logInBtnClick">Войти</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>



<script>
import axios from "axios";
//import router from "../router"

export default {
	data() {
		return {
			login: "",
			password: "",
			errors: []
		};
	},

	methods: {
		async sendAuthorisationData() {
			axios
				.post("http://localhost:3000/auth/login", {
					login: this.login,
					password: this.password
				})
				.then(response => {
					this.$store.commit("setUser", response.data.user);
					this.$cookies.set("token", response.data.accessToken);
					this.$router.push("/warehouse").catch(err => err);
				})
				.catch(error => {
					switch (error.response.status) {
						case 401:
							this.errors.push("Неверный логин или пароль!");
							break;
						default:
							this.errors.push(
								"Неизвестная ошибка, свяжитесь с тех поддержкой"
							);
							break;
					}
				});
		},

		validateData() {
			this.errors = [];
			if (!this.login) {
				this.errors.push("Login should not be empty!");
			}
			if (!this.password) {
				this.errors.push("Password should not be empty!");
			}
			return this.login && this.password;
		},

		logInBtnClick() {
			if (this.validateData()) {
				this.sendAuthorisationData();
			}
		}
	}
};
</script>

<style lang="scss" scoped>
.loginWindow {
	height: 100vh;
	background-color: #e5e5e5;

	&__content {
		width: 1200px;
		height: 85vh;
		background-color: #fff;
	}
}

.loginImg__container {
	height: 100%;
	background: url("../assets/img/2020-04-11_17-07-39.png");
	background-size: 100% 100%;
	background-repeat: no-repeat;
}

.autorisation {
	height: 100%;

	&__content--title {
		text-transform: uppercase;
		font-size: 37px;
		color: #101541;
	}

	&__content--form input,
	&__content--form button {
		padding: 15px 15px;
		width: 400px;
		margin-bottom: 40px;
	}

	&__content--form button {
		background-color: #0f1a51;
		font-size: 20px;
		font-weight: bold;
		color: white;
	}

	&__content--form button:hover {
		background-color: #0a1446;
	}
}
</style>