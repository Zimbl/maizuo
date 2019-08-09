<template>
    <div class="shopcar">
       
        <mt-header title="">
            <router-link to="/goodslist" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
            
        </mt-header>
        <mt-cell
            v-for="good in cars"
            :key="good.id"
            :title="good.title"
            :label= "`${good.num/10}` + '￥' +'x' +`${good.buynum}`"
        >
            <img :src="good.url" alt="">
        </mt-cell>
        <div class="bottom">
            <div class="jiage">总价：{{getTotal.price}} </div>
            <div class="jiesuan">结算</div>
        </div>
    </div>
</template>
<script>
import {mapState,mapActions,mapGetters} from "vuex"
export default {
    computed:{
        ...mapState({
            cars:state=>state.mygoodsCar.cars
        }),
        ...mapGetters(["getTotal"])
    }
}
</script>
<style lang="scss" scoped>

 .mint-header{
     background-color:#fff;
     color:black;
 }
 img{
     width:0.95rem;
     height:0.95rem;
 }
 .bottom{
     position: fixed;
     width:100%;
     bottom:0;
     left:0;
     display: flex;
     justify-content:space-around;
     height:0.5rem;
     .jiage{
         width:50%;
         text-align:center;
         line-height:0.5rem;
         color:#c03131;
     }
     .jiesuan{
         width:50%;
          text-align:center;
         line-height:0.5rem;
         background-color:#c03131;
         color:white;
     }
 }
</style>


