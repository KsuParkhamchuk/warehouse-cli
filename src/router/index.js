import Vue from 'vue'
import VueRouter from 'vue-router'
import VueCookies from 'vue-cookies'

import Login from '../views/Login.vue'
import Warehouse from '../views/Warehouse.vue'
import NotFound from '../views/NotFound.vue'
import History from '../views/History'
import Rack from '../views/Rack'

import store from '../store'

Vue.use(VueRouter)
Vue.use(VueCookies)

const routes = [
    {
		path: '/',
		redirect: '/warehouse'
	},
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/warehouse',
        name: 'warehouse',
        component: Warehouse,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/history',
        name: 'history',
        component: History,
        meta: {
            requiresAuth: true
        }
    },
    {
		path: '/warehouse/racks/:id',
		name: 'rack',
		component: Rack,
		meta: {
			requiresAuth: true
		}
	},
    {
        path: '*',
        component: NotFound
    },
]


const router = new VueRouter({
    mode: 'history',
    history: true,
    routes
})

router.beforeEach(async (to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        let token = Vue.$cookies.get('token');
        if (token === null || typeof token === 'undefined') {
            next({
                path: '/login',
                params: { nextUrl: to.fullPath }
            });
        } else {
            let user = store.getters.getUser;
            if (!user) {
                try {
                    let response = await this.axios.get('me');
                    if (response.status == 200) {
                        store.commit('setUser', response.data);
                        next();
                    }
                } catch (error) {
                    next({
                        path: '/login',
                        params: { nextUrl: to.fullPath }
                    });
                }
            } else {
                next();
            }
        }
    } else {
        next();
    }
});

export default router;