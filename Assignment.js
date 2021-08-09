//Problem 01
//function declaretion
function seerToMon(seer) {
    //when user set a negative value
    if (seer < 0) {
        const negativeValue = "You assign a negative value. Currection Please!";
        return negativeValue;
    }
    else if (typeof seer == "string") {
        return "please give a number as a input value";
    }
    let mon = seer / 40;
    return mon;
}

const totalMon = seerToMon("200 ta den");
// console.log(totalMon);


// Problem 02
// function declaretion
function totalSales(shirt, pants, shoes) {
    //When user set nagetive value
    if ((shirt < 0) || (pants < 0) || (shoes < 0)) {
        const negativeValue = "You assign a negative value. Currection Please!";
        return negativeValue;
    }

    const perShirt = 100;
    const perPants = 200;
    const perShoes = 500;

    //Dress calculate
    const shirtQuantity = shirt * perShirt;
    const pantsQuantity = pants * perPants;
    const shoesQuantity = shoes * perShoes;

    const totalDress = shirtQuantity + pantsQuantity + shoesQuantity;
    return totalDress;
}

const firstTest = totalSales(4, 8, 5);
// console.log(firstTest);


//Problem 03
// function declaretion
function deliveryCost(tShirt) {
    const first100Delivery = 100;
    const second100Delivery = 80;
    const thirdRestDelivery = 50;

    //when user set a negative value
    if (tShirt < 0) {
        const negativeValue = "You assign a negative value. Currection Please!";
        return negativeValue;
    }
    else if (typeof tShirt == "string") {
        return "please give a number as a input value";
    }

    // T-Shirt delivery cost calculate
    else if (tShirt <= 100) {
        const firstTshirtCost = tShirt * first100Delivery;
        return firstTshirtCost;
    }
    else if (tShirt <= 200) {
        const first100 = 100 * first100Delivery;
        const restTshirt = tShirt - 100;
        const secondTshirtCost = restTshirt * second100Delivery;
        const totalSecondCost = first100 + secondTshirtCost;
        return totalSecondCost;
    }
    else {
        const first100 = 100 * first100Delivery;
        const secondTshirtCost = 100 * second100Delivery;
        const restTshirt = tShirt - 200;
        const RestDenseTshirt = restTshirt * thirdRestDelivery;
        const totalCost = first100 + secondTshirtCost + RestDenseTshirt;
        return totalCost;
    }
}

const totalTshirtCost = deliveryCost('400');
// console.log(totalTshirtCost);


//Problem 04
// function declaretion
function perfectFriend(names) {
    
    for (let i = 0; i < names.length; i++) {
        if (names[i].length == 5) {
            let charecterFiveIs = names[i];
            return charecterFiveIs;
        }
    }
}

const friends = ["Rittik", "Sima", "Jon", "Bristy", "Mim", "Junat", "ojhor"];
const perfectOne = perfectFriend(friends);
console.log(perfectOne);



