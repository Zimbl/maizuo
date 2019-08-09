<template>
<div class="cool_banner">
    <div :class="['movie_banner','swiper-container',]"
        ref="mySwiper" >
            <div class="swiper-wrapper" >
                <div 
                class="swiper-slide"
                v-for="item in banners"
                :key="item.id"
                >
                    <img :src="item.img" alt="">
                </div>
            </div>
    </div>
    <div id="movieIfon">
            <div class="movieNm">
                <p>{{movieNm}}</p><p>{{movieSc}}</p>分
            </div>
            <div class="movieDesc">
                <span>{{movieDesc}}</span>
                <router-link :to="{name:'movieDetail',params:{id:movieId,msg:msg}}" class="move">
                    <i class="fa fa-angle-right"></i>
                </router-link>
            </div>
    </div>
    <div class="page-navbar">
        <mt-navbar class="page-part" v-model="selected">   
            <mt-tab-item 
                v-for="item in movieShows" :id="item.showDate"
            >{{item.dateShow}}
            </mt-tab-item>
        </mt-navbar>  
        <mt-tab-container v-model="selected">  
          <mt-tab-container-item v-for="item in movieShows"
            :id="item.showDate">  
            <mt-cell v-for="n in item.plist" >
            <div class="cinemaTime">{{n.tm}}</div>
            <div class="cinemaLang">
                <p>{{n.lang}}</p>
                <span>{{n.th}}</span>
            </div>
            <div class="cinemaPrice">￥{{n.vipPrice}}</div>
            <div class="cinemaShop">购买</div>

            </mt-cell>  
          </mt-tab-container-item>   
        </mt-tab-container> 
    </div>

    
</div>
</template>
<style lang="scss">
.cool_banner{
    .movie_banner{
        padding: 20px;
        margin-top:20px;
        .swiper-wrapper{
            .swiper-slide{
                img{
                    width: 90px;
                    height: 120px;
                }
            }
        }
    }
    #movieIfon{
        .movieNm{
            width: 100%;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            margin-bottom: 10px;
            font-size: 10px;
            color:#ffb232;
            p:first-child{
                font-size: 15px;
                color:#191a1b;
                margin-right: 10px;
            }
            p:last-child{
                font-size: 16px;
                color:#ffb232;
                font-family: "宋体";
            }
        }
        .movieDesc{
            width:100%;
            display:flex;
            justify-content: center;
            span{
                display: inline-block;
                width:200px;
                overflow: hidden;
                white-space:nowrap;
                text-overflow:ellipsis;
            }
            .move{
                margin-left: 10px;
                font-size: 15px;
            }
        }
    }
    .page-navbar{
            .mint-navbar{
                flex-direction: row;
                flex:1;
                overflow: auto;
                width: 318px;
                .mint-tab-item{
                    .mint-tab-item-label{
                        width: 106px;
                    }
                }
                .is-selected{
                    border-bottom: 3px solid #ff5f16;
                    color: #ff5f16;
                    margin-bottom: -1px;
                }
            }
            .mint-navbar::-webkit-scrollbar {display:none}
            .mint-tab-container{
                .mint-tab-container-item{
                    .mint-cell-value{
                        width: 100%;
                        height: 60px;
                        color: #3a3a3a;
                        display: flex;
                        font-size: 14px;
                        justify-content: space-around;
                        .cinemaTime{
                            font-weight: 650;
                        }
                        .cinemaLang{
                                width: 59px;
                                overflow: hidden;
                                white-space:nowrap;
                                text-overflow:ellipsis;
                            p{
                                margin: 0 0 5px 10px;                               
                            }
                            span{
                                font-size: 13px;
                                color:#797d82;
                            }
                        }
                        .cinemaPrice{
                            color:#ff5f16;
                            font-weight: 650;
                        }
                        .cinemaShop{
                            border: 1px solid #ff5f16;
                            color:#ff5f16;
                            box-sizing: border-box;
                            padding: 5px;
                            font-size: 12px;
                            border-radius: 5px;
                        }
                    }
                }
            }
        
    }
}


</style>
<script>
import Swiper from "swiper"
export default {
    props:["msg"],
    data(){
        return{
            banners:[],
            num:0,
            movieNm:null,
            movieSc:null,
            movieId:null,
            movieDesc:null,
            movieShows:[],
            selected:'1'
        }
    },
    computed:{
        computedValue(){
            return this.num
        }
    },
    created(){
        this.$http.get("/api/mz/tsy").then(res=>{
            this.banners= res.data.data.object_list;
            this.$nextTick(()=>{
                new Swiper(".movie_banner",{
                    effect : 'coverflow',
                    slidesPerView: 3,
                    centeredSlides: true,
                    slideToClickedSlide: true,
                    on:{
                        transitionEnd:()=>{
                            this.num=this.$refs.mySwiper.swiper.activeIndex
                            this.movieNm=this.banners[this.num].nm
                            this.movieSc=this.banners[this.num].sc
                            this.movieDesc=this.banners[this.num].desc
                            this.movieShows=this.banners[this.num].shows
                            this.selected= this.movieShows[0].showDate
                            this.movieId= this.banners[this.num].id
                        },
                    },
                })
            })
        })
        
    },
}
</script>

