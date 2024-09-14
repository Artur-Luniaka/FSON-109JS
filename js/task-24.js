// Створіть функцію delayedPromise, яка приймає час затримки(у мілісекундах)
// та повертає проміс.Цей проміс має виконатися після вказаної затримки і
// вивести повідомлення в консоль "Пройшло delay мілісекунд
// якщо переданий аргумент не є числом логуй повідомлення про помилку 
// 'Затримка має бути числом'

const newPromise = (ms) => {
    return new Promise ((resolve, reject) => {
        if ( typeof ms === "number") setTimeout(() => {resolve(ms)}, ms);
        else reject('error, delay must be a number')
    })
    }

    newPromise(1500).then((value) => {console.log(`${value} less`);
    }).catch((error) => {console.log(error);
    }).finally(console.log("Promise finished!"));

    newPromise('1500').then((value) => {console.log(`${value} less`);
    }).catch((error) => {console.log(error);
    }).finally(console.log("Promise finished!"));