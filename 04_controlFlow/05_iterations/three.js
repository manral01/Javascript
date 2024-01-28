// for of 
const arr =[1,2,3,4,5]

for (const num of arr) { // this is for of 
    console.log(num);
    
}

const greetings="heloo world"
for(const greet of greetings) // this for of
{
    console.log(`Each char is ${greet}`);
}

// Maps 
const map= new Map() // it holds key value pair [key,value]
{
map.set('In',"India")
map.set('USA',"United States of America ")
//console.log(map);
}

for (const [key,value] of map){
    console.log(key,':-',value);
}

const myObject ={ // objects 
    'game':'NFS',
    'game2':'Spiderman'
}