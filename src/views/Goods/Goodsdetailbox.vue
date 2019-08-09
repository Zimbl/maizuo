<template>
    <div class="goodsdetailbox">
       <ul>
           <li>
               <router-link tag="div" :to="{name:'goodsdetail',params:{id:goodlist.id}}">
                   <div class="top"><img v-lazy="goodlist.url" alt=""></div>
                   <div class="bottom">
                       <div>{{goodlist.title}}</div>
                       <div class="more">{{goodlist.level}}</div>
                       <div>
                           <span>评分：{{goodlist.score}}</span>
                            <span>数量：{{goodlist.num}}</span>
                        </div>
                   </div>
               </router-link>
           </li>
        
       </ul>
    </div>
</template>
<script>
export default {
    props:{
        goodlist:Object
    },
    data(){
        return{
            goods:[]
        }
    },
    created(){

    }
}
</script>
<style lang="scss" scoped>
    ul{
        width:1.65rem;
        display: flex;
        justify-content: row;
        justify-content: space-around;
        flex:1;flex-wrap:wrap;
        
        li{
            width:1.65rem;
            height:2.4rem;
            .top{
                width:100%;
                height:1.65rem;
                img{
                    width:100%;
                }
            }
            .bottom{
                width:1.65rem;
                height:0.67rem;
                
                .more{
                overflow: hidden;
                white-space: nowrap;
                text-overflow:ellipsis;
                }

            }
        }
    }
</style>
