<template>
     <header class="header">
        <div class="row align-items-center">
            <div class="pageTitle">Warehouse.by</div>
        </div>
        <div class="row m-0 px-0">
            <div class="pageItem__wrapper">
                <router-link to="/warehouse" class="pageItem">Склад</router-link>
            </div>
            <div class="pageItem__wrapper">
                <router-link to="/supplies" class="pageItem">Поставки</router-link>
            </div>
            <div class="pageItem__wrapper">
                <router-link to="/shipments" class="pageItem">Отгрузки</router-link>
            </div>
            <div class="pageItem__wrapper">
                <router-link to="/items" class="pageItem">Товары</router-link>
            </div>
            <div class="pageItem__wrapper">
                <router-link to="/partners" class="pageItem">Партнёры</router-link>
            </div>
            <div v-if="isAdmin" class="pageItem__wrapper">
                <router-link to="/users" class="pageItem">Пользователи</router-link>
            </div>
            <div v-if="isAdmin" class="pageItem__wrapper">
                <router-link to="/history" class="pageItem">История</router-link>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    data() {
		return {
			isAdmin: this.$store.getters.isAdmin,
		};
	},
}
</script>