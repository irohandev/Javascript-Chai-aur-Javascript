function myname() {
console.log("R");
console.log("O");
console.log("H");
console.log("A");
console.log("N");
}

//myname            //writing just name is for the reference
//myname()            //writing name with (), which calls the function

function addTwonumber(num1, num2){
    console.log(num1 + num2);
}

//addTwonumber(2, 4)

function add(n1, n2){
    return n1 + n2
    //return ke badd..function ka koi bhi statemnt excute nahi hoga..isliye kch bhi agar statement add krna hai toh return ke phle add krna pdega 
}

const result = add(1,2)
//console.log("Result : ", result);

function logedIn(username){
    
    return `${username} just logged in !`
}

console.log(logedIn('Rohan'));      //Rohan just logged in!
console.log(logedIn());             //undefined just loged in! - because no input was given so it gave ouput as Undefined for removing this type of error we use CONDITIONAL STATEMENTS [IF-ELSE]


function logininfo(username){     //if we give a default argument like username = 'rohan' then undefined wala situation kabhi nahi hoga agr input ayega toh override krega wrna without input rohan hi print krega 
    //if(username === undefined)
    if(!username)
    {
        console.log("Please enter a usernme !");
        return
    }
    
    return `${username} just logged in !`
}


