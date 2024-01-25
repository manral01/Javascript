//Primitive Data Types => in this copy of the data type is being sent not the data type

// 7 Types :  string,number, Boolean, null, undefined , symbol ,bigInt
const score=100 // number 
const scoreValue=100.3
const isLoggedIn=false // boolean
const outsideTemp= null  //null
let userEmail= undefined // or can be wrtiiten as let userEmail;

const id =Symbol('123') //this is the unique id 
const anotherId =Symbol('123')
const bigNumber= 45 // this will enter in the big int if the number is big 



//Reference type(non-pirmitive) => whos reference is directly sent in the address
 
// Array, objects, functions 

const heros=["shakitman","nagraj",'doga'] ;// this is how array is declared
let myObj={// this is object 
    name:"abhishek",
    age: 22,

}

const myFunction = function(){ // this is a function 
    console.log("hello world ");
}

                /*****************************MEMORIES***************************/

// Stack(primitive )==> we get a copy of the original value, Heap (non-pirmitive )==> we get the copy of the original value 

let myYoutubename= "hitesh"
let anothername=myYoutubename
anothername="chaiaurcode"
console.log(myYoutubename);
console.log(anothername);

let userOne={
    email:"user@google.com",
    upi: "user@ybl"
}
let userTwo = userOne

userTwo.email="hitesh@google.com"

console.log(userOne.email) //here the email will be same for both userOne and userTwo
console.log(userTwo.email)