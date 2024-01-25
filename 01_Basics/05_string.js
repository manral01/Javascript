const name="hitesh"
const repoCount=50
console.log(name+repoCount+"Value"); // this will concatenate but this not good way 

console.log(`Hello my name is ${name}  and my repo count is ${repoCount}`); // this is good way to get any data type will printing 

const gameName = new String('hiteshhc') // this is a way of defining a string 

console.log(gameName[0]); // this way i can fetch the value of the string object 
console.log(name[3]);
console.log(gameName.length); // this will find the length of the string 
console.log(gameName.toUpperCase());// this will change the string to the upper case 
console.log(gameName.charAt(2)); // to find the number at any particular position
console.log(gameName.indexOf('t')); // to find the index of any particular character 

const newString =gameName.substring(0,4) // this will divide the string to the given index 
console.log(newString);

const  anotherString = gameName.slice(-8,4) // this will slice the string

const newStringOne="   hitesh  "
console.log(newStringOne);
console.log(newStringOne.trim()); // this will trim the extra space in the string 

const url= "https://hitesh.com/hitesh%20chaudhary"
 console.log(url.replace('%20','-')) // this can replace the value

 console.log(url.includes('sundar')) // to check for the text in a string  

 console.log(gameName.split('-')); // this is to sparate the string 