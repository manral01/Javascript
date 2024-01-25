// objects singleton 
// tinderUser= new Object()
const tinderUser={}
tinderUser.id="123abc"
tinderUser.name="sammy"
tinderUser.isLoggedIn=false 

const regularUser ={
    email:"manral@gmail.com",
    fullName:{
        userFullName:{
            firstName:"abhishek",
            lastName:"sharma"
        }
    }
}
console.log(regularUser.fullName.userFullName.firstName); // using . further things can be accessed 

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
//const obj3= Object.assign({},obj1,obj2)// this is how objects are merged 
const obj3={...obj1,...obj2}//this is the best way to merge the objects

console.log(obj3);

const users=[ // this is how we get value from the database (json)
    {
        id:1,
        email:"h@gmail.com"
    }
]

console.log(tinderUser)

console.log(Object.keys(tinderUser)); //this is how we get the keys for the objects, this is very important as it will helpto find the value as well 
console.log(Object.values(tinderUser));// this is the way to find the values of the objects 
console.log(Object.entries(tinderUser));// this will make array with respect to the keys ==>[key,value]
console.log(tinderUser.hasOwnProperty('name'));// this is to check for the property in the object to check wheather if it is there or not 
 
const course = {
    coursename:"js in hindi",
    coursePrice:"999",
    courseTeacher:"hitesh"
}

// object destructring

const {courseTeacher: teach}= course // this will allow us not using . and normally values can be accessed,and also : will change the value courseTeacher to teach 
//console.log(courseTeacher) //==>like this
console.log(teach) //==>like this






