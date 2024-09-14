// Потрібно створити функцію sumArray, яка приймає масив чисел.
// Функція повинна повернути проміс, який виконується зі сумою
// всіх чисел у масиві.Проте, якщо масив містить хоча б одне
// нечислове значення, проміс повинен бути відхилений з
// повідомленням про помилку "Масив містить нечислові значення".

function sumArray(array) {
  return new Promise((resolve, reject) => {
    const valueNum = array.some((element) => isNaN(element));

    if (valueNum) {
      reject("Масив містить нечислові значення");
    } else {
      const sum = array.reduce((acc, element) => acc + element, 0);
      resolve(sum);
    }
  });
}

sumArray([1, 2, 4, 5])
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
