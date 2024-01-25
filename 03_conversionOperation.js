let score="33" // this is a string
console.log(score);
console.log(typeof(score));

let valueInNumber= Number(score); // this will change the type of score from string to number 
console.log("Value after the change is:")
console.log(typeof(valueInNumber))// type changed from string to number 
console.log(valueInNumber) //value changed 



// A number is convertable easily 
// 33ab cannot be changed
// true will convert to 1 and flase will convert to 0
//  1 converted to boolean will be true and flase for 0
//1=> true 
//0=>false
// empty string=> false
// "hitesh "=> true
console.log("Operationcode below")

                                        /*******************OPERATION*******************/


let str1="hello"
let str2 =" abhishek"
let str=str1 + str2;// this will add the two string 
console.log(str)

console.log("1"+2); // this will give 12 if the string is first then everything will be considered as string 
console.log(1+"2"); // this will give12 
console.log("1"+2+2); // this will also give 122
console.log(1+2+"2"); //but this will give 32 if the number is adding first then they will be added and wil not be considered as the string 

console.log(+true); //this will give as 1 
console.log(+"") // this will give as  as "" is equal to 0

let gameCounter=100
gameCounter++;
console.log(gameCounter)

