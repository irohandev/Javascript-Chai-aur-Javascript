function multiply5(num){
    return num*5
}

multiply5.power = 2             //yeh function tha but phr bhi object wla .(dot) operation kr skte hai kyuki js mein function bhi object hi hote h
console.log(multiply5(6));
console.log(multiply5.power);
console.log(multiply5.prototype);           //yeh ek empty object return krega {}

function createUser(username, price){
    this.username = username
    this.price = price
}

createUser.prototype.increment = function(score){
    this.price = price++
}

createUser.prototype.printMe = function(){
    console.log(`Price is ${this.price}`);
}

const chai = new createUser("chai", 30)
const tea = createUser("tea", 300)

chai.printMe()



// Notes:
// Here's what happens behind the scenes when the new keyword is used:

// A new object is created: The new keyword initiates the creation of a new JavaScript object.

// A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

// The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

// The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.
