// Напишіть функцію сheckCase, яка приймає рядок як аргумент і повертає true, якщо у цьому рядку зустрілась хочаб одна велика літера, якщо  ні то повертає false
//console.log(сheckCase("javaScript"));

function checkCase(string) {
  for (const letter of string) {
    if (letter === letter.toUpperCase()) {
      return true;
    }
  }
  return false;
}
console.log(checkCase("jAvascript"));
