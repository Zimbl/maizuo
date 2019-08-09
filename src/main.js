import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import "./stylesheets/main.scss"
import "./modules/rem"
import "swiper/dist/css/swiper.min.css" 
import 'mint-ui/lib/style.css'
import axios from "axios"
Vue.prototype.$http = axios;
import { Navbar, TabItem ,Header,Button,Cell,TabContainer, TabContainerItem} from 'mint-ui';

Vue.component("mt-navbar", Navbar);
Vue.component("mt-tab-item", TabItem);
Vue.component("mt-header", Header);
Vue.component("mt-button", Button);
Vue.component("mt-tab-container", TabContainer);
Vue.component("mt-tab-container-item", TabContainerItem);
Vue.component("mt-cell", Cell);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
