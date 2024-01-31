const clock=document.getElementById('clock')
let date=new Date()
//console.log(date.toLocaleString());

setInterval(function(){//this will run after a certain time as mentioned to it
clock.innerHTML=date.toLocaleTimeString();

},1000)  
