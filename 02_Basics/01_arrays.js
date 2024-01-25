// ==>array
const myArr =[0,1,2,3,4,5,true,"hitesh"] // array declaration 
const myHeroes= ["virat","dhoni","rohit"] 
const myArr2= new Array(1,2,3,4)  //
console.log(myArr[0]); // accessing the value of the array  

//==> array methods 

myArr.push(6) // this is to push the element in the array 
//console.log(myArr)
myArr.pop() //this is remove the last element 
myArr.unshift(9) // this is add the element in the starting and will shift the element my one index 
myArr.unshift(9) 
myArr.shift()// this is to remove the first element and it will reverse the index by one of each element
console.log(myArr.includes(9)); // this is to check for any element 
console.log(myArr.indexOf(19)) // this is to find the index returns -1 if not present 
//console.log(myArr)
const newArr =myArr.join() // this comvert the newArr to string 

//==>slice and splice 
console.log("A",myArr);
const myn1= myArr.slice(1,3)  // this will cut the array from 1 index to 3
console.log(myn1);

const myn2= myArr.splice(1,3) //this will include the last range also and also it will manipulate the original array 
console.log(myArr);// to show the manipulation of original array 
console.log(myn2)