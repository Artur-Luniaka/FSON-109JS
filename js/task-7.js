// Напишіть функцію buildNumberLists(n), яка будує два окремих масиви: 
// один для парних чисел, інший - для непарних чисел у заданому діапазоні 
// чисел від 1 до n. І виводить в консоль ці два масиви.

function buildNumberLists(n, type) {

    const odd = [];
    const even = [];
    for (let number = 1; number <= n; number++) {
        if (number % 2 === 0) {
            even.push(number);
        }
        else odd.push(number);
    }
    if (type === 'odd') return odd;
    if (type === 'even') return even;
}
    console.log("buildNumberLists:", buildNumberLists(34, 'even'))
    console.log("buildNumberLists:", buildNumberLists(12, 'even'))
    console.log("buildNumberLists:", buildNumberLists(7, 'odd'))