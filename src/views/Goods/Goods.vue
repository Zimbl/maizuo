<template>
    <div class="goods">
              <AppHeader></AppHeader>
              <div v-if="!goods" class="loading"></div>
            <div v-else class=fixedBox>   
             <Goodsbox></Goodsbox>

          </div>
    
    </div>
     
</template>
<script>
import AppHeader from "@/components/Header/Header.vue"

import Goodsbox from "./Goodsbox.vue"
export default {
    data(){
        return{
            goods:[],
            flag:false,
        }
    },
    components:{
    AppHeader, Goodsbox
    },
    methods:{
        
    },
     created(){
        this.$http.get("api/mz/goodslist").then(res=>{
            
           this.goods = res.data.data.object_list
        })
    }
}
</script>
<style lang="scss" scoped>
    .goods{
        overflow: hidden;
        .fixedBox{
            margin-top:50px;
        }
    }
</style>
