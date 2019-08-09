import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// import state from "./state"
// import getters from "./getters"
// import mutations from "./mutations"
// import actions from "./actions"
// export default new Vuex.Store({
//   state,  
//   getters,
//   mutations,
//   actions
// })

import myNum from "./myNum"
export default new Vuex.Store({
  modules:{
    myNum  //this.$store.state.myNum.num    mapState(["num"])   mapState({num:state=>state.myNum.num})
  }
})