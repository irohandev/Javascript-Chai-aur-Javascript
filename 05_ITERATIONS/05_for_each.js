//for each

//iterating array using for-each

const array1 = ["a", "b", "c", "d", "e"]

array1.forEach( function (val) {        //Yeh array ke sath hai for each jo normal function call back kr rha
    // console.log(val);
} )


array1.forEach( (ele) => {              //Yeh array ke sath hai for each jo arrow function call back kr rha
    //console.log(ele); 
} )


function print(item){
    //console.log(item);      //yeh ek funtion just to print single elements 
}

array1.forEach(print)           //Idhar for-each ke sath hm print ko reference diye hai na ki call kiye 

array1.forEach( (item, index, arr) => {         //arrow function ke sath aur bhi value add kr skte hai parameters mein
    console.log(item, index, arr);

})

const coding = [
    {
        programmingLang: "Javascript",
        progFileName: "js"
    },
    {
        programmingLang: "java",
        progFileName: "java"
    },
    {
        programmingLang: "python",
        progFileName: "py"
    }
] 

coding.forEach( function (item) {
    console.log(item.programmingLang);
})