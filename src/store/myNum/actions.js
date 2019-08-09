import {CHANGE_NUM} from "./const"
export default {
    getNumFromBackEnd({commit}){
        setTimeout(() => {
            //获取后台给我们数据   随机数据
            let num = Math.floor(Math.random()*100)
            //需要更改state里面的num数据 调用mutations里面具体更改state的方法
            commit(CHANGE_NUM,num);
        }, 1000);
    }
}