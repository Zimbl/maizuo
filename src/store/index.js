import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)



import mygoodsCar from "./mygoodsCar"
export default new Vuex.Store({
    modules:{
        mygoodsCar
    }
})
