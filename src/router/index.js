import Vue from 'vue'
import VueRouter from 'vue-router'
// import store from '../store'
// import axios from 'axios'
import VueCookies from 'vue-cookies'

import Login from '../views/Login.vue'
import Warehouse from '../views/Warehouse.vue'
import NotFound from '../views/NotFound.vue'

Vue.use(VueRouter)
Vue.use(VueCookies)

const routes =  [
        {
            path: '/',
            name: 'login',
            component: Login
        },

        {
            path: '/warehouse',
            name: 'warehouse',
            component: Warehouse
        },
        {
            path: '*', 
            component: NotFound
        }

    ]


const router = new VueRouter ({
    mode: 'history',
    history: true,
    routes
})

// router.beforeEach(async (to, from, next) => {
// 	if (to.matched.some(record => record.meta.requiresAuth)) {
// 		let token = Vue.$cookies.get('token');
// 		if (token == null || typeof token == 'undefined') {
// 			localStorage.setItem('from', from.fullPath);
// 			next({
// 				path: '/login',
// 				params: { nextUrl: to.fullPath }
// 			});
// 		} else {
// 			let user = store.getters.getUser;
// 			if (!user.id) {
// 				try {
// 					let response = await axios.get('getUserInfo');
// 					if (response.status == 200) {
// 						store.commit('setUser', response.data);
// 						next();
// 					}
// 				} catch (error) {
// 					localStorage.setItem('from', from.fullPath);
// 					next({
// 						path: '/login',
// 						params: { nextUrl: to.fullPath }
// 					});
// 				}
// 			} else {
// 				next();
// 			}
// 		}
// 	} else {
// 		next();
// 	}
// });

export default router