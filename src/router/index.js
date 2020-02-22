import Vue from 'vue'
import Router from 'vue-router'
import Home from '../page/home.vue'
import Order from '../page/order.vue'
import Search from '../page/search.vue'
import Profile from '../page/profile.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
      //设置默认
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/order',
      name: 'order',
      component: Order
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile
    }
  ]
})
