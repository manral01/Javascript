const user ={
    username:"abhishek",
    price:999,

    welcomeMessage : function(){
   console.log(`${this.username}, welcome to website `) // this keyword will be used for current context 
   console.log(this)// this will print the current context 
    }
   
}

//user.welcomeMessage()
//user.username="sam" // here we have changed the context for the username 
//user.welcomeMessage()
//console.log(this ) //here it will print the empty context 

function chai(){
    let username="manral"
    //console.log(this.username) // ==>this will not be printed as this is a fucntion and not object 
    //console.log(this)
}
//chai()

const chai1 =()=>{// another way of declaring 
    console.log(this.username) // ==>this will not be printed as this is a fucntion and not object 
    console.log(this)
}
chai1()

const addTfour =(num1,num2)=>{ // declaration 
    return num1+num2
}
const add =(num3,num4)=> (num3+num4 )// this also another way


// Immediately Invoked function Expressions (IIFE)==> to get protected or remove from the global scope pollution 

(function chai() //named IIFE
{
    console.log('DB connected ');
})();

( (name)=>{
    console.log(`DM is connected to ${name}`)
})("abhishek")






