<template>
    <div class="movie-detail">
        <div v-if="!movie" class="loading"></div>
        <div v-else>
            <div class="xq-header">
                <router-link to='/' tag="div" class="return"><i class="fa fa-chevron-left"></i></router-link>
                <img :src="movie.img" alt="">
            </div>
            <div class="xq-center">
                <div class="title">
                    <div class="t-z">{{movie.nm}}</div>
                    <div class="t-y">{{parseInt((movie.id)/100000).toFixed(1)}} <span style="fontSize:12px">分</span></div>
                </div>
                <div class="xj">剧情 | 动作</div>
                <div class="xj">{{movie.showInfo}}</div>
                <div class="xj">中国大陆 | 110分钟</div>
                <div class="jj">电影上映场数：{{movie.showInfo}}</div>
            </div>
            <div class="xian"></div>
            <div class="xq-footer">
                <div class="yz"><span>演职人员</span></div>
                <div class="shop">
                    <ul>
                        <li>
                            <div>
                                <div class="tp"><img width="100%" height="100%" :src="movie.img" alt=""></div>
                                <div class="ss">
                                    <span class="s1">{{movie.star}}</span>
                                    <span class="s2">演员</span>
                                </div>
                                
                            </div>
                        </li>
                        <li>
                            <div>
                                <div class="tp"><img width="100%" height="100%" :src="movie.img" alt=""></div>
                                <div class="ss">
                                    <span class="s1">{{movie.star}}</span>
                                    <span class="s2">演员</span>
                                </div>
                                
                            </div>
                        </li><li>
                            <div>
                                <div class="tp"><img width="100%" height="100%" :src="movie.img" alt=""></div>
                                <div class="ss">
                                    <span class="s1">{{movie.star}}</span>
                                    <span class="s2">演员</span>
                                </div>
                                
                            </div>
                        </li><li>
                            <div>
                                <div class="tp"><img width="100%" height="100%" :src="movie.img" alt=""></div>
                                <div class="ss">
                                    <span class="s1">{{movie.star}}</span>
                                    <span class="s2">演员</span>
                                </div>
                                
                            </div>
                        </li><li>
                            <div>
                                <div class="tp"><img width="100%" height="100%" :src="movie.img" alt=""></div>
                                <div class="ss">
                                    <span class="s1">温宏伟</span>
                                    <span class="s2">演员</span>
                                </div>
                                
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="xian"></div>
                <div class="yz"><span>剧照</span></div>
                <div class="juzhao">
                    <ul>
                        <li>
                            <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3034113647,2461825303&fm=26&gp=0.jpg" alt="">
                        </li>
                        <li>
                            <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1565194385138&di=5c278243b37461053bb9bf6565152cac&imgtype=0&src=http%3A%2F%2Fphotocdn.sohu.com%2F20151015%2Fmp35686088_1444865058600_5.gif" alt="">
                        </li>
                        <li>
                            <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3034113647,2461825303&fm=26&gp=0.jpg" alt="">
                        </li>
                    </ul>
                </div>
            </div>
            <!-- 底 -->
            <div class="bottom">
                    选座购票   
            </div>
        </div>
        
        
    </div>
</template>
<script>
export default {
    data(){
        return{
            movie:null,
            sss:null,
            fff:null
        }
    },
    created(){
        //获取movieItem传递来的id
        // console.log(this.$route.params)
        
        this.$http.get("/api/mz/home/" +this.$route.params.type+"/"+this.$route.params.id).then(res=>{
            this.movie = res.data;
            
            // this.sss = (this.movie.star).split(",")
            // this.fff = this.sss
            

        })
        //  this.$http.get("/api/mz/home/details"+this.$route.params.id).then(res=>{
        //     this.movie = res.data;
        //     console.log(res)
        //     // this.sss = (this.movie.star).split(",")
        //     // this.fff = this.sss
            

        // })
    }

}
</script>
<style lang="scss" scoped>
    .bottom{
        width:100%;
        height:49px;
        background:#ff5f16;
        position: fixed;
        bottom: 0;
        left: 0;
        text-align: center;
        color: #fff;
        font-size: 16px;
        line-height: 49px;
    }   
    .movie-detail{
        overflow: hidden;
        margin-bottom:60px;
    }
    .juzhao{
        width:100%;
        height: 115px;
        background:#fff;
        ul{
            display: flex;
            align-items: center;
            position: relative;
            width: 100%;
            margin: 0;
            padding-left: 15px;
            list-style: none;
            overflow: auto;
            li{
                cursor: pointer;
                display: block;
                float: left;
                position: relative;
                margin-right: 10px;
                img{
                    width:150px;
                    height: 100px;
                }
            }
        }
    }
    .xian{
        width:100%;
        height:10px;
        background:#ededed;
    }
    .s1{
        padding-top: 10px;
        font-size: 12px;
        color: #191a1b;
        width: 85px;
        // height: 18px;
        display:block;
        text-align: center;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .s2{
        display: block;
        text-align: center;
        font-size:10px;
        color: #797d82;
    }
    .xq-footer{
        // margin-top: 10px;
        background-color: #fff;
        .tp{
            width: 85px;
            height: 85px;
            background: rgb(249, 249, 249);
        }
        .yz{
            width: 100%;
            padding: 15px;
            font-size: 16px;
            text-align: left;
            color: #191a1b;
        }
        .shop{
            height: 140px;
            background: rgb(255, 255, 255);
            ul{
                display: flex;
                align-items: center;
                
                position: relative;
                width: 100%;
                justify-content: flex-start;
                padding-left: 15px;
                 overflow: auto;

                li{
                    width: 85px;
                    min-width: 85px;
                    position: relative;
                    margin-right: 10px;
                    .span{
                        display: block;
                        text-align: center;
                    }
                }
            }
        }
    }
    .xq-header{
        position:relative;
        .return{
            position:absolute;
            width:30px;
            height:30px;
            opacity:0.5;
            background:#fff;
            // text-align: center;
            border-radius:50%;
            line-height: 30px;
            margin:10px;
            i{
                margin-left: 9px;
            }
        }
        img{
             width: 100%;height:211px;
        }
    }
    .xq-center{
        padding: 15px;
        padding-top: 12px;
        background-color: #fff;
         font-size: 13px;
        color: #797d82;
         
        .xj{
            margin-top: 4px;
        }
        .jj{
            margin-top:12px;
        }
        .title{
            display: flex;
            .t-z{
                width:70%;
                color: #191a1b;
                font-size: 18px;
                height: 24px;
                line-height: 24px;

            }
            .t-y{
                width:30%;
                text-align: right;
                color: #ffb232;
                    font-size: 18px;
                font-style: italic;
            }
        }
    }
</style>

