// for loop

// for (let i = 0; i <= 10; i++) {
//     const element = i;                   //Syntax of for loop
//     console.log(element);
    
// }

// for (let i = 1; i <=10; i++) {
//     console.log(`Table of ${i}:`);
//     for (let j = 1; j <=10; j++) {               //printing of multiplication table from 1 to 10
//         console.log(`${i} * ${j} = ${i*j}`);        
//     }
    
// }

const myArr = ["A", "B", "C", "D", "E"]

for (let i = 0; i < myArr.length; i++) {
    const element = myArr[i];                   //Array ke element ko access krne ka trika for loops ke through
    console.log(element);
    
}

for (let index = 1; index <= 20; index++) {
    if (index == 10 ){
        console.log("Number 10 is detected ! ");            
        continue;
    }
    else if (index == 15){
        console.log("Number 15 is detected ! ");
        break;
        }

    console.log(index);
}

// Note : 
// 1. continue 
// -jaise hi index ++ hokr 10 ope ayega toh if ke block pe ayega then log wala statemnt print hoga lkin woh normally 10 print ni krega balki sirf if k block lke andar print krega
// -isse hm kisi step ko jump krwane ke liye use krte hai 
// 2. break
// jaise hi else if wla condition match hoga tab woh else if andar wle block m jayega aur then woh print krega log statement uske baad woh khud loop break kr dega break keyword ke wajh se 
// - loop break krne k kam mein ata yeh