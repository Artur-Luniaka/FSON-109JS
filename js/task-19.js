// При кліку на кнопку "Подвоїти" збільшувати значення в кожному
// елементі списку в два рази.

const itemEl = document.querySelectorAll('.listItem');
const btnEl = document.querySelector('#double');

function doubleValue() {
    itemEl.forEach(item => item.textContent = item.textContent * 2)
};
btnEl.addEventListener('click', doubleValue);

