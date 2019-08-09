<template>
    <div class="movieDetail">
        <router-link tag = "div" :to="{name:'movieList',params:{fmsg:fmsg}}" slot="left" class="cinemaMove">
            <i class="fa fa-angle-left"></i>
        </router-link>
        <div class="movieIfon">
            <div class="moviePic">
                <img :src="movieIfon.img" alt="">
            </div>
            <div class="movieName">
                <div class="div1">
                    <span>{{movieIfon.nm}}</span><span>{{movieIfon.sc}}分</span>
                </div>
                <div class="div2">{{movieIfon.desc}}</div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.movieDetail{
    .cinemaMove{
        width: 30px;
        height: 30px;
        background: #dedede;
        display: flex;
        justify-content: center;
        align-items: center;
        border:0;
        border-radius: 50%;
        position: absolute;
        top:10px;
        left:10px;
        opacity: 0.5;
        i{
            font-size: 28px;
        }
    }
    .movieIfon{
        .moviePic{
            img{
                width: 100%;
                height: 180px;
            }
        }
        .movieName{
            width: 100%;
            height: 180px;
            box-sizing: border-box;
            padding:20px;
            .div1{
                font-size: 20px;
                display: flex;
                justify-content: space-between;
                span:last-child{
                    color:orange;
                    font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif
                }
            }
            .div2{
                font-size: 15px;
                margin-top:10px;
                color:#666;
            }
        }
    }
}
</style>

<script>
export default {
    data(){
        return{
            movieIfon:[],
            fmsg:this.$route.params.msg
        }
    },
    created(){
        this.$http.get("/api/mz/tsy/"+this.$route.params.id).then(res=>{
            this.movieIfon = res.data
            console.log(this)
        })
    }
}
</script>


