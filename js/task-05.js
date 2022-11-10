const inputEl = document.querySelector('#name-input');
const span = document.querySelector('#name-output');

inputEl.addEventListener('input', onInputChange);

// const onInputChange = i => {
//     span.textContent = i.currentTarget.value;
// }

function onInputChange(i) {
    span.textContent = i.currentTarget.value;
    if (span.textContent === '') {
        span.textContent = 'Anonymous'
    }
}