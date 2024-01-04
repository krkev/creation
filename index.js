let button = document.querySelector('#btn');

button.addEventListener('mouseover', hover);
button.addEventListener('mouseout', resetHover);
button.addEventListener('click', handleclick);

function hover(){
   this.style.background = '#105474';
   this.style.border = 'none';
   this.innerHTML = 'Click me';
}
function resetHover(){
   this.style.background = '';
   this.innerHTML = 'Hover me';
   this.style.border = '3px solid #f2f2f2';
}
function handleclick(){

    let container = document.querySelector('.container');
      container.style.display = 'none';

    let popUp = document.querySelector('.content');
    setTimeout(()=>{
       popUp.style.display = 'block';
    }, 500)
}

let secondButton = document.querySelector('#btn2');

secondButton.addEventListener('mouseover', hover2);
secondButton.addEventListener('mouseout', resetHover2);
secondButton.addEventListener('click', handleclick2);

function hover2(){
   this.innerHTML = 'Click me';
   this.style.background = '#1f9989e7';
   this.style.border = 'none';
}
function resetHover2(){
   this.innerHTML = 'Hover me';
   this.style.background = '';
   this.style.border = '3px solid #f2f2f2';
}
function handleclick2(){

   let popUp = document.querySelector('.content');
      popUp.style.display = 'none';

      let section = document.querySelector('section');
       section.style.display = 'block';
}