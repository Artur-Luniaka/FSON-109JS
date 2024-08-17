// Створи клас Phone який створює об'єкт з ​​властивістю price.
// Додай статичну властивість MAX_PRICE зі значенням 40000 - максимально допустима ціна телефону.
// Оголоси приватну властивість price доступ до якої буде через геттер та сеттер.
// Додай сетеру price перевірку значення параметра newPrice, що передається.Якщо воно більше за MAX_PRICE,
// сеттер нічого не робить, а якщо менше або дорівнює, то перезаписує ціну телефону.


// class Phone {
//     static max_price = 40000;
//     #price;

//     constructor(price) { 
//         this.#price = price;
//     }
//     get price() { 
//         return this.#price;
//     }
//     set price(newPrice) { 
//         if (newPrice <= Phone.max_price) { 
//             this.#price = newPrice;
//         }
//     }
// }

// const iphone = new Phone(40000);
// console.log(iphone.price);

// iphone.price = 12000;
// console.log(iphone.price);

// iphone.price = 50000;
// console.log(iphone.price);