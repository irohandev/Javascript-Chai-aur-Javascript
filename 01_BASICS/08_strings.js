const name = "Rohan Dev"
const age = 22

// console.log(name+age+" Value");  => wrong practice of wrtiting code!

console.log(`My name is ${name} and my age is ${age}`);  // while using format string we use ``[back tick]

const getName = new String ("Panagarh")

// console.log(getName);     =>   [String:'Panagarh']
// console.log(getName[0]);  =>   P
// console.log(getName.__proto__);   =>      {}
// console.log(getName.toUpperCase());      => PANAGARH
// console.log(getName.charAt(4));      => g
// console.log(getName.indexOf('g'));       =>4



const new_str = getName.substring(0,5)
console.log(new_str);    //Panag

id = "Durgapur"
const str1 = id.slice(-7, 4)
console.log(str1);      //urg

const str2 = "       Rohan       "
// console.log(str2);      => output will com with SPACES
// console.log(str2.trim());           => output will com without SPACES

const url = "https/www.rohan@devsingh.com"
// console.log(url.replace('@','-'));   => Output will come with '-' not with '@'
// console.log(url.includes('rohan'));         => True
// console.log(url.includes('Durgapur'));         => False

const str3 = "Rohan-Dev-Singh-from-BCET"
// console.log(str3.split('-'));       => list will come in ouput separating each elements without - [hypen]
