//  *? Напишіть цикл, який виводить у консоль
//   *? усі парні числа від min до max
const max = 50;
const min = 23;

// for (let i = min; i <= max; i += 1) {
//     if (i % 2 === 0) {
//         console.log(i);
//     }
// }

let sum = 0;

for (let i = max; i >= min; i -= 1) {
    if (i % 2 === 0) {
        sum += i;
    }
}

console.log(sum);
