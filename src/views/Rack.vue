<template>
	<div>
		<Navigation></Navigation>
		<main v-if="rackData" class="container">
			<h1 class="my-4">Стеллаж {{ rackData.rack.uid }}</h1>
		</main>
	</div>
</template>

<script>
import Navigation from "../components/Navigation.vue";

export default {
	data() {
		return {
			rackData: null,
		};
	},

	async mounted() {
		let response;
		try {
			response = await this.axios.get(`storage/racks/${this.$route.params.id}`);
			this.rackData = response.data;
		} catch (e) {
			console.log(e);
		}
		console.log(response);
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
  background-color: #F4F2FE;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.3);
  transition: all 0.2s;
  text-decoration: none;

  &:hover {
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.5);
  }
}
</style>