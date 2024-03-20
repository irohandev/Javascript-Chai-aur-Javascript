class User{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{     //teacher class user ko inheri kiya hai
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password

    }

    addCourse(){
        console.log(`A new Course was added by ${this.username}`);
    }
}

const val = new Teacher("ABC" , "ABC@GMAIL.COM" , 123)
// val.addCourse()

const val2 = new User("XYZ")         
// val2.addCourse()             //yeh krne se error ayega kyuki user ko teacher inherit kiya hai na ki teacher ko user 
val2.logMe()

