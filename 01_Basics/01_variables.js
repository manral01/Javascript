const accountId=144553 // it cannot be changed
let accountEmail="manral@gmail.com" // this is used because of the scope
var accountPassword="12345"// this is not used bacause of the functional scope and block scope 
accountCity="Dehradun" //this is not the ethical way although it  can be used 
let accountState;

//accountId=2 this is not allowed with the const 
accountEmail="man@gmail.com"
console.log(accountId);
console.log(accountEmail);
console.log("    OR     ")
console.table([accountId,accountEmail,accountPassword,accountState])