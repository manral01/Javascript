const coding =["js","java","phython","cpp"]

const values =coding.forEach((item)=>{ // for each will not return any values 
    // console.log(item);
   return item
})
//console.log(values);

const myNums=[1,2,3,4,5,6,7,8,9,10]

// filter operations
// const newNums=myNums.filter((num)=>num>4) // this returns the value 
/*  const newNums=myNums.filter((num)=>{
    return num>4 // this has to be wrttien 
}) // this returns the value 
console.log(newNums);  */


// for each for returning

const newNums=[]
myNums.forEach((num)=>{
    if(num>4){
       newNums.push(num)
    }
})
//console.log(newNums);


const books =[
{title:"book1", genre:"Fiction",publish:1981, edition:1989},
{title:"book2", genre:"Fiction",publish:1981, edition:1989},
{title:"book3", genre:"history",publish:1981, edition:1989},
{title:"book3", genre:"Fiction",publish:1981, edition:1989},
{title:"book4", genre:"story",publish:1981, edition:1989},
{title:"book5", genre:"Fiction",publish:2006, edition:2012},
{title:"book6", genre:"action",publish:1981, edition:1990},
{title:"book7", genre:"Fiction",publish:1981, edition:1993},
{title:"book8", genre:"Fiction",publish:2005, edition:2010},
{title:"book9", genre:"Romance",publish:1981, edition:1989},
{title:"book10", genre:"history",publish:1981, edition:1989},
{title:"book11", genre:"Sci",publish:1981, edition:1989},
    
];

//const userBooks=books.filter((bk)=>bk.genre==='history' )
const userBooks=books.filter((bk)=>{
    return bk.publish>1981 && bk.genre==="history"
    
} )
console.log(userBooks)
