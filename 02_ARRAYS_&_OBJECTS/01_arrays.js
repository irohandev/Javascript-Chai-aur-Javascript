// Arrays

const Arr = [1,2,3,4,5]
console.log(Arr[0]);        //yeh 0 index pe kaunsa element bhai woh btyaega 

const heros = ["ironman", "batman", "captain america", "hulk"]       //string ka array hai yeh

const Arr2 = new Array (1,2,3,5,7,8)
console.log(Arr2[2]);               // 2 number index pe kaunsa element hai woh btayega 


// Array Operations:
Arr2.push(4)            // array ke last mein yeh input add/push kr dega..aur jo input chahiye woh bracket mein de add kr dena hai bs  
Arr2.push(5)            // array ke last mein yeh input add/push kr dega
console.log(Arr2);

Arr2.pop()            // array ke last mein yeh input delete/pop kr dega ispe input ka jrurt nahi hai direct last element del ho jyega 
console.log(Arr2);

Arr2.unshift(4)        //yeh direct input kr dega first mein...but bade projects mein use km krnge ya nahi krna chahiye kyuki sare element ki shift ho jyegi jisse code mein bhot complexities aa skti hai
console.log(Arr2);
Arr2.shift()        // yeh unsift ka opposite hai.... first element ko delete kr dega 
console.log(Arr2);

console.log(Arr2.includes(10));     //yeh isse hm array ko question kr rhe hai ki array mein given input present hai ya nahi ...aur boolean ouput dega TRUE / FALSE


console.log(Arr2.indexOf(7));     //isse element ka index address pata chlta hai


const array = Arr2.join()       //yeh array ko string mein convert kr dega 
console.log(Arr2);      //yeh array output dega 
console.log(array);     //yeh string output dega 


//SLICE & SPLICE
console.log("A ", Arr);
const myn1 = Arr.slice(1, 3)        //ispe last element include nhi hoga 
console.log(myn1);
console.log("B ", Arr);


const myn2 = Arr.splice(1, 3)       //ispe last element include hoga 
console.log("C ", Arr);             // slice krne se woh part original array se delete ho jyega...
console.log(myn2);