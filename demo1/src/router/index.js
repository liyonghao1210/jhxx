import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/login/login'
import Home from '@/components/Home'
import ListPage from '@/components/list/ListPage'
import MePage from '@/components/me/MePage'
import ShopIng from '@/components/shoping/ShopIng'
import Vant from 'vant'
import 'vant/lib/index.css'

Vue.use(Vant)

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    { //登录的路由
      path: '/',
      name: 'Login',
      component: Login
    },{ //HelloWorld的路由
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },{ //首页的路由
      path: '/Home',
      name: 'Home',
      component: Home
    },{ //列表页的路由
      path: '/ListPage',
      name: 'ListPage',
      component: ListPage
    },{ //我的页面路由
      path: '/MePage',
      name: 'MePage',
      component: MePage
    },{ //购物车的路由
      path: '/ShopIng',
      name: 'ShopIng',
      component: ShopIng
    }
  ]
})
