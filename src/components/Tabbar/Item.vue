<template>
    <div class="item" @click="clickItem">
        <span v-if="!flag"><slot name="normalImg"></slot></span>
        <span v-else><slot name="activeImg"></slot></span>
        <span :class="['title',(flag?'active':'')]">{{txt}}</span>
    </div>
</template>


<script>
export default {
    props:["txt","mark","sel"], //接受父组件传递来的属性txt
    computed:{
        flag(){ //计算属性  依赖里面的数据变化  只有mark或者sel发生变化，flag就会重新计算  依赖缓存
            if(this.mark === this.sel){
                return true;
            }
            return false
        }
    },
    methods:{
        clickItem(){
            //本质上需要Tabbar改变selected值
            //this.changeSelected(this.mark)
            //this.$emit("changeSelected",this.mark)
            this.$router.push("/"+this.mark)
        }
    }
    
}
</script>

<style lang="scss" scoped>
    .item{
        flex:1;
        display: flex;
        flex-direction: column;
        align-items: center;
        .title{
            font-size: 12px;
            &.active{
                color:#42bd56;
            }
        }
        img{
            width:40px;
            height:40px;
        }
        
    }
</style>