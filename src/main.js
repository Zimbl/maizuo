import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Cell } from 'mint-ui';
Vue.config.productionTip = false
import "./stylesheet/main.scss"
import "./modules/rem.js"
import axios from "axios"
import "swiper/dist/css/swiper.min.css"

import {Lazyload,InfiniteScroll,Header,Button, Tabbar, TabItem,TabContainer, TabContainerItem,Swipe, SwipeItem} from 'mint-ui';

Vue.use(Lazyload);
Vue.use(InfiniteScroll);
Vue.component("mt-header", Header);
Vue.component("mt-button", Button,);
Vue.component("mt-tabbar", Tabbar);
Vue.component("mt-tab-item", TabItem);
Vue.component("mt-cell", Cell);
Vue.component("mt-tab-container", TabContainer);
Vue.component("mt-swipe", Swipe);
Vue.component("mt-swipe-item", SwipeItem);

Vue.component("mt-tab-container-item", TabContainerItem);
import "./modules/directive"
Vue.prototype.$http = axios;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
