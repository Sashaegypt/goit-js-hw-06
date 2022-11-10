const numbEl = document.querySelectorAll('.item');
const titlesEl = document.querySelectorAll('h2');
const itemsEl = document.querySelectorAll('.item > ul');

console.log(`Number of categories: ${numbEl.length}`);
const makeMessage = () => {
    for (let i = 0; i < titlesEl.length; i += 1) {
        console.log('Category:', titlesEl[i].textContent);
        console.log('Elements:', itemsEl[i].childElementCount);
    }
}
makeMessage()
