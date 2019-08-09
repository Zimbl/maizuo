import {ADD_NUM,CHANGE_NUM} from "./const" //es6模块导入导出
export default {
    [ADD_NUM]:(state)=>{ //参数就可以获取到state 
        state.num++  //mutations里面的方法都是同步的更改state里面的数据，不能有异步操作
    },
    [CHANGE_NUM](state,newNum){
        state.num = newNum
    }
}



// var json = "abc"
// var a = {
//     [json]:"aaaaa"
// }
// console.log(a.abc) //undefined 

// var json = {a:1,b:2,c:3}
// for(var key in json){ // [] 
//     console.log(json[key]) //json["a"] json["b"] json["c"]   json.key
// }

// console.log(json["a"]) //json.a  json["a"]