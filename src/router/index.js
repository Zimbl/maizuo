import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)
import goods from "./goods"
import goodslist from "./goodslist"
import goodsdetail from "./goodsdetail"
import shopcar from "./shopcar"

export default new Router({
  routes: [
    {path:"/",redirect:"/goods"},
    goods,goodslist,goodsdetail,shopcar
  ]
})
