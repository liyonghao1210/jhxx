import Vue from 'vue'
import Router from 'vue-router'
import Ship from '@/components/pages/ship'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Ship',
      component: Ship
    }
  ]
})
