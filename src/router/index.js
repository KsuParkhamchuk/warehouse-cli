import Vue from 'vue'
import VueRouter from 'vue-router'
import VueCookies from 'vue-cookies'

import Login from '../views/Login.vue'
import Warehouse from '../views/Warehouse.vue'
import NotFound from '../views/NotFound.vue'
import History from '../views/History'
import Rack from '../views/Rack'
import RackNew from '../views/RackNew'
import Shelf from '../views/Shelf'
import Supplies from '../views/Supplies'
import NewSupply from '../views/SupplyNew'
import Supply from '../views/Supply'
import Partners from '../views/Partners'
import Partner from '../views/Partner'
import PartnerNew from '../views/PartnerNew'
import Items from '../views/Items'
import Item from '../views/Item'
import ItemNew from '../views/ItemNew'
import Users from '../views/Users'
import User from '../views/User'
import UserNew from '../views/UserNew'
import UserEdit from '../views/UserEdit'
import ShipmentOperation from '../views/ShipmentOperation'
import Shipments from '../views/Shipments'

import axios from 'axios'

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
    path: '/warehouse/add-new-rack',
    name: 'newRack',
    component: RackNew,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/warehouse/shelves/:id',
    name: 'shelf',
    component: Shelf,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/supplies',
    name: 'supplies',
    component: Supplies,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/add-new-supply',
    name: 'newSupply',
    component: NewSupply,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/supplies/:id',
    name: 'supply',
    component: Supply,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/partners',
    name: 'partners',
    component: Partners,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/partners/:id',
    name: 'partner',
    component: Partner,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/add-new-partner',
    name: 'newPartner',
    component: PartnerNew,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/items',
    name: 'items',
    component: Items,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/items/:id',
    name: 'item',
    component: Item,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/add-new-item',
    name: 'newItem',
    component: ItemNew,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/users',
    name: 'users',
    component: Users,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/add-new-user',
    name: 'newUser',
    component: UserNew,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/edit-user/:id',
    name: 'editUser',
    component: UserEdit,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/users/:id',
    name: 'users',
    component: User,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/shipment-operation/:itemId/:shelfId',
    name: 'shipmentOperation',
    component: ShipmentOperation,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '*',
    component: NotFound
  },
  {
    path: '/shipments',
    name: 'shipments',
    component: Shipments,
    meta: {
      requiresAuth: true
    }
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
          let response = await axios.get('users/me');
          if (response.status == 200) {
            store.commit('setUser', response.data);
            next();
          }
        } catch (error) {
          console.log(error);
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