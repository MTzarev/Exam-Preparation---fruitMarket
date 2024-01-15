function fruitMarket (input){
    let strawberriesPrice = Number(input[0]);
    let bananQuantity = Number(input[1]);
    let orangeQuantity = Number(input[2]);
    let raspberriesQuantity = Number(input[3])
    let strawberriesQuantity = Number(input[4]);
        let priceRasberries = strawberriesPrice*0.5;
        let priceOrange = priceRasberries*0.6;
        let priceBanana = priceRasberries*0.2;
    let totalBanana = bananQuantity*priceBanana
    let totalStrawberries = strawberriesPrice*strawberriesQuantity
    let totalOrange = orangeQuantity*priceOrange
    let totalRaspberries = raspberriesQuantity*priceRasberries
    
    
    let totalPrice = (totalBanana+totalStrawberries+totalOrange+totalRaspberries).toFixed(2)
    
        console.log(totalPrice);
    }
fruitMarket (["63.5","3.57","6.35","8.15","2.5"])