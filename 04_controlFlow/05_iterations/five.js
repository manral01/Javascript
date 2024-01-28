const coding =["js","java","phython","cpp"]
//higher order 

coding.forEach( function (item){ // this is for each loop
//console.log(item)

})// this is called a call back fucntion inside for each 


// arrow fucntion 
 coding.forEach( (value)=>{
//console.log(value);

 })

 function printME(item)
{
    //console.log(item)
}


coding.forEach( printME)


coding.forEach((item,index,arr)=>{
//console.log(item,index,arr);
})

// objects in array
const myCoding=[
{
    languageName:"Javascript",
    lanuageFileName:"JS"
},
{
    languageName:"Java",
    lanuageFileName:"Java"
},
{
    languageName:"pyhton",
    lanuageFileName:"py"
},
]

myCoding.forEach((item)=>{
    console.log(item.languageName); // this is to acces the object in the array 

})


