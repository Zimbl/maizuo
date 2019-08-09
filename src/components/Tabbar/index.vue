<template>
    <div class="tabbar">
        <!-- <Item txt="首页" mark="home" :sel="selected" @changeSelected="changeSelected">
            <img slot="normalImg" src="../../assets/ic_tab_home_normal.png" alt="">
            <img slot="activeImg" src="../../assets/ic_tab_home_active.png" alt="">
        </Item>
        <Item txt="书影音" mark="audio" :sel="selected" @changeSelected="changeSelected">
            <img slot="normalImg" src="../../assets/ic_tab_audio_normal.png" alt="">
            <img slot="activeImg" src="../../assets/ic_tab_audio_active.png" alt="">
        </Item>
        <Item txt="广播" mark="broadcast" :sel="selected" @changeSelected="changeSelected">
            <img slot="normalImg" src="../../assets/ic_tab_broadcast_normal.png" alt="">
            <img slot="activeImg" src="../../assets/ic_tab_broadcast_active.png" alt="">
        </Item>
        <Item txt="分组" mark="group" :sel="selected" @changeSelected="changeSelected">
            <img slot="normalImg" src="../../assets/ic_tab_group_normal.png" alt="">
            <img slot="activeImg" src="../../assets/ic_tab_group_active.png" alt="">
        </Item>
        <Item txt="我的" mark="mine" :sel="selected" @changeSelected="changeSelected">
            <img slot="normalImg" src="../../assets/ic_tab_mine_normal.png" alt="">
            <img slot="activeImg" src="../../assets/ic_tab_mine_active.png" alt="">
        </Item> -->

         <Item 
            v-for="item in footers"
            :key="item.id"
            :txt="item.txt" 
            :mark="item.mark" 
            :sel="selected" 
        >
            <img slot="normalImg" :src="item.normalImg" alt="">
            <img slot="activeImg" :src="item.activeImg" alt="">
        </Item>
    </div>
</template>
<script>
//js中引入图片的话，需要当成一个模块进行引入  require
import Item from "./Item"
export default {
    data(){
        return {
            selected:this.$route.name,
            footers:[
                {id:1,txt:"首页",mark:"home",normalImg:require("../../assets/ic_tab_home_normal.png"),activeImg:require("../../assets/ic_tab_home_active.png")},
                {id:2,txt:"书影音",mark:"audio",normalImg:require("../../assets/ic_tab_audio_normal.png"),activeImg:require("../../assets/ic_tab_audio_active.png")},
                {id:3,txt:"广播",mark:"broadcast",normalImg:require("../../assets/ic_tab_broadcast_normal.png"),activeImg:require("../../assets/ic_tab_broadcast_active.png")},
                {id:4,txt:"分组",mark:"group",normalImg:require("../../assets/ic_tab_group_normal.png"),activeImg:require("../../assets/ic_tab_group_active.png")},
                {id:5,txt:"我的",mark:"mine",normalImg:require("../../assets/ic_tab_mine_normal.png"),activeImg:require("../../assets/ic_tab_mine_active.png")},
            ]
        }
    },
    methods:{
        changeSelected(val){
            this.selected = val;
        }
    },
    components:{
        Item
    }
}
</script>


<style lang="scss" scoped>
    .tabbar{
        position: fixed;
        width:100%;
        bottom:0;
        left:0;
        height:60px;
        display: flex;
        border-top:1px solid #ccc;
        background: #fff;
    }
</style>