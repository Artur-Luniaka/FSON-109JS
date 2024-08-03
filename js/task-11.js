// Є об'єкт, у якому зберігаються обрані товари у кошику.
// Напишіть код для визначення загальної суму замовлення
// і збережіть його результат у змінній totalCost.
// Якщо об'єкт cart порожній, то результат має бути 0.

const cart = {
    apple: 50,
    banana: 30,
    orange: 40,
};

//! Object.values()
function totalCostCounter(object) {
    let totalCost = 0;

    const goodsValues = Object.values(object);

    for (const value of goodsValues) {
        if (typeof value === "number") {
            totalCost += value;
        }
    }
    return totalCost;
}

//! forin
// function totalCostCounter(object) {
//     let totalCost = 0;

//     for (const key in object) {
//         if (typeof object[key] === "number") {
//             totalCost += object[key];
//         }
//     }

//     return totalCost;
// }

console.log(totalCostCounter(cart));
