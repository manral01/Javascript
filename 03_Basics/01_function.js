function sayMyName()
{
   // console.log("A");
    //console.log("M");
    //console.log("A");
    //console.log("N");

}

sayMyName()

function addTwoNumber(number1,number2)
{
    //console.log(number1+number2);
}
function addThreeNumber(number1,number2,number3)
{
    return (number1+number2+number3);
}

addTwoNumber(3,5);//calling a fucntion 
addTwoNumber(3,"4");
const temp=addThreeNumber(1,2,3);
//console.log(temp);

function loginUserMessage(username){
    if(username===undefined) //or (!username)
    {
    console.log("Please enter a username");
    return 
    }
    return `${username} just logged In`
}

// console.log(loginUserMessage())

function calculateCartPrice(val1,...num1) // ... are rest and spread operators 
{
    console.log(val1);
    return num1
}
// object passing through fucntion 
console.log(calculateCartPrice(100,200,1000)) // withe the help of rest operators we can pass multiple paramaters to the function , and here val1 will take 100 and rest will be taken by num1
 const user ={
    username:"abhishek",
    price :199
 }

 function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
 }

 handleObject(user); 
 handleObject({ // object can also be passed directly 
    username:"sam",
    price:399
 })
   // array passing through object 
 const myNewArray =[200,300,100,400]
 function returnSecondvalue(getArray){ // passing array through object 
    return getArray[2];
 }
 console.log(returnSecondvalue(myNewArray));
 console.log(returnSecondvalue([200,300,1444,5,4,5])); // direct array can also be passed 