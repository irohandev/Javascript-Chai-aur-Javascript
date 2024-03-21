const descripter = Object.getOwnPropertyDescriptor(Math, "PI")

// console.log(descripter);

// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);

const obj = {
    name: 'Tea',
    price: 250,
    isAvailable: true,

    orderTea: function(){
        console.log("Tea not available");
    }
}

console.log(Object.getOwnPropertyDescriptor(obj, "name"));

Object.defineProperty(obj, 'name', {
    //writable: false,
    enumerable: true,
    
})

console.log(Object.getOwnPropertyDescriptor(obj, "name"));

for (let [key, value] of Object.entries(obj)) {
    if (typeof value !== 'function') {
        
        console.log(`${key} : ${value}`);
    }
}