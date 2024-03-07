var c = 300
let a = 500
if (true) {
    let a = 10
    const b = 20
    console.log("INNER: ", a);  // 10
}

console.log(a);         //500
//console.log(b);       //const hai yeh aur if ke block mein hai iska scope if block ke andar tak hai
console.log(c);         //300