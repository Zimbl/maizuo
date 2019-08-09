<template>
  <div id="app">
    
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
/*  .mint-header-title{
     margin:0px;
 } */
 .goodsdetail{
   .mint-header{
      opacity: 0.2;
      background-color: white;
      .mintui-back{
      color:black;

      }
    }
 }
 .goodslist{
   .mint-header{
     background-color: white;
     color:black
   }
 }
</style>
<script>
export default {
  components:{
  },
  created(){
    this.$store.dispatch("initCars")
  }
}
</script>
