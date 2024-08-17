// / Є два об'єкти, які описують деякі характеристики телефонів.
// // Потрібно викликати метод showInfo, щоб він логував інформацію про кожний телефон,
// // передаючи аргументом країну-виробник телефону.
// // "HUAWEI" - "China", "SAMSUNG" - "South Korea".

const tel = {
    regNumber: "AE8345FEDAS",
    brand: "HUAWEI", 
    showInfo(country) {
        console.log(`${country} ${this.regNumber} ${this.brand}`);
    }
}
const tel_2 = {
    regNumber: "AO8518FEGHT",
    brand: "SAMSUNG", 
}
// tel.showInfo('China');
// tel.showInfo.call(tel_2, 'South Korea');
// tel.showInfo.apply(tel_2, ['South Korea']);
// const tel_3 = tel.showInfo.bind(tel_2);
// tel_3('South Korea')

// Створіть клас Car, який має конструктор для зберігання марки та
// року виробництва автомобіля.
// 1. Додайте метод, який обчислює вік автомобіля на основі поточного року
// та року виробництва і виведе в кнсоль рядок `Вік автомобіля: age років`
// 2. Додайте перевірку, якщо вік автомобіля більше ніж 5 років, виводимо
// повідомлення "Автомобіль потребує технічного обслуговування."
// в іншому випадку - "Автомобіль не потребує технічного обслуговування зараз."
// 3. Додайте перевірку, якщо рік виробництва перевищює поточний рік,
// вивести повідомлення "Помилка: Рік виробництва не може бути пізнішим за поточний рік."

class Car {
    constructor(model, age) {
        this.model = model
        this.age = age
    }
    calcAge(currentYear) {
        if (this.age > currentYear) {
            console.log("Помилка: Рік виробництва не може бути пізнішим за поточний рік.");
            return
         }
        const years = currentYear - this.age;
        console.log(`Вік автомобіля: ${years} років`);
        if (years >= 5) console.log('Автомобіль потребує технічного обслуговування.');
        else console.log("Автомобіль не потребує технічного обслуговування зараз."); 
    }
};
const sportCar = new Car('BMW', 2015)
// console.log(sportCar);
// sportCar.calcAge(2024)

const newCar = new Car('Toyota', 2026)
// newCar.calcAge(2024)

