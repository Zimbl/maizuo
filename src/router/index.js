import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

import home from "./home"
import cinema from "./cinema"
import goods from "./goods"
import mine from "./mine"
import moviedetail from "./moviedetail"
export default new Router({
  routes: [//配置路由     路由懒加载写法
    home,cinema,goods,mine,moviedetail,
    {path:"/",redirect:"/home"},
    {path:"*",redirect:"/notfound"},
    {path:"/notfound",component:()=>import("@/views/Notfound")}
  ]
})
