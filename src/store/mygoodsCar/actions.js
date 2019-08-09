import {SYNC_UPDATE} from "./const"
export default{
    initCars({commit}){
        let cars = getCar()
        commit(SYNC_UPDATE,cars)

    },
    addGoodInCars({commit},good){
        setTimeout(() => {
            let cars = getCar();
           let isHas =  cars.some((item)=>{
                if(item.id === good.id){
                    item.buynum++
                    return true
                }
            })
            if(!isHas){
                good.buynum = 1;
                cars.push(good)
            }
            localStorage.cars = JSON.stringify(cars)
            commit(SYNC_UPDATE,cars)
        }, 500);
    },
    reduceGoodInCars({commit},good){
        let cars = getCar()
        cars.filter(item=>{
            if(item.id === good.id){
                item.buynum--
                if(item.num <=0) return false
            }
            return true
        })
      
        localStorage.cars = JSON.stringify(cars)
            commit(SYNC_UPDATE,cars)
    }
}

function getCar() { 
    return JSON.parse(localStorage.cars?localStorage.cars:'[]')
 }