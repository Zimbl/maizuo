<template>
  <div id="app">
  
    <!-- 用来将对应的路由组件进行显示 -->
    <keep-alive include="home">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<style lang="scss">
    .swiper-pagination{
        bottom:10px!important;
        right:10px!important;
        left:auto!important;
        width:auto!important;
        
    }
    .swiper-pagination-bullet-active {
      background: #fff!important;
    }
    .swiper-pagination-bullet {
    width: 8px!important;
    height: 8px!important;
    }
    .tabbar{
      position:fixed;
    }
    
</style>
  
<script>

export default {
  components:{
   
  }
}
</script>
