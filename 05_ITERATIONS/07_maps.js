const Numbers = [1,2,3,4,5,6,7,8,9,10]

const val = Numbers.map( (num) => num = num + 10 )
//console.log(val);


const res = []

Numbers.forEach(function (num){         //sme thing which is done by map is now done by for each... since we cannot return value in for each..so we have to do it with a long process
    num = num + 10;
    res.push(num)
})

//console.log(res);

const newresult = Numbers
                        .map((num) => num *10)
                        .map((num) => num + 1)          //ek ke baad map ya filter add kr skte hai aise..aur usko kehte hai chaining..aur ispe jo bhi operation first wle func se hota woh send chaining wale pe pass ho jyega..override krke 
                        .filter((num) => num>=40)
console.log(newresult);