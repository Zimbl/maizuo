<template>
    <div class="home">
        <div v-if='isShow' class="app-header">
            <div>
                <p>电影</p>
            </div>
        </div>
        <!-- <AppHeader></AppHeader> -->
        <HomeBanner></HomeBanner>
        <div class="navbar" :class="{fixedTop:flag}">
            <span
                :class="{active:type===nav.type}"
                v-for="nav in navs"
                :key="nav.id"
                @click="type=nav.type"
            >{{nav.title}}</span>
         
            <div class="xianbox">
                <span class="xian"></span>
            </div>
        </div>
        <div :class="{fixedBox:flag}">
            <MovieBox :type="type"></MovieBox>

        </div>
       
        <Tabbar></Tabbar>

    </div>
    
</template>

<script>
//引入底部组件
import Tabbar from "@/components/Tabbar"
//引入头部组件
// import AppHeader from "@/components/Header"
//引入轮播图
import HomeBanner from "@/components/Banner"
//引入moviebox
import MovieBox from "./MovieBox"
export default {
name:"home",
data(){
    return{
        type:"cominglist",
        navs:[
            {id:1,title:"正在热映",type:"cominglist"},
            {id:2,title:"即将上映",type:"details"}
        ],
        flag:false,
        isShow:false,
    }
},
//组件内的路由守卫   路由跳转的时候
beforeRouteLeave(to,from,next){
    this.homeTop = document.documentElement.scrollTop || document.body.scrollTop;
    next();
},
components:{
    Tabbar,
    // AppHeader,
    HomeBanner,
    MovieBox
  },
  methods:{
      listenScroll(e){
          let sTop = document.documentElement.scrollTop || document.body.scrollTop;
        if(sTop >= 210 && !this.flag){
            this.flag = true;
            this.isShow = true;
            
        }else if(sTop < 210 && this.flag){
            this.flag = false;
            this.isShow = false;
        }
      }
  },
//   created(){
//       window.addEventListener("scroll",this.listenScroll)
//   },
//   beforeDestroy(){
//       window.removeEventListener("scroll",this.listenScroll)
//   },
  activated(){
      window.addEventListener("scroll",this.listenScroll)
      window.scrollTo(0,this.homeTop)
  },
  deactivated(){
      window.removeEventListener("scroll",this.listenScroll)
      this.flag= false;
      this.isShow = false;

  }
  
  
}
</script>

<style lang="scss">
    .home{
        .fixedBox{
            margin-top:180px;
        }
        margin-bottom: 60px;
            overflow: hidden;
        .navbar{
            position:relative;
            height:49px;
            display:flex;
            background-color:#fff;
            justify-content: space-around;
            border-bottom:.5px solid #ececec;
            align-items:center;
            z-index:10;
            &.fixedTop{
                position:fixed;
                left:0;
                top:44px;
                width:100%;
            }
            span{
                font-size: 14px;
                line-height: 16px;
                width:50%;
                text-align: center;
            } 
            .active{
                color:#ff5f16;
            }  
   
        }
    }
     .app-header{
        width:100%;
        height: 44px;
        background:#fff;
        text-align: center;
        line-height: 44px;
        color: #191a1b;
        font-size: 17px;
        position:fixed;
        left:0;
        top:0;
        z-index:10;
        // display:none;
    }
    .tabbar{
        position:fixed;
    }
</style>

