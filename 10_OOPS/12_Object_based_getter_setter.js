const User = {
    _email: 'rds@ai.com',           //uderscore ke sath kuch value add kr rhe hai toh mtlb hmlog jydatar yeh cheez private values banane mein kam mein le rhe hai
    _password: "abcdefgh",


    get email(){                
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

const val = Object.create(User)
console.log(val.email);