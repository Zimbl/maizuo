<template>
    <router-link tag="div" :to="{name:'moviedetail',params:{id:movie.id,type:this.type}}" class="movie-item">
        <div class="item-box">
            <div class="item-s">
                <img v-lazy="movie.img" alt="">
            </div>
            <div class="item-z">
                <p class="title">{{movie.nm}}</p>
                <p>观众评分  <span class="pf">{{parseInt((movie.id)/100000).toFixed(1)}}</span></p>
                <p class="zy">主演：{{movie.star}}</p>
                <p>上映时间：{{movie.rt}}</p>
            </div>
            <div class="item-x">
                <button>购票</button>
            </div>
        </div>
        <div class="hh">
            <!-- <hr class="hh" width="100%"> -->
        </div>
    </router-link>
</template>
<script>
export default {
    created(){
        // console.log(this.type)
    },
    props:["movie","pf","type"],
    // data(){
    //     return {
    //         pf: ((movie.id)+"").splice(0,2)
    //     }
    // }

}
</script>

<style lang="scss" scoped>
.zy{
    overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap; 
}
.small{
        font-size: 9px;
    color: #fff;
    background-color: #d2d6dc;
    height: 14px;
    line-height: 14px;
    padding: 0 2px;
    border-radius: 2px;
    margin-top:-5px;
}
.hh{
    margin:0;
    padding: 0;
    height: 1px;
    width:100%;
    border-bottom:.5px solid #ececec;
}
.item-box{
    width:100%;
    height: 94px;
    display:flex;
    margin: 15px 15px 15px 15px;

    position: relative;
   
}
.item-z{
    margin: 0 10px;
    width:210px;
    

    
    p{
        font-size: 13px;
        color: #797d82;
        margin-top:4px
    }
    .title{
  
        color: #191a1b;
        font-size: 16px;
        height: 22px;
        line-height: 22px;
        margin-right: 5px;
        overflow: hidden;
        -o-text-overflow: ellipsis;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .pf{
        color: #ffb232;
        font-size: 14px;
    }
}
    .item-s img{
        width:66px;
        height:91px;
    }
    .item-x{
        
    line-height: 94px;
    }
    .item-x button{
        line-height: 25px;
        height: 25px;
        width: 50px;
        color: #ff5f16;
        font-size: 13px;
 
        background-color:#fff;
        border:1px solid #ff5f16;
        border-radius:2px;
        padding:0;
     
    }
</style>
