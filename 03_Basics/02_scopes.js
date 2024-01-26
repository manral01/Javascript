let a =300 //global variables 
const b=20
var c= 30

if (true)
{
    let a=20 //local variables 
    console.log("Inner A:",a) // here, a will be 20 (block scope )
}
console.log("Outer A:",a) // a will be 300(global scope )

 // Nested Scope

 function one(){
    const username="abhishek"

    function two(){
        const website="youtube"
        console.log(username);
    }
    // console.log(website) ==>this will not get executed 
   // two()
 }
 //one()

  if (true)
  {
    const username="abhishek"
    if(username==="abhishek"){
        const website="youtube"
       // console.log(username+website) // this will get executed 

    }
  }


  //+++++++++++++++++ Intresting Example+++++++++++++++++++++++++

  function  addOne(num)
  {
   return num+ 1
  }

 addOne(5)
const addTwo = function(num){ //this is also find of function made and used in hoisting in this fucntion cannnot be accessed prior to its defintion
    return num+2
}
addTwo(5)