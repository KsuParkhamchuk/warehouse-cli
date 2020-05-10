<template>
	<div>
		<Navigation></Navigation>
		<main class="container">
			<h1 class="my-5">
				Стеллажи <router-link to="/warehouse/add-new-rack" v-if="isAdmin" class="btn btn-success btn-sm font-weight-bold">+</router-link>
			</h1>
			<div class="row">
				<div v-for="rackData in racks" :key="rackData.rack.id" class="col-6 col-md-4 col-lg-3 mb-4">
					<router-link class="rack" :to="`warehouse/racks/${rackData.rack.id}`">
						<div>{{ rackData.rack.uid }}</div>
						<div>{{ `Полки: ${rackData.shelvesInRack}` }}</div>
					</router-link>
				</div>
			</div>
		</main>
	</div>
</template>

<script>
import Navigation from "../components/Navigation.vue";

export default {
	data() {
		return {
			racks: [],
			isAdmin: this.$store.getters.isAdmin,
		};
	},

	async mounted() {
		let response;
		try {
			response = await this.axios.get("storage/racks");
			this.racks = response.data;
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