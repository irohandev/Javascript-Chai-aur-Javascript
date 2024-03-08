//Immediately invoked function expression [IIFE]
//global scope ke pollution se problem hota hai usko dur krne ke liye iife ka use kiya jata hai aur ..isse turnt function banne ke bdd immediately call kr diya jata hai
//()()  -> phle wle parentheses ka mtlab uspe hmlg definition likh rhe h function ka aur durse parentheses ka mtlab hua execution call jisse woh run krega function
// aur second parentheses ke baad ; yeh lgana hai wrna IIFE ko mlum nahi ki kaha function ko end krna hai wrna woh error dega 

(function user(){
    //named IIFE
    console.log("Test pass!");
})();       // yeh parentheses se hm fucntion ko cll kiye aur starting paraentheses se function declare aur define kiye h

( (name) => {           //argument passing in IIFE with arrow function  
    //unnamed IIFE
    console.log(`My name is , ${name}`);
})('Rohan');
