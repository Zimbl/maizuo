<template>
    <div class="goodsdetail" >
        <mt-header title="">
            <router-link to="/goodslist" slot="left">
                <mt-button icon="back">back</mt-button>
            </router-link>
            
        </mt-header>

        <div class="detail-banner swiper-container">
            <div class="swiper-wrapper " @click.capture="isShow = false">
                <div class="swiper-slide" >
                    <img width="100%" :src="good.img" alt="">
                </div>
                <div class="swiper-slide">
                    <img width="100%" :src="good.url" alt="">
                </div>
               
                
            </div>
             <div class="swiper-pagination"></div>
             <div class="swiper-scrollbar"></div>
         </div>
        <!-- <mt-swipe :auto="2000" class="detail-banner">
            <mt-swipe-item><img :src="good.url" alt=""></mt-swipe-item>
            <mt-swipe-item><img :src="good.img" alt=""></mt-swipe-item>
            
        </mt-swipe> -->
                
        <div class="item-info">
            <div class="item-info-container">
                <div class="item-info-master">
                    <span class="labels">
                        <span style="background-color: rgb(120, 160, 209);">
                 包邮
                       </span>
                      <span style="background-color: rgb(145, 188, 111);">
                  新品
                      </span>
                    </span>
                  {{good.ingredients}}
                 </div>
                <div class="item-info-slave">
                    {{good.level}}
                </div> 
                <div class="item-info-price-container clearfix">
                    <div class="item-info-price">
                        <span class="icon">￥</span>{{good.num/10}}
                        <span class="market" style="display: none;">￥0</span>
                    </div>  
                    <div class="item-info-sale-count">{{good.num}}人购买
                    </div>
                </div>
            </div>
        </div>  
        <div class="item-cell-parent" @click= "isShow = true">
            <div class="item-cell">
                <span>规格：1</span> 
                <i class="fa fa-angle-right" aria-hidden="true"></i>
            </div>
        </div>
        <div class="item-city">
            <div class="item-delivery-info">
                <span>配送至：<span class="city">请选择配送范围</span></span>

                <i class="fa fa-angle-right" aria-hidden="true"></i>
                
            </div>
        </div>
        <div class="item-service item-service-hadline">
            <div class="item-service-line">
                <li class="service-icon">
                    <i class="iconfont icon-dingdan-yiquxiao" style="font-size: 21px; color: rgb(192, 49, 49); vertical-align: text-bottom;">

                    </i>
                 包邮
                 </li>
            </div>
        </div>
        <div class="item-detail-topic">
            <div class="gap">
            </div> 
            <div class="container">
                <h3 class="title">
                    <span>商品详情</span>
                </h3>
            </div>
        </div>
        <div class="item-desc">
            <div>
                <p>
                    <img :src="good.img" alt="">
                    <img :src="good.url" alt="">
                    <img src="https://file.sdyxmall.com/h5/v1/public/app/img/group5.b0b24d0.png" alt="">

                </p>
            </div>
           
        </div>
        <div class="item-box-container" v-if="isShow">
            <div class="box-header">
                <div class="topic clearfix">
                    <div class="sku-pic">
                        <img :src="good.url" width="110px">
                    </div> 
                    <div class="sku-info">
                        <p class="price">
                            ￥
                        <span>{{good.num/10}}</span>
                        </p> 
                        <p class="options">商品数量：1</p> 
                        <p class="slave-name"></p>
                    </div>
                </div> 
                 <div class="box-count">
                    <div class="name">数量</div> 
                    <div class="count-container clearfix">
                        <mt-button  class="sub noSub" @click.stop="[reduceGoodInCars(good),getnum()]">
                            -
                        </mt-button    > 
                        <input type="text" class="num" :value="this.buynum"> 
                        <mt-button  class="add canAdd" @click.stop="[addGoodInCars(good),getnum()]">
                            +
                        </mt-button    > 
                            <label style="display: none;">购买数量不能超过500个</label>
                    </div>
                </div>
            </div> 
            <div class="box-footer-cell box-footer">
                <div class="buynow had-buy">立即购买</div>
                <div class="add-cart had-add" @click="addGoodInCars(good)">加入购物车</div>
            </div>
        </div>

        <div class="shoppingcar">
            <router-link :to="{name:'shopcar'}">
                 <div class="fa fa-shopping-cart shop-car" aria-hidden="true"></div>
            </router-link>
           
            <div class="buy">立即购买</div>
            <div class="addshopcar" @click="addGoodInCars(good)">加入购物车</div>
        </div>
    </div>
</template>
<script>

import {mapActions,mapState} from "vuex"
import Swiper from "swiper"
export default {
    
    data(){
        return{
            good:[],
            isShow:false,
             buynum:null,
             goodnum:null
        }
    },
    watch:{
      git(){
          return console.log(this.cars)
      },
        buynum:{
            handler(newvalue,oldvalue){
                this.goodnum = newvalue
            }
        }
    },
    computed:{
        ...mapState({
            cars:state=>state.mygoodsCar.cars
        }),
       
       
        
    },
    methods:{
        ...mapActions(["addGoodInCars","reduceGoodInCars"]),
        
         getnum(){
             setTimeout(()=>{
                    this.cars.filter(item=>{
            if(item.id === this.good.id){
                this.buynum = item.buynum
                console.log(this.buynum)
            }
            return true
        })
             },500)
            
        
        }
    },
    created(){
        // console.log(this.cars)
        
        this.$http.get("/api/mz/home/jianqi/" + this.$route.params.id).then(res=>{
            // console.log(typeof(res.data))
            this.good = res.data
            // console.log(typeof(this.good))
             console.log(this.good)
            this.getnum(),

            this.$nextTick(()=>{
                new Swiper(".detail-banner",{
                loop:true,
                pagination: {
                el: '.swiper-pagination',
                },
                scrollbar: {
                el: '.swiper-scrollbar',
                },
            })
            })
        })
    },
    
}
</script>
<style lang="scss" scoped>
        .swiper-container {
            width: 100%;
            height: 230px;
        }  
        img{
            width:100%
        }
        .item-info {
            padding: 15px;
            text-align: left;  
            .item-info-container{
            color: #2c3e50;
            .item-info-master{
            font-size: 15px;
            max-height: 44px;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            font-family: Microsoft YaHei,Tahoma,Helvetica,Arial,sans-serif;
        }
        .item-info-slave{
            font-size: 14px;
            color: #797d82;
            margin-top: 8px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
        .item-info-price-container{
            margin-top: 10px;
             height: 30px;
             .item-info-sale-count{
                height: 100%;
                vertical-align: bottom;
                float: left;
                width: 25%;
                text-align: right;
                font-size: 11px;
                color: #bdc0c5;
                line-height: 40px;
             }
                }
        }
        .item-info-price{
            float: left;
            width: 75%;
            color: #c03131;
            font-size: 20px;
            height: 100%;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
       
           }
        .item-cell-parent{
                .item-cell{
                    padding: 15px;
                    font-size: 13px;
                    color: #797d82;
                    position: relative;
                    display: flex;
                    align-items: center;
                    justify-content: space-between
                }
                .item-cell:before {
                    content: " ";
                    position: absolute;
                    left: 0;
                    right: 0;
                    height: 1px;
                    color: #ededed;
            }
            .item-cell:after {
                    bottom: 0;
                    border-bottom: 1px solid #ededed;
                    transform-origin: 0 100%;
                    transform: scaleY(.5);
            }
        
        }
        .item-city{
                padding: 15px;
                font-size: 13px;
                color: #797d82;
                position: relative;
                .item-delivery-info{
                    display: flex;
                    -webkit-box-align: start; 
                    align-items: flex-start;
                    justify-content: space-between;
                    .city{
                        color:black;
                    }
                }
        }
        .item-service{
            padding: 10px 13px;
            position: relative;
        }
        .item-detail-topic{
            .gap{
                background-color: #f4f4f4;
                height: 10px;
                width: 100vw;  
            }
            .container{
                width: 100%;
                margin: 10px auto;
                .title{
                    color: #797d82;
                    font-size: 13px;
                    text-align: center;
                    line-height: 1.1;
                    margin: 22px 0;
                    span{
                        display: block;
                        font-size: 13px;
                        color: #797d82;
                        position: relative;
                        font-weight: 400;
                    }
                }
            }
        }
        .item-desc{
            margin-bottom:0.55rem;
        }
        .shoppingcar{
            display: flex;
            justify-content: space-around;
            height:0.55rem;
            width:100%;
            position:fixed;
            bottom: 0;
            left:0;
            z-index: 33;
            .shop-car{
                width:0.53rem;
                height:0.55rem;
                height:100%;
                text-align: center;
                line-height:0.55rem;
                background-color:#fff;
            }
            .buy{
                flex:1;
                color:#000;
                text-align: center;
                line-height:0.55rem;
                background-color:#fff;

            }
            .addshopcar{
                flex:1;
                background-color:#c03131;
                color:#fff;
                text-align: center;
                line-height:0.55rem;
                
            }
        }
        .item-box-container{
            // display: none;
            height: 70%;
            min-height: 352px;
            background-color: #fff;
            position: fixed;
            bottom: 0;
            width: 100%;
            z-index: 570;
            // margin-bottom: 0.55rem;
            .box-header{
                padding: 0 15px;
                .topic {
                    margin-top: 15px;
                    background-color: #fff;
                    display: flex;
                    align-items: center;
                    height: 110px;
                    position: relative;
                    .sku-pic{
                        width:1.1rem;
                        height:1.1rem;
                        img{
                            width:100%;
                            height:100%;
                        }
                    }
                    .sku-info{
                        max-height: 100%;
                        padding-left: 15px;
                        flex: 1;
                        width: 0; 
                        .price{
                            font-size: 15px;
                          color: #c03131;
                          height: 25px; 
                          span{
                              font-size: 20px;
                          }
                        }
                        .options{
                            font-size: 13px;
                            color: #2e2f30;
                        }
                    }
                }
                .box-count{
                    margin-top: 12px;
                    margin-bottom: 24px;
                    .name{
                        font-size: 13px;
                        color: #797d82;
                        line-height: 20px;
                    }
                    .count-container{
                        margin: 8px 0;
                        font-size: 15px;
                        height:0.35rem;
                        .sub{
                            height:0.35rem;
                            width:0.35rem;
                        }
                        .add{
                            height:0.35rem;
                            width:0.35rem;

                        }
                        .num{
                            height:0.35rem;
                            width:0.7rem;
                            text-align:center;
                        }
                    }
                    }
                }
                .box-footer{
                    position: absolute;
                    display: flex;
                    flex:1;
                    justify-content: space-between;
                    bottom: 0;
                    height: 49px;
                    z-index: 200;
                    width: 100%;
                    .buynow {
                        color: #000;
                        border-top: 1px solid #ededed;
                        width: 50%;
                        background: #fff;
                        text-align: center;
                        line-height: 0.48rem;                 

                    }
                    .add-cart{
                        background: #c03131;
                        color: #fff;
                        width: 50%;
                        border-top: 1px solid #ededed;
                        text-align: center;
                        line-height: 0.48rem;                 
                    }
                }
            }
        
</style>
