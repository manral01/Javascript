//singleton
//Object.create ==> to create singleton objects

//object literals 

const mySym=Symbol("key1")
const user ={
    "full name":"abhishek manral",
    name:"abhishek",
    age:23,
    location:"jaipur",
    [mySym]:"Symbol1",
    email:"abhishek.google",
    isLoggedIn:false,
    lastLoginDays:["Monday","Sunday"]


}
console.log(user.email) // way to acces the object not good beacuse if the intial thing is in string then it cannot be accessed
console.log(user["email"]) // correct way to access good way as it can access anything 
console.log(user["full name"]) // this is the example of above 
console.log(user[mySym])

user.email="manral@gmail.com" // to update the value in the object
// Object.freeze(user) // this freeze the values and cannot be changed further 
console.log(user["email"])
user.email="test@gmail.com" // this will not be updated as it is already freezed 
console.log(user["email"])

user.greeting = function()
{
    console.log("Hello, User ")

}


user.greetingTwo= function()
{
    console.log(`Hello user , ${this.name}`);
}
console.log(user.greeting());
console.log(user.greetingTwo());