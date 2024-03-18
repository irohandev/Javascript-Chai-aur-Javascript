//object literal

const user = {
    username: "Rohan",
    loginCount: 10,
    signedIn: true,

    getUserDetails: function(){
        console.log(`Username: ${this.username}`);
        console.log(this);      //current context btayega yeh
    }
}

//console.log(this);              //empty object return krega yeh
//console.log(user.username);
//console.log(user.getUserDetails());


//constructor function = yeh new copy bna deta hai jispe hm agr kuch changes bhi kre toh data/ values ko override na kare 
function User(username, loginCount, isloggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isloggedIn = isloggedIn;

    return this         //yeh bydefault return hota hi hai..likhe ya na likhe utna fark nahi pdta hai 
}

const userOne = new User("Rohan", 15, false)                        //new add kr diye toh yeh User function ka ek copy bna diya hai ...jispe jitna value chnges krnge toh idhr main wle pe koi values overriding ka issues nahi hoga  
const userTwo = new User("Rohan Dev Singh", 20, true)               //same here 
console.log(userOne);
console.log(userTwo);

//NOTE:
//NEW keyword likhte hi ek naya instance {empty object} create hota hai
