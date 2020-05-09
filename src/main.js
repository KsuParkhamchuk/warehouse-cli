import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import store from './store'
import router from './router'
import VueCookies from 'vue-cookies'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.config.productionTip = false;
Vue.use(VueAxios, axios);
Vue.use(VueCookies);
Vue.use(router);

Vue.axios.defaults.baseURL = 'http://localhost:3000/';
axios.interceptors.request.use((config) => {
  const token = Vue.$cookies.get('token');
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }

  return config;
}, (error) => {
  return Promise.reject(error);
});

Vue.$cookies.config('7d')

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
