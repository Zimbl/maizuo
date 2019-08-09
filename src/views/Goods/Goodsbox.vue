<template>
    <div 
    class="goods-box"
     v-infinite-scroll="loadMore()"
     infinite-scroll-disabled="loading"
     infinite-scroll-distance="10"
    >
         
        <div>
            <GoodsItem
            v-for="good in goodsitem"
            :key="good.id"
            :goods="good"
            >
            </GoodsItem>
         </div>
    </div>
</template>
<script>
import GoodsItem from "./GoodsItem"
import { Toast } from 'mint-ui';
export default {
    methods:{
        loadMore(){
        //    console.log("4564564")
            this.getGoods()
        },
        getGoods(){
           this.$http.get("api/mz/goodslist").then(res=>{
           
           this.goodsitem = res.data.data.object_list
        })
    }
        },
     data(){
        return{
            goodsitem:[]
        }
    }, 
    created(){
          
        },
    
   
    components:{
        GoodsItem
    }
}
</script>
<style lang="scss" scoped>
    .goods-box{
        height:16.12rem;
    }
</style>

