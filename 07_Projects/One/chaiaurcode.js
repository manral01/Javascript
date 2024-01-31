const buttons=document.querySelectorAll('.button')
const body=document.querySelector('body')

buttons.forEach(function(button){
       button.addEventListener('click',function(e){ //adding the event
       if(e.target.id==='grey') // .target will give the events occuring 
       {
        body.style.backgroundColor=e.target.id; // this will change the bg color 
       }
       if(e.target.id==='white') // .target will give the events occuring 
       {
        body.style.backgroundColor=e.target.id; // this will change the bg color 
       }
       if(e.target.id==='blue') // .target will give the events occuring 
       {
        body.style.backgroundColor=e.target.id; // this will change the bg color 
       }
       if(e.target.id==='yellow') // .target will give the events occuring 
       {
        body.style.backgroundColor=e.target.id; // this will change the bg color 
       }
       })
})
