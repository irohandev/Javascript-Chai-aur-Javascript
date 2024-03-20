class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){          //idhar jaise hi static add kiye koi bhi access nhi kr sakta hai ab
        return `123`
    }
}

const val = new User("rohan_dev")
// console.log(hitesh.createId())           //yeh error dega..kyuki static ko access krna chah rha hai

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const val1 = new Teacher("Rohan", "rohan@google.com")
//console.log(val1.createId());           //yeh bhi error dega kyuki ststic ko koi bhi access nhi kr skta ..yha child access krna chah rha tha