import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Register from '@/components/registerpage/Register'
import Movie from '@/components/blogpage/Movie'
import Recommand from "@/components/recomandpage/Recommand"
import MoviePlay from "@/components/common/MoviePlay"
import Login from "@/components/LoginPage/Login";
import MovieSet from "@/components/moviepage/MovieSet";
import SearchResult from "@/components/searchResultPage/SearchResult";

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home,
            meta: {
                keepAlive: true
            }
        },
        {
            path: '/login',
            name: 'Login',
            component: Login,
            meta: {
                keepAlive: false
            }
        },
        {
            path: '/register',
            name: 'Register',
            component: Register,
            meta: {
                keepAlive: false
            }
        },
        {
            path: '/movie',
            name: 'Movie',
            component: Movie,
            meta: {
                keepAlive: true
            }
        },
        {
            path: '/movieset',
            name: 'MovieSet',
            component: MovieSet,
            meta: {
                keepAlive: true
            }
        },
        {
            path: '/recommand',
            name: 'Recommand',
            component: Recommand,
            meta: {
                requireAuth: true,
                keepAlive: true
            }
        },
        {
            path: '/movieplay',
            name: 'MoviePlay',
            component: MoviePlay,
            meta: {
                keepAlive: true
            }
        },
        {
            path: '/search',
            name: 'SearchResult',
            component: SearchResult,
            meta: {
                keepAlive: true
            }
        }

    ]
})

