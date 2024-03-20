function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log("called");
}

function createUser(username, email, password){
    // SetUsername(username)            //iska mtlb hm call nhi kr rhe hai idhr bs reference de rhe hai...isse output mein username set nahi krega
    SetUsername.call(this, username)        //isse woh call ho rha hai CALL keyword use krke ..jisse username set krega woh output ke liye 
    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai);