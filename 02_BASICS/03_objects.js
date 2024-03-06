// singleton
// Object.create

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Rohan",
    "full name": "Rohan Dev Singh",
    [mySym]: "mykey1",   //[] bracket ke help se woh symbol ke trh treat hoga wrna as a string treat kiya jyega 
    age: 18,
    location: "Panagarh",
    email: "rohan@abc.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

//console.log(JsUser.email)
//console.log(JsUser["email"])
// dono hi trike hai element ko access karne ka 

//console.log(JsUser["full name"])    //But agar "full name" aise declared hai object ke andar toh  usko access aise hi statement se krnge 
//console.log(JsUser[mySym])

JsUser.email = "rohandev@gmail.com"  //aise values ko override kr skte hai..
//Object.freeze(JsUser)       //isse object ko freeze kr diye hai jisse koi bhi override wala option nahi ho pyega for example - 
JsUser.email = "rohan@micrlosoft.com"           //isse email mein chnges nahi hoga but aise likhne pe koi error bhi nahi ayega 
console.log(JsUser);

JsUser.greeting = function() {
    console.log("Hello JS user !");
}
JsUser.greetingTwo = function() {
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
