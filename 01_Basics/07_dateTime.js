// Date
let myDate = new Date() // type of the date is object type
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());// these are the diffrent ways to get the dates in JS
let myCreatedDate = new  Date(2023,2,23) // this is the way to write the code 

console.log(myCreatedDate.toDateString());
 let myTimeStamp = Date.now()// this is to find the time stamp from the satring date in milisecond(from 01-01-1970)
 console.log(myTimeStamp);
console.log(myCreatedDate.getTime()); // this will get the time in milisecond from mycreateddate 
 console.log(Math.floor(Date.now()/1000));

 let newDate = new Date();
 console.log(newDate);
 console.log(myCreatedDate.getMonth());
 console.log(myCreatedDate.getDay());

 // `${newDate.getDay()} and the time`=>  this is how we can write the date if taking it from the other data type

 newDate.toLocaleString('dafault',{ // this is the way to write the thing in object 
    weekday: "long",

 })