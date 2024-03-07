

function calculateNumber(...num1){              // ... - isko spread ya rest operator kehte hai jab, no. of input ek ho jyada ho toh
    return num1
}

//console.log(calculateNumber(200, 399, 700, 400));       //[200, 399, 700, 400] aise array return krega 

const user = {
    username : 'Rohan',
    price : 3999
}

function functionInput(anyobject){
    console.log(`Username is ${anyobject.username} and Price is ${anyobject.price}`);
}

//functionInput(user);

functionInput({
    username: "Abc",
    price : 1000
})

const myArray = [200, 300, 400, 600]

function handlearray(getarray){         //array input in the function
    return getarray[1]                  //returned the array element at array index [1]
}

console.log(handlearray(myArray));
console.log(handlearray([200, 700, 400, 600]));

