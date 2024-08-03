// Для об'єкту book, послідовно виконай наступні дії:
// 1. Додай поле rating зі значенням 4.8.
// 2. Заміни значення поля genre на "Classic Fiction".
// 3. Заміни значення поля isBestseller на false.
// 4. Виведи за допомогою console.log вміст об'єкта book
//    у форматі ключ:значення,
//    використовуючи Object.keys() і for...of.
// Очікуваний результат
// title: To Kill a Mockingbird
// author: Harper Lee
// genre: Classic Fiction
// yearPublished: 1960
// isBestseller: false
// rating: 4.8
const book = {
  title: "To Kill a Mockingbird",
  author: "Harper Lee",
  genre: "Southern Gothic",
  yearPublished: 1960,
  isBestseller: true,
};
book.rating = 4.8;
book.genre = "Classic Fiction";
book.isBestseller = false;
const newKeys = Object.keys(book);
for (const key of newKeys) {
  console.log(`${key}:${book[key]}`);
}
