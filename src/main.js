import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import store from './store'
import router from './router'
import VueCookies from 'vue-cookies'


Vue.config.productionTip = false
Vue.use(VueCookies)
Vue.use(router)


Vue.$cookies.config('7d')

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
