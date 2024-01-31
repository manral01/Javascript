
         const form = document.querySelector('form');
         // this usecase will give you empty
         // const height = parseInt(document.querySelector('#height').value)
         
         form.addEventListener('submit', function (e) { // adding an event (submit )
           e.preventDefault(); // this is to prevent default submit 
         
           const height = parseInt(document.querySelector('#height').value); //getting value in string and converting to int
           const weight = parseInt(document.querySelector('#weight').value);//getting value in string and converting to int
           const results = document.querySelector('#results');
         
           if (height === '' || height < 0 || isNaN(height)) {
             results.innerHTML = `Please give a valid height ${height}`;
           } else if (weight === '' || weight < 0 || isNaN(weight)) {
             results.innerHTML = `Please give a valid weight ${weight}`;
           } else {
             const bmi = (weight / ((height * height) / 10000)).toFixed(2);
             //show the result
             results.innerHTML = `<span>${bmi}</span>`;
           }
         });
         
         