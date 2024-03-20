// let myName = "rohan     "
// let myfullname = "rohandevsingh     "

// console.log(myName.trueLength);
//QUESTION:
//ek trueLength name ka method bnao jisse pta chale ki actual lenth kya hai : 
//for ex- agar name "rohan" lenth = 5 hona chahiye but agr koi "rohan    " ispe bhi length 5 hi hona chahiye sirf 
// .length method use krnge toh woh spaces ko bhi count krta hai isliye trueLength aisa design kro ki woh last k spaces ko na count kre 

let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.rohan = function(){
    console.log(`hitesh is present in all objects`);
}

Array.prototype.heyrohan = function(){
    console.log(`Hitesh says hello`);
}

// heroPower.rohan()
// myHeros.rohan()
// myHeros.heyrohan()
// heroPower.heyrohan()

// inheritance

const User = {
    name: "abc",
    email: "abc@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User            //prototypal inheritance {OLD SYNTAX}

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "RohanDevSingh     "

String.prototype.trueLength = function(){
    console.log(`${this}`);     //isse curent context pata chal rha hai..jis string ko call kr rha hai yeh
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"rohan".trueLength()
"Javascript".trueLength()