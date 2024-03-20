class user{
    constructor(username, email, password){
        this.username = username
        this.email = email
        this.password = password
    }

    newPassword(){                  //class ke andr function keyword ka jrurt nahi
        return `${this.password}abc`
    }

    changeUser(){
        return `${this.username.toUpperCase()}`
    }
}

const val = new user("Rohan", "rohan@fb.com", 123)
//console.log(val.changeUser());


// behind the scene

function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}


const val2 = new User("rohan_dev", "rohandev@gmail.com", "567")

console.log(val2.encryptPassword());
console.log(val2.changeUsername());