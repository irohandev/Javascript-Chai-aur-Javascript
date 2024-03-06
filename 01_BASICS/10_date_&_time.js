//DATES:

let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString()); 
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());   
// Output mein teeno hi date show krega bs output ka tarika diffrent hoga 

let newDate = new Date(2023, 0, 23)     //Javascript mein Month 0 se shuru hota which means 0 ka mtlab January hai 
// console.log(newDate.toString());
let newDate2 = new Date(2023, 10, 24, 5, 7)
// console.log(newDate2.toString());  
// console.log(newDate2.toDateString());
// console.log(newDate2.toLocaleDateString());    


let newDate3 = new Date('2023-01-26') //yeh bs yyyy-mm-dd ke format mein aur yaha pe month 0 nahi ho skta hai 
// console.log(newDate3.toDateString());

let newDate4 = new Date('01-31-2021')  // yeh bass mm-dd-yyyy ke format mein hai

let myTimeStamp = Date.now()

console.log(myTimeStamp);
console.log(newDate4.getTime());        //yeh mili second mein time btayega 
console.log(Math.floor(Date.now()/1000));   //yeh mili second ko second mein cnvrt krke output dega woh bhi floor value consider krke jisse decimal value na mile

let newDate5 = new Date()
console.log(newDate5);  //current date btayega
console.log(newDate5.getMonth() + 1);  //yeh month btayega aur +1 isliye kiye kyu ki indexing month k 0 se strt hota 
console.log(newDate5.getDay()); //yeh day btayega agr aj wednesday hai toh Monday se shuru hoga aur uske bd count krega for wednesday it will show 3



