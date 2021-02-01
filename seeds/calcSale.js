
export default function calcSale(price , sale){
    let calc = price * sale / 100
    const sprice = Math.floor(price - calc)
    return  sprice;
}