//for in


//interation in OBJ using FOR IN
const myobj= {
    js : "Javascript" ,
    cpp : "C++",
    py : "Python"
}

for (const key in myobj) {
    //console.log(`${key} = ${myobj[key]}`);
}


const arr1 = ["A", "B", "C", "D" ]
for (const i in arr1) {
    console.log(arr1[i]);
    
}


//NOTE:
// FOR IN loop mein direct keys ko access kiya jta hai jab hm kisi obj ya array ko iterate kr rhe honge toh ..aur yeh hi cheez FOR IN ko FOR OF se alag banata  
// MAPS ke sath hm is loop ko use nahi kr skte hai!
