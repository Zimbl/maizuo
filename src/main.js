import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false


//引入main.scss文件
import "./stylesheets/main.scss"
//引入rem.js
import "./modules/rem"
//引入swiper的样式
import "swiper/dist/css/swiper.min.css"
//在vue上面挂载 this.$http就可以获取axios这个对象
import axios from "axios"
Vue.prototype.$http = axios;

//引入mint-ui相关组件
import { Lazyload,InfiniteScroll } from 'mint-ui';

Vue.use(Lazyload);
Vue.use(InfiniteScroll);


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
