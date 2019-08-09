import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
import home from "./home"
import cinema from "./cinema"
import movieList from "./movieList"
import movieDetail from "./movieDetail"

export default new Router({
    routes: [
        {path:"/",redirect:"/cinema"},
        home,cinema,movieList,movieDetail,
        {path:"*",redirect:"/notfound"},
        {path:"/notfound",component:()=>import("@/views/Notfound")}
      ]
})