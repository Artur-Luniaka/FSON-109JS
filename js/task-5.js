// Напишіть функцію, яка приймає рядок як аргумент
// і повертає новий рядок, в якому регістр кожного символу
//інвертовано(великі літери стають маленькими, а маленькі – великими)
function invertCase(str) {
  let invertString = "";
  for (const letter of str) {
    if (letter === letter.toUpperCase() ) {
      invertString += letter.toLowerCase();
    } else {
      invertString += letter.toUpperCase();
    }
  }
  return invertString;
}
console.log(invertCase("Hello World"));
console.log(invertCase("helLO woRld"));
