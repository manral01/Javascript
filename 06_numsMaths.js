const score=400 // this is also a number but not dedicately 
//console.log(score)
const balance = new Number(100) // this is a number 
//console.log(balance)

//console.log(balance.toString()); // this will be converted to string 
console.log(balance.toFixed(2)) // this will change the value to only two digit 

const otherNumber= 123.8996
console.log(otherNumber.toPrecision(3)); //this is very important to note as it will convert to precis value 

const hund=1000000
console.log(hund.toLocaleString('en-IN')); // this will make it clear to read 

/*********************************MATHS******************** */ 

console.log(Math) //there are various other maths funcion can be used through this function
console.log(Math.abs(-4)) // this will change the negative to positve 
console.log(Math.round(4.3))// this will round of the value 
console.log(Math.ceil(4.6)) // this will round of the top value same as Math.floor(for below value)
console.log(Math.sqrt(25)) // will take the square root
console.log(Math.max(4,5,9))// this finds the max value same goes for Math.min()

console.log(Math.random()) // this will print the random value (generally they are between 0 and 1)
  
const min=10
const max=20
console.log(Math.floor(Math.random()*(max-min+1))+min) // this is to get number betweenany two number here it is max and min 
