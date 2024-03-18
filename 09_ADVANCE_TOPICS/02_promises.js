const promiseOne = new Promise(function(resolve, reject){       //ya toh promise accept(resolve) hoga ya reject hoga
    //Do any async task
    //DB calls, cryptography, network 
    setTimeout(function(){
        //console.log("Task 1 is completed!");
        resolve();
    },1000)
})

promiseOne.then(function(){                 //yeh THIS se hm RESOLVE ko connect kr rhe hai..THIS hmesa resolve se associate rhega 
    //console.log("Promise 1 Consumed!");       //yeh hmesa task completed hone ke badd print hoga kyuki phle task complete hoga phr yeh print hoga
})


new Promise(function(resolve, reject){
    setTimeout(function(){
        //console.log("Task 2 is completed!");
        resolve();
    }, 1000)
}).then(function(){                 //jab hm kisi value mein promise ko hold na kre tohbaise bhi direct kr skte hai..previously jo hm do section mein kiye h aur ab aise ek hi jgh pe kr diye h ek sath
    //console.log("Promise 2 Completed");
})


const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Rohan", email: "rohan@google.com"})
    }, 1000)
})

promiseThree.then(function(user){
    //console.log(user);
})


const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: "ABC", password: "123456"})
        }
        else{
            reject("Error Something went wrong")
        }
    },1000)
});

promiseFour.then((user) => {
    //console.log(user);
    return user.username
}).then((username) => {         //idhar chaining kiye hai return jo value kiya usko input pass kiye phr usko print 
    //console.log(username);
}).catch(function(error){
    //console.log(error);
}).finally(() => {          //yeh last mein print krwane ke liye jisse pata chale ki rosolve ya reject kuch bhi hua h ki nhi 
    //console.log("Finally the promise is either resolved or rejected ");
})


const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: "JS", password: "1234"})
        }
        else{
            reject("Error : JS went wrong")
        }
    },1000)
});

async function consumePromisefive(){
    try {                           //.THEN wala bhi use kr skte hai ya aise ASYNC wala bhi use kr skte hai try catch ke sath...aur error ispe nhi ata hai
        const response = await promiseFive      //jis process mein tym lgta usko await krwana pdta hai
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

//consumePromisefive()

async function getAllUsers(){
    try {
        const response = await fetch ('https://api.github.com/users/hiteshchoudhary')
        console.log(response);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log("ERROR", error);
    }
}
getAllUsers()