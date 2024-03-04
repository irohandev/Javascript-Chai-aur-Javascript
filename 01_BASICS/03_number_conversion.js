let n = 33

console.log(typeof n);
console.log(typeof (n));

let num = "33"
console.log(typeof num);
let valueInNumber = Number(num)
console.log(valueInNumber);
console.log(typeof valueInNumber);

let value = "44abc"
console.log(typeof value);
let new_value = Number(value)
console.log(new_value);
console.log(typeof new_value);


let number = true
console.log(typeof number);
let new_value2 = Number(number)
console.log(new_value2);
console.log(typeof new_value2);


let number2 = null
console.log(typeof number2);
let new_value3 = Number(number2)
console.log(new_value3);
console.log(typeof new_value3);


let number3 = undefined
console.log(typeof number3);
let new_value4 = Number(number3)
console.log(new_value4);
console.log(typeof new_value4);



// "33" => 33
// "44abc" => NaN {NOT A NUMBER}
// true =>1 ; false=>0


//let login = 1   OUTPUT => TRUE
//let login = 0       OUTPUT => FALSE
//let login = ""        OUTPUT => FALSE
let login = "Rohan "     // OUTPUT => TRUE
console.log(typeof login);
let valueInBoolean = Boolean(login)
console.log(valueInBoolean);
console.log(typeof valueInBoolean);


let somevalue = 160801
console.log(typeof somevalue);
let stringValue = String(somevalue)
console.log(stringValue);
console.log(typeof stringValue);





