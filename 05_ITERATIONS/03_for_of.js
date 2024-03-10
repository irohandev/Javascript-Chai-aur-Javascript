//for of 

// [{}, {}, {}]
// for (const i of object) {           //Syntax
    
// }

const array1 = ["A", "B", "C", "D"]
for (const ele of array1) {
    //console.log(ele);   
}


const Greetings = "Hello World"
for(const greet of Greetings){
    if(greet == " "){
        //console.log(" ")
        continue;
    }
    else{
        //console.log(greet)
    }
}


// Map 
// ispe unique value stre krte aur yeh bhi ek typ ka array hi hai with key and values..jaise pythin mein dictionary hota hai kuch us typ ka

const map = new Map()
map.set("IN", "INDIA")
map.set("SL", "SRILANKA")
map.set("NL", "NEPAL")

// map.set("IN", "INDIA")  -- is line ko add krne ke bawajood india do barr stre nahi krega kyuki map unique value store krta hai

console.log(map);

for (const [key, value] of map) {           //map mein for of loop use krne ke trika
    console.log(key, "-", value );
}

//NOTE:
// Object k sath hm for-of loops nahi lga sakte hai! 