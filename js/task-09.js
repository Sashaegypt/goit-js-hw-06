function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector('body');
const buttonRef = document.querySelector('.change-color');
const span = document.querySelector('span#color');

buttonRef.addEventListener('click', onButtonChange);

function onButtonChange() {
  let changeColor = getRandomHexColor();
  body.style.backgroundColor = changeColor;
  span.textContent = changeColor;
}

console.log(buttonRef);