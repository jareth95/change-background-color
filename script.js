
const button = document.querySelector('button');
const body = document.querySelector('body');
const colors = ['red', 'blue', 'green', 'violet', 'yellow', 'pink'];

body.style.backgroundColor = 'violet';
button.addEventListener('click', backgroundChange);

function backgroundChange(){
  const colorIndex = parseInt(Math.random()*colors.length);
  body.style.backgroundColor = colors[colorIndex];
}