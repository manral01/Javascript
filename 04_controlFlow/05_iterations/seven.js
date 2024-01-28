const myNumers=[1,2,3,4,5,6,7,8,9,10]

//const newNums=myNumers.map((num)=>{ return num+10}) //maps

//console.log(newNums)

// CHAINING

const newNums =myNumers.map((num)=>num*10).map((num)=>num+1).filter((num)=>num>=40) //this is called chaining 
//console.log(newNums);

// Reduce 

const myNums=[1,2,3]
const myTotal= myNums.reduce(function (acc,currval){
    console.log( `acc:${acc} and currval:${currval}`);
    return acc+currval
},9)


//console.log(myTotal)
const mNums=[1,2,3]
const Total=mNums.reduce((accc,curval)=>accc+curval,10)
//console.log(Total)

const shoppingCart =[
     {
         itemName:"JS COurse ",
    price:299
    },
    {
        itemName:"Java COurse ",
        price:899
        },
        {
        itemName:"Phython COurse ",
            price:699
            },
]

const priceToPay=shoppingCart.reduce((acc,item)=>(acc+item.price),0)
console.log(priceToPay)