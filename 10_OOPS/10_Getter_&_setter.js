class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){            //getter aur setter k name values ke equal hoga
        return this._email.toUpperCase()
    }
    set email(value){               //get ke sath hmesa set ko bhi add krna pdega
        this._email = value
    }

    get password(){
        return `${this._password}rohan`         //constructor k andr ke value ko override krna hai toh idhar values ko chnge krna pdega..wrna error ayega 
    }

    set password(value){
        this._password = value
    }
}

const val = new User("rohan@ai.com", "abc")
console.log(val.password);
console.log(val.email);

// Note:
// Getter aur setter actuall mein values ko override krne mein help krta hai
// Get ka mtlab memory se leke ana 
// Set values override ke badd set krne mein help krta hai