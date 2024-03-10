// for each

const arr = ["A", "B", "C", "D"]

const value = arr.forEach( (item)=>{        //for each mein aise value store krna possible nahi hai kyuki value return nahi krta hai
    // console.log(item);
} )

// filter

const myNum = [1,2,3,4,5,6,7,8,9,10]

const result = myNum.filter((num) => num>5)     //ispe yeh possible hai kyuki filter values ko return krta hai..

//console.log(result);


const nums = []
myNum.forEach( (num) => {
    if(num >5){                     // yeh hmse sme cheez kiya hai jo filter se kiya gya hai 
        nums.push(num)
    }
} )
//console.log(nums);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

let userBooks = books.filter( (bk) => bk.genre === 'History') //idhr jis book mein genre histry hoga usko output dega

userBooks = books.filter( (bk) => { 
    return bk.publish >= 1995 && bk.genre === "History"         //idhar jo book 1995 ke bdd aya hai aur sath mein woh history ka bhi hona chahiye ...aise book ko return krega 
})
console.log(userBooks);


//NOTE:
// agar arrow function ke baad hm CURLY BRACES{} mein condition dlnge toh return use krna pdega wrna sirf OBJECT [] return krega 