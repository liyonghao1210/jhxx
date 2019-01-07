import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
// 引入左侧菜单栏
import Aside from '@/components/nav/Aside'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },{
      path: '',
      name: 'Aside',
      component: Aside
    }
  ]
})
