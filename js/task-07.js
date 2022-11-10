const input = document.querySelector('#font-size-control');
const span = document.querySelector('span#text')

input.addEventListener('change' , onInputChange)

function onInputChange(event) {
    span.style.fontSize = `${event.currentTarget.value}px`
}