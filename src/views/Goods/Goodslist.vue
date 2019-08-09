<template>
    <div class="goodslist">
        <mt-header title="飘洋过海鲜来袭">
            <router-link to="/goods" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
            <mt-button icon="search" slot="right"></mt-button>
        </mt-header>
        <div class="navbar">
            <span 
                :class="{active:type === nav.type}"
                v-for="nav in navs"
                :key="nav.id"                
                @click="type=nav.type;sort()"
            >{{nav.title}} <p :class="['fa',{'fa-sort':nav.isClass}]"></p></span>
            <!-- <span>销量<p :class="['fa','fa-sort']"></p></span>
            <span>价格<p :class="['fa','fa-sort']"></p></span> -->
        </div>
        <div class="gooddetailbox">
            <Goodsdetailbox
                v-for="goodlist in goodslist"
                :key="goodlist.id"
                :goodlist="goodlist"
            ></Goodsdetailbox>
        </div>
    </div>
</template>
<script>

import Goodsdetailbox from "./Goodsdetailbox.vue"

export default {
    watch:{
        /* type(){
            this.goodslist=[];
            this.getGoods();
        }, */
        /* goodslist(){
            this.getGoods();
        } */
    },
    
   data(){
       return{
            type:"tuijian",
           navs:[
               {id:1,title:"推荐",type:"tuijian"},
               {id:2,title:"销量",isClass:"true",type:"xiaoshou"},
               {id:3,title:"评分",isClass:"true",type:"pingfen"},


           ],
           goodslist:[],
          isSort:true,
          isScort:true
       }
   },
   methods:{
       sort(){
           
           if(this.type=="tuijian"){
            this.$http.get("api/mz/home/jianqi").then(res=>{
            console.log(res.data.data)
            this.goodslist = res.data.data.object_list
            
          })
           }else if(this.type=="xiaoshou"){
               if(this.isSort){
                   this.isSort = false          
              this.goodslist.sort(this.compare("num"))
               }else{
                   this.isSort = true          
              this.goodslist.sort(this.decompare("num"))
               }                             
          }else if(this.type=="pingfen"){
              if(this.isScort){
                  this.isScort = false
              this.goodslist.sort(this.compare("score"))
              }else{
                  this.isScort = true

               this.goodslist.sort(this.decompare("score"))   
              }
            
          }
       },
       compare(property){
        if ((typeof this.goodslist[0][property]) != "number") { // 属性值为非数字
            return function(object1, object2) {
            var value1 = object1[property];
            var value2 = object2[property];
            return value1.localeCompare(value2);
             }
       } else{return function(a,b){
        var value1 = a[property];
        var value2 = b[property];
        return value1 - value2;
    }}
},
       decompare(property){
            if ((typeof this.goodslist[0][property]) != "number") { // 属性值为非数字
           return function(object1, object2) {
                var value1 = object1[property];
                var value2 = object2[property];
                return value2.localeCompare(value1);
           }
   } else{return function(a,b){
        var value1 = a[property];
        var value2 = b[property];
        return value2 - value1;
    }}
    
}, 
     
        getGoods(){
            this.$http.get("api/mz/home/jianqi").then(res=>{
            console.log(res.data.data)
            this.goodslist = res.data.data.object_list
            })
        }

    },
   components:{
       Goodsdetailbox
   },
   created(){
       this.getGoods();
   }

}
</script>
<style lang="scss" scoped>
    .navbar{
        width:100%;
        height:0.44rem;
        display: flex;
        justify-content: space-around;
        span{
            width:30%;
            padding-top:0.11rem;
            text-align: center;
        }
        .active{
            color:#ff5f16
        }
    };
    .gooddetailbox{
        width:100%;
        display: flex;
        justify-content: row;
        justify-content: space-around;
        flex:1;flex-wrap:wrap;
    }
</style>

