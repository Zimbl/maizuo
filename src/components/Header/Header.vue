<template>
    <div class="app-header">
       <div class="left">
          <router-link to="/goods">
           <i :class="['fa','fa-chevron-left','backleft']"> </i>
            
          </router-link>
       </div>
       
    </div>
</template>
<script>
import router from "@/router"
export default {
    data(){
        return{
          
        }
    },
    created(){

router.beforeEach((to,from,next)=>{
    // console.log(to.name)
    
    next()
})
    }
}
</script>

<style lang="scss" scoped>
 .app-header{
        margin:0px;
         display:flex;
        color: #2e2f30;
        width:100%;
        height:50px;
        line-height:50px;
        background:rgba(170, 116, 116, 0.6);
        font-size:16px;
        justify-content: space-between;
        padding:0 20px;
        position:fixed;
        z-index: 10;
        span{
            padding-left:10px;
        }
    }
</style>

