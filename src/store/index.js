import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
      user: null,
    },
    mutations: {
      setUser(state, value) {
        state.user = value;
      }
    },
    getters: {
      getUser: (state) => {
        return state.user;
      },

      isAdmin: (state) => {
        return state.user.role === 'ADMIN';
      }
    }
  })