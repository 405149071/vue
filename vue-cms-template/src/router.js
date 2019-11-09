import VueRouter from 'vue-router'


import Home from './component/tabbar/Home.vue'
import Member from './component/tabbar/Member.vue'
import Search from './component/tabbar/Search.vue'
import Shopcar from './component/tabbar/Shopcar.vue'


// 3. 创建路由对象
var router = new VueRouter({
  routes: [
    { path: '/home', component: Home },
    { path: '/member', component: Member },
    { path: '/search', component: Search },
    { path: '/shopcar', component: Shopcar },
  ],
  linkActiveClass: 'mui-active'
})

// 把路由对象暴露出去
export default router