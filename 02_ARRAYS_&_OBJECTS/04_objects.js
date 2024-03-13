//const user = new Object()
const user = {}


user.id = "123abc"
user.name = "Rohan"
user.IslogedIn = false

//console.log(user)


const regular_user = {
    email:"abc@gmail.com",
    fullname: {
        username: {
            first : "Rohan Dev",
            last : "Singh"
        }
    }
}

// console.log(regular_user.fullname.username.first);    //output - Rohan Dev

const obj1 = {1: "a", 2 : "b", 3 :"c"}
const obj2 = {4: "d", 5 : "e", 6 :"f"}
const obj3 = {7: "g", 8 : "h", 9 :"i"}

const obj4 = Object.assign({}, obj1, obj2, obj3) // will concatenate all the objects
//console.log(obj4);

const obj5 = {...obj1, ...obj2, ...obj3}
console.log(obj5);  // will spread and concatenate all the objects

const array =[
    {
        id : '1',
        email: 'test@google.com'
    },
    {
        id : '2',
        email: 'test@google.com'
    },
    {                               // Here in a array[] diffrent ocjects are present
        id : '3',
        email: 'test@google.com'
    },
    {
        id : '4',
        email: 'test@google.com'
    }
]

array[0].email = 'Abc@gmail.com'        // overriding the value of first element of the array

console.log(Object.keys(user));       //return the array of key present in the object(user); similarly we can do this with the values too
console.log(Object.values(user));     //return the array of values present in the object(user)
console.log(Object.entries(user));    //return the array of values & keys present in the object(user)

console.log(user.hasOwnProperty('IslogedIn'));  //for checking in the object is IsLogedIn is present or not.