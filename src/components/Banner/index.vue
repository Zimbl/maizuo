<template>
    <div class="home-banner swiper-container">
        <div class="swiper-wrapper">
            <div 
                class="swiper-slide"
                v-for="banner in banners"
                :key="banner.id"
                
            >
                <img width="100%" height="210px" :src="banner.img" alt="">
            </div>
        </div>
        <div class="swiper-pagination"></div>
    </div>
</template>
<script>
import Swiper from "swiper"
export default {
    data(){
        return {
            banners:[]
        }
    },
    created(){
        this.$http.get("/api/mz/home/cominglist",{
            params:{
                limit:2
            }   
        }).then(res=>{
            this.banners = res.data.data.object_list;
            //划不动  因为数据改变的时候，内部生成虚拟dom，虚拟dom结构进行对比，对比完成之后才会渲染真实dom结构
           this.$nextTick(()=>{
                new Swiper(".home-banner",{
                loop:true,
                pagination:{
                    el:".swiper-pagination"
                }
                })
           })
        })
    }
}
</script>
<style lang="scss" scoped>
  
</style>
