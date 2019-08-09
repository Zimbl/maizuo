<template>
    <div class="goodsitem">
        <router-link tag="div" :to="{name:'goodslist'}">
          <img v-lazy="goods.img" alt="">
                
        </router-link>
        
       
    </div>
</template>
<script>
import axios from "axios"
import utils from "@/modules/utils"

export default {
    methods:{
        
    },
    props:{
        goods:Object
    },
}
</script>
<style lang="scss" scoped>
    img{
        width:100%
    }
</style>
