<template>
    <div class="movieList">   
        <div class="movieList_top">
            <router-link to="/cinema" slot="left">
            <i class="fa fa-angle-left"></i>  
            </router-link>
            <div class="movieShop">{{movieList.name}}</div>
            <div class="moviePlace">
                <i class="fa fa-map-marker"></i>
                <span>{{movieList.local}}</span>
                <i class="fa fa-volume-control-phone"></i>
            </div>
        </div>
        <Banner :msg = "this.$route.params.id"></Banner>      
    </div>
</template>
<style lang="scss" scoped>
.movieList{
    .movieList_top{   
        i{
            font-size: 28px;
            margin-left: 20px;
            margin-top:10px;
        }
        .movieShop{
            width: 320px;
            font-size: 19px;
            margin: 14px auto;
            text-align: center;
        }
        .moviePlace{
            height: 30px;
            display: flex;
            align-items: center;
            color:#666;
            i{
                font-size: 20px;
            }
            span{
                margin-left: 10px;
                margin-right: 20px;
                display: inline-block;
                width:200px;
                margin-top:5px;
                overflow: hidden;
                white-space:nowrap;
                text-overflow:ellipsis;
                font-size: 15px;
            }
        }
    }
}
</style>
<script>
import Banner from "@/components/CinemaBanner"
export default {
    data(){
        return{
            movieList:[],
            id:this.$route.params.id?this.$route.params.id:this.$route.params.fmsg
        }
    },
    components:{
        Banner
    },
    created(){
        this.$http.get("/api/mz/movie/cinemas/"+ this.id).then(res=>{
            this.movieList = res.data
            console.log(this)
        }) 
        
    }
}
</script>
