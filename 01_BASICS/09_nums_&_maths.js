const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);              //100 - number
// console.log(balance.toString());      //100 - string 
// console.log(typeof balance.toString());     //Ouput String

// console.log(balance.toString().length);         //show the string length - 3
// console.log(balance.toFixed(2));        //100.00 decimal will be included upto 2 places

const number = 123.8746
// console.log(number.toPrecision(4));         // precision will come upto 4 digits and accrding to that it will round it of.


const hundred = 10000000000
// console.log(hundred.toLocaleString());      //this func will add comas to the number but will be arranging it in International standards
// console.log(hundred.toLocaleString('en-IN'));       //this func will add comas accrding to indian system


// ++++++++++++++++++++++++++++++++++++     Maths       ++++++++++++++++++++++++++++++++++++++++++


console.log(Math);
console.log(Math.abs(-4));  //will give absolute value of the number i.e 4
console.log(Math.round(4.5));  //will give round of value the number i.e 5
console.log(Math.ceil(4.5));  //yeh hamesa upar ka value ouput dega i.e the next value which is in this case is 5
console.log(Math.floor(4.5));  // aur yeh hmesa niche ka value dega even though hm 4.9 dnge input tab bhi 4 return krega output
console.log(Math.min(3,4,5,6,7,)); // sabse minimun value rerurn krega sare input mein se 
console.log(Math.max(3,4,5,6,7,)); // sabse maximum value rerurn krega sare input mein se 


console.log(Math.random()); //gives out random number rwanging from o to 1
console.log(Math.random()*10); //gives out random number rwanging from o to 10
console.log((Math.random()*10)+1); //gives out random number rwanging from 1 to 10..it will never give the ouput == 0
console.log(Math.floor((Math.random()*10)+1)); //will give out the floor value of te above