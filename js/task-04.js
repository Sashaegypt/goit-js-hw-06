const dataDecrementEl = document.querySelector('button[data-action="decrement"]');
const dataIncrementEl = document.querySelector('button[data-action="increment"]');
const spanEl = document.querySelector('span');

let counterValue = 0;



const handleButtonDecrementClick = () => {
    counterValue -= 1;
    spanEl.innerText = counterValue;
};

const handleButtonIncrementClick = () => {
    counterValue += 1;
    spanEl.innerText = counterValue;
};

dataDecrementEl.addEventListener('click', handleButtonDecrementClick);
dataIncrementEl.addEventListener('click', handleButtonIncrementClick);