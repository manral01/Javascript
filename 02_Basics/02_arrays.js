const marvel_heroes=["thor","ironman","spiderman"]
const dc_heroes=["superman","flash","batman"]

// marvel_heroes.push(dc_heroes) // this will create aray under array, this is not the correct way do merge 
const all_heroes=marvel_heroes.concat(dc_heroes) // this will merge two arrays
console.log(all_heroes)
const all_heroes2= [... marvel_heroes,...dc_heroes] //this is the another and best way to merge two or more arrays 
console.log(all_heroes2)

const another_Array=[1,2,3,4,5,6,7,[6,7,[4,5]]] // just another way to decalare the array 
 const real_another_array= another_Array.flat(Infinity) // this will separate the aray in the subarray for above case 
console.log(real_another_array)

console.log(Array.isArray("hitesh"))
console.log(Array.from("hitesh")) // this will create the hitesh an array(array.from)
console.log(Array.from({name:"hitesh"})) // this is intresting case for interviews 

let score1=100
let score2=200
let score3=300
let score4=400
console.log(Array.of(score1,score2,score3,score4)); // this will create an arary for above cases 

