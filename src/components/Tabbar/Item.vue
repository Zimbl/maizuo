<template>
    <div class="item" @click="clickItem">
        <span v-if="!flag"><slot name="normalImg"></slot></span>
        <span v-else><slot name="activeImg"></slot></span>
        <span :class="['title',(flag?'active':'')]">{{txt}}</span>
    </div>
</template>
<script>
export default {
    props:['txt','mark','sel'],
    computed:{
        flag(){//计算属性  依赖里面的数据变化，   只有mark或则sel发生变化，flag就会重新进行计算
            if(this.mark === this.sel){
                return true
            }
            return false
        }
    },
    methods:{
        clickItem(){
            //子组件不能改变父组件的值，需要父组件tabbar自己进行更改
            // this.changeSelected(this.mark)
            // this.$emit("changeSelected",this.mark)
            this.$router.push("/"+this.mark)
        }
    }
}
</script>

<style lang="scss" scoped>
    .item{
        flex:1;
        display:flex;
        flex-direction: column;
        align-items: center;
        margin-top:8px;
        .title{
            font-size:10px;
            line-height: 12px;
            &.active{
                color:#f5ae3c;
            }
        }
    }
</style>


