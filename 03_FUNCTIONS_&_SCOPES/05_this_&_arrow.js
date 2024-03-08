const user = {
    username : 'Rohan',
    price : 999,

    Welcomemessage : function(){
        console.log(`${this.username}, Welcome to the website`);        //with the help of this keyword we can refer the current context 
        console.log(this);              //we can get the complete info of current context of the object
    }
}

//user.Welcomemessage()
//user.username = 'Rohan Dev'
//user.Welcomemessage()

//console.log(this);          //yeh object {} output dega 

// function test(){
//     let userid = "ABC_test"
//      console.log(this.userid);       //undefined output dega yeh kyuki this keyword object mein kam karta function mein nahi
// }
// test()


// const test2  = function() {          //kaise bhi function declare kro this keyword function ke sath kam nahi krta 
//     let userid = 'ABC_test'
//     console.log(this.userid); 
// }
// test2()

test = () => {          //arrow function
    let userid = 'ABC_test'
    console.log(this.userid);       //this keyword arrow function mein use nahi kr skte 

}

//test()

const addtwo = (num1, num2) => {                //arrow function decalaration
    return num1 + num2
}

console.log(addtwo(2,5));


const sumtwo = (num1, num2) => (num1 + num2)          //arrow function in implicit return..mtlab jo function ek line ke hote unko aise bhi likh sakte hai aur unko implicit return kehte hai

//curly braces {} hoga toh return keyword use krna pdega lkin braces nahi hoga toh return nhi bhi krnge toh chlega 

console.log(sumtwo(4,5));