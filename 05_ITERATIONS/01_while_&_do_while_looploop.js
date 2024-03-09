//while loop

let i = 0       //phle initialize
while (i<=20) {         //phir condition check
    console.log(i);         
    i = i+2             //phir increment 
    
}

myarray = ["R", "O", "H", "A", "N"]

let arr = 0         
while (arr < myarray.length) {
    console.log(`Value is ${myarray[arr]}`);
    arr = arr+1
}

//------------------------------------------------------------------------------------------------

//Do - while loop 

let score = 1

do {
    console.log(`Score is : ${score}`);
    score = score + 2
} while (score <= 20 );


// Note:
// 1. Do while loop mein phle loop ke andar jyega aur sabse akhir mein condition chck hoga 
// 2. Do while mein minimum ek baar toh print hoga hi
// 3. agar hm score e value ko 23 bhi agr set kre toh woh bhi print hoga jab ki woh condition ke hisb se tha nhi ..but lkin execution tab bhi ek baar hona hi hai
