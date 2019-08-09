<template>
    <div class="home">
        <div class="banner">
            <img src="https://static.maizuo.com/v5/upload/127d12641c751ad1ecb82801435f5db4.jpg?x-oss-process=image/quality,Q_70" alt="">
        </div>
         <div class="navbar">
            <span 
                v-for="nav in navs"
                :key="nav.id"
            >{{nav.title}}</span>
        </div>
        <div class="movieBox">
            <div>
                <img src="https://pic.maizuo.com/usr/movie/5c4b3d76a2c19c4e666534eb61802e5f.jpg?x-oss-process=image/quality,Q_70" alt="">
                <span>哪吒之魔童降世</span>
                <p>购买</p>
            </div>
            <div>
                <img src="https://pic.maizuo.com/usr/movie/5c4b3d76a2c19c4e666534eb61802e5f.jpg?x-oss-process=image/quality,Q_70" alt="">
                <span>哪吒之魔童降世</span>
                <p>购买</p>
            </div>
            <div>
                <img src="https://pic.maizuo.com/usr/movie/5c4b3d76a2c19c4e666534eb61802e5f.jpg?x-oss-process=image/quality,Q_70" alt="">
                <span>哪吒之魔童降世</span>
                <p>购买</p>
            </div>
            <div>
                <img src="https://pic.maizuo.com/usr/movie/5c4b3d76a2c19c4e666534eb61802e5f.jpg?x-oss-process=image/quality,Q_70" alt="">
                <span>哪吒之魔童降世</span>
                <p>购买</p>
            </div>
        </div>
        <div></div>
    </div>
</template>
<style lang="scss">
    .home{
        visibility: auto;
        .banner{
                img{
                width:100%;
            }
        }
        .navbar{
            position: relative;
            height:50px;
            background: #fff;
            display: flex;
            justify-content: space-around;
            align-items: center;
            margin-top:10px;
            z-index:10;
            &.fixedTop{
                position: fixed;
                left:0;
                top:0;
                width:100%;
                margin-top:0;
            }
            span{
                position: relative;
                transition: all 1s;
                &:after{
                    content: "";
                    width:40px;
                    height:3px;
                    background: transparent;
                    position: absolute;
                    left:50%;
                    bottom:-10px;
                    margin-left:-20px;
                    transition: all 1s;
                }
            }
        }
        .movieBox{
            div{
                height: 94px;
                width:100%;
                display: flex;
                padding:0 10px;
                margin-bottom: 15px;
                img{
                    height: 94px;
                    width:66px;
                    margin-right: 10px;
                }
                span{
                    font-size: 17px;
                    color:black;
                    margin-right: 15px;
                }p{
                    width:40px;
                    height: 25px;
                    text-align: center;
                    line-height: 25px;
                    margin-top:42px;
                    margin-left:20px;
                    border: 1px solid orange;
                    border-radius:3px;
                }
            }
        }
        
    }
</style>
<script>

export default {
    data(){
        return {
            navs:[
                {id:1,title:"正在热映",type:"in_theaters"},
                {id:2,title:"即将上映",type:"coming_soon"},
            ]
        }
    }
}
</script>


