const myarr =[1,2,3,4]

const res = myarr.reduce(function(acc, currval) {       //idhar do value pass karte hai
    console.log(`accumulator value = ${acc} , current value = ${currval}`);
    return acc + currval;
}, 0) //accumulator k value initialize kiye 0 se isliye idhr uske chkkr mein 0 likhe hai

//sme cheez arrow function se 
const myTotal = myarr.reduce( (acc, curr) => acc+curr, 0) //bs accumulator ka vlue idhr initialize krwaye hai

console.log(myTotal);

//shopping cart

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)      //item.price se sara price access kiye hai kyuki array ke andar object hai isliye direct nhi hota hai ...aur accumulator ko 0 se initialize krke add krte chlte gye hai

console.log(priceToPay);