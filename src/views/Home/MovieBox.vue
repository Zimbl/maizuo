<template>
    <div class="movie-box"
         v-infinite-scroll="loadMore"
        infinite-scroll-disabled="loading"
        infinite-scroll-distance="10"
    >
        <MovieItem :type="type"
            v-for="movie in movies"
            :key="movie.id"
            :movie="movie"
        ></MovieItem>
    </div>
</template>
<script>
import MovieItem from "./MovieItem"
import { Toast } from 'mint-ui';//引入mint-ui弹窗组件
export default {
    watch:{
        type(val){
            this.movies = [];//清空之前的数据
            this.page=1; //从第一页开始请求数据
            this.hasMore = true;// 代表有更多数据
            this.getMovies();//调用这个请求数据的方法

        }
    },
    methods:{
        loadMore(){
            if(!this.hasMore){
                Toast({
                    message: '我是一个有底线的啊破破',
                    position:"bottom",
                    duration:1000
                });
                //没有更多数据了
                return false
                //关闭无限滚动
                this.loading = true;
                
            }
            this.getMovies()
            
        },
        getMovies(){
            
            let instance = Toast({
                message: '加载中...',
                iconClass: 'fa fa-circle-o-notch fa-spin',
                duration:-1
            });
            let page = this.page;
            let limit = this.limit;
            //关闭无限滚动
            this.loading = true;
            this.$http.get("/api/mz/home/"+this.type,{
            params:{
                    limit,
                    page
                }
            }).then(res=>{
                 console.log(this)
                //有数据了关闭弹出框
                instance.close()
                //开启无限滚动
                this.loading = false;
                this.movies = this.movies.concat(res.data.data.object_list);
                this.pf = this.movies.id

                if(limit*page >= res.data.data.total){
                    this.hasMore = false;
                    return false
                }
                 this.page++;
                
            })
        },
        // pfme(){
        //    pf= (movies.id.splice(3,2))/10;
        // }
       
    },
    components:{
        MovieItem
    },
    data(){
        return{
            movies:[],
            loading:false,
            limit:6,
            page:1,
            hasMore:true,//默认有更多数据
            pf:[]
            // pf:1
        }
    },
    props:["type"],
    activated(){
     //开启无限滚动
                this.loading = false;

  },
    deactivated(){
       //关闭无限滚动
            this.loading = true;
            
    }
}
</script>

<style lang="scss" scoped>

</style>
