import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Register from '@/components/registerpage/Register'
import Movie from '@/components/moviepage/Movie'
import Recommand from "@/components/recomandpage/Recommand";
import MoviePlay from "@/components/common/MoviePlay";
Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/register',
            name: 'Register',
            component: Register
        },
        {
            path: '/movie',
            name: 'Movie',
            component: Movie
        },
        {
            path: '/recommand',
            name: 'Recommand',
            component: Recommand
        },
        {
            path: '/movieplay',
            name: 'MoviePlay',
            component: MoviePlay
        }

    ]
})

