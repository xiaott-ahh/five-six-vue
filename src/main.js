import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

var axios = require('axios')
axios.defaults.baseURL = 'http://localhost:8443/api'
Vue.prototype.$axios = axios
Vue.config.productionTip = false

Vue.use(ElementUI)

router.beforeEach((to, from, next) => {
    console.log(to.meta.requireAuth)
        if (to.meta.requireAuth) {
            console.log(store.state.user.name)
            if (store.state.user.name) {
                next()
            } else {
                next({
                    path: 'login',
                    query: {redirect: to.fullPath}
                })
            }
        } else {
            next()
        }
    }
)

/* eslint-disable no-new */
new Vue({
    el: '#app',
    render: h => h(App),
    router,
    store,
    components: { App },
    template: '<App/>'
})

