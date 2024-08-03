// Написати функцію clearArray(array), котра створить новий масив  
// в якому не буде значень, які приводяться до false

const array = [
  1,
  0,
  54,
  "doc",
  null,
  "jpg",
  undefined,
  "",
  "png",
  "exe",
  false,
  "mp4",
  NaN,
  "hbs",
];

function clearArray(array) {
    let clearMassive = [];
    for (let elem of array) {
        if (elem) {
            clearMassive.push(elem);
        }
    } return clearMassive;
}

console.log(clearArray(array));
