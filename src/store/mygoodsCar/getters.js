export default{
    getTotal(state){
    let total={price:0,buynum:0};
        let cars = state.cars
        cars.forEach(item=>{
            total.price += item.num/100 * item.buynum;
            total.buynum += item.buynum
        })
        total.price = total.price.toFixed(2);
        return total
    }
}