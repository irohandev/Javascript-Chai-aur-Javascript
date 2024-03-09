const email = "Rohan@google.com"
if(email){
    console.log("Email id is present");
}
else {
    console.log("No Email id present!");
}

//Note:
//sometimes aisa hota hai ki hm if ya else mein kuch stement ke liye hm true ya false nahi bhi dete hai system usko khud hi true ya false consider kr leta hai issi ko truthy or falsy value kehte hai 
// ab jante hai kin sab values ko falsy consider krega aur kinko truthy krega  :

// falsy values ->
// false, 0, -0, BigInt 0n, ""{empty string hai yeh}, null, undefined, NaN

//truthy values->
// "0", 'false', " " {string ke andar space hai isliye truthy}, [], {} - yeh empty object hai, function(){}



// if (userEmail.length === 0) {            //yeh array k length chck krne ke liye hai jisse pta chle ki empty array hai ya nahi
//     console.log("Array is empty");
// }


// const emptyObj = {}

// if (Object.keys(emptyObj).length === 0) {           // yeh object ke size pata krne ke liye...keys se object rray mein cnvrt then again array k size jaise pta krte..wahi trika 
//     console.log("Object is empty");
// }


// Nullish Coalescing Operator (??): null undefined


let val1;
// val1 = 5 ?? 10
// val1 = null ?? 1         //yeh nullish operator null ya undefined values ka safety check krne ke liye hota hai agr null ya undefined aye toh program me error na aye aur kuch gadbad na ho
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20     //yaha pe null ke badd jo phla value ayega...ussi ko cnsider krega 

console.log(val1);

// Terniary Operator

// condition ? true : false         //Syntax

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")       //contion ke baad check krega..uske badd true ya false jo statemnt exeecute hona hai woh ho jyega 


