/**
 *? Напишіть програму, яка отримає від користувача
 *? число (кількість хвилин) та виведе в консоль
 *? рядок у форматі годин та хвилин
 *? 70 === 01:10
 */

const value = 98;
function numberToHours(value) {
const hours = Math.floor(value / 60);
const modeHours = String(hours).padStart(2, 0);
const minutes = String(value % 60);
const modeMinutes = minutes.padStart(2, 0);
return `${modeHours}:${modeMinutes}`
}

console.log(numberToHours(98));
console.log(numberToHours(76));
console.log(numberToHours(198));
console.log(numberToHours(798));
console.log(numberToHours(7));


