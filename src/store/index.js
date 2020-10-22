import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        user: {
            name: window.sessionStorage.getItem('user' || '[]') == null ? '' : JSON.parse(window.sessionStorage.getItem('user' || '[]')).name
        }
    },
    mutations: {
        login (state, user) {
            state.user = user
            window.sessionStorage.setItem('user',JSON.stringify(user))
        }
    }
})
