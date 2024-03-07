function one(){

    const username = 'Rohan'
    function two(){
        const website = 'google'
        console.log(username);      //but ispe koi error nahi hai kyuki inner function outer k element ko access kr sakta hai outer function inner ka nahi kr skta hai
    }
    //console.log(website);         //yeh error dega kyuki yeh nested function ke element ko call kiye hai

    two()   
}
//one()


if(true){
    const username = "Rohan Dev Singh"
    if(username === "Rohan Dev Singh"){
        const id = " just logged in!"
        console.log(username+id);
    }
    //console.log(id);        //iska scope bs andar tak hai toh error ayega yeh
}
//console.log(username);      //iska bhi scope bs andar tak hai toh error ayega yeh

//-----------------------------------------------SOMETHING EXTRA---------------------------------

console.log(addone(5))      //function declaration se phle call kiye but isse error nhi ayega 

function addone(num){
    return num + 1
}



addTwo(5)       // idhr error ayega kyuki aise function declare krne ke wajah se value store bhi ho rha hai addtwo pe kyuki woh ek variable ke jaise bhi treat kiya ja rha hai...
const addTwo = function(num){
    return num + 2
}
