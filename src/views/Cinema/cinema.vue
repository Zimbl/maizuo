<template>
    <div class="cinema">
        <div class="cinemaTop">
            <div class="place">上海
                <i class="fa fa-angle-down"></i>
            </div>
            <div class="cinemaName">影院</div>
            <div class="search">
                <i class="fa fa-search"></i>
            </div>
        </div>
        <div class="cinemaNav">
            <div>全程<i class="fa fa-angle-down"></i></div>
            <div>App订票<i class="fa fa-angle-down"></i></div>
            <div>最近去过<i class="fa fa-angle-down"></i></div>
        </div>
        <div class="cinemaBigbox">
            <router-link
            :to="{name:'movieList',params:{id:itme.id}}"
            class="cinemaBox"
            v-for="itme in movie"
            :key = "itme.id"
            >
                <div class="movieSeat">
                    <p>{{itme.name}}</p>
                    <span>{{itme.local}}</span>
                </div>
                <div class="moviePrice">￥{{itme.price}}&nbsp;<span>起</span></div>
            </router-link>
        </div>
        
    </div>
</template>
<style lang="scss" scoped>
.cinema{
    .cinemaTop{
        height: 44px;
        width: 100%;
        position: fixed;
        top:0;
        background: #fff;
        display: flex;
        flex-direction:row;
        .place{
        line-height: 44px;
        width:48px;
        height: 44px;
        margin-left: 10px;
        }
        .cinemaName{
        line-height: 44px;
        margin-left: 80px;
        font-size:15px;
        color:black;
        }
        .search{
            line-height: 44px;
            font-size: 18px;
            color:#666;
            margin-left: 110px;
        }
    }
    .cinemaNav{
        background: #fff;
        position: fixed;
        top:44px;
        display:flex;
        flex-direction: row;
        justify-content: space-around;
        width: 100%;
        height: 49px;
        align-items: center;
    }
    .cinemaBox{
        width: 100%;
        height: 76px;
        box-sizing: border-box;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 20px;
        .movieSeat{
            p{
                width: 180px;
                font-size: 15px;
                overflow: hidden;
                white-space:nowrap;
                text-overflow:ellipsis;
                margin-bottom: 4px;
            }
            span{
                display: inline-block;
                width: 200px;
                font-size: 13px;
                color: #797d82;
                overflow: hidden;
                white-space:nowrap;
                text-overflow:ellipsis;
            }
        }
        .moviePrice{
            margin-top:7px;
            color:red;
            span{
                font-size: 12px;
                color:red;
            }
        }
    }
    .cinemaBox:nth-of-type(1){
        margin-top:93px;
    }
}
</style>
<script>
export default {
    data(){
        return{
            movie:[]
        }
    },
     created(){
         this.$http.get("/api/mz/movie/cinemas").then(res=>{
           this.movie = res.data.data.object_list;
        }) 
        this.$http.get("/api/mz/movie/cinemas?page=2").then(res=>{
           this.movie =this.movie.concat(res.data.data.object_list);
        })
    }
}
</script>

