/**
 *? Використовуючи функцію if...else,
 *? напишіть код, який запитуватиме:
 *? "Яка офіційна назва JavaScript?"
 *? Якщо користувач вводить "ECMAScript",
 *? то показати через alert: "Вірно!"
 *? інакше відобразити:"Не знаєте? ECMAScript!"
 */


const quest = prompt("Яка офіційна назва JavaScript?")
console.log(quest)

if (quest === "ECMAScript") {
    alert("Вірно!");
} else {
    alert("Не знаєте? ECMAScript!");
}