const marvelHeroes = ["Thor", "Ironman", "Hulk"]
const dcHeroes = ["Superman", "Flash", "Batman"]


// marvelHeroes.push(dcHeroes)
// console.log(marvelHeroes);          //array ke andar ek aur array ayega

const all_heroes = marvelHeroes.concat(dcHeroes)        //dono mein ek sath mila dega but there is limitation like ki do array ko krna tha isliye ho gya lekin do se jyda rhene se dikt hai 
// console.log(all_heroes);


const All_heroes_together = [...marvelHeroes, ...dcHeroes]      //yeh hai alternative concat wale ka kyuki ispe aur add krna hai toh AUR BHI Dal skte hai dot ke sath mila kr..
console.log(All_heroes_together);


const array1 = [1,2,5,[4,6,7],9,8,[2,3,[3,6,8]]]
const new_array = array1.flat(Infinity)      //isse sare arary ke andar jo bhi array bane hai sab ek hi array mein shift ho jynege 
console.log(new_array);


console.log(Array.isArray("Rohan"));        // ispe woh array se question krega ki kya aisa kuch array pasnd hai
console.log(Array.from("Rohan"));       // This is create a array using the element present in the input here it is ROHAN 


let score1 = 300
let score2 = 400
let score3 = 100
let score4 = 500

console.log(Array.of(score1, score2, score3, score4));          // ispe sare score ko mila kr ek array bana dega 