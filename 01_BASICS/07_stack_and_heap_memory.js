// Stack (Primitive) , Heap (Non - Primitive)

let value1 = "Rohan Dev Singh"
let value2 = value1

value2 = "BCET"

console.log(value1);
console.log(value2);        

let userOne = {
    email: "abc@gmail.com",
    upi : "user@ybl"
}

let userTwo = {
    email: "xyz@gooogle.com",
    upi: "XYZ@sbi"
}

let abc = userOne
abc.email = "Rohan@google.com"  //idhar ouput mein changes aa jyegi

console.log(userOne.email);   
console.log(abc.email);         // ispe dono mein value chnage ho jana hai..jabki stack mein aisa nhi hoga stack mein jispe last update hoga bs ussi mein chnge hoga



// POINTS:
// 1. STACK mein user ko original value ka copy provide hota hai 
// 2. HEAP mein direct original value ka reference diya jta hai