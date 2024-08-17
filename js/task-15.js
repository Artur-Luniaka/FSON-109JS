// маємо масив об'єктів, який представляє список товарів і їх цін:
// Завдання: Знайдіть суму вартості всіх товарів, які коштують більше 10 гривень.
const products = [
  { name: 'Milk', price: 20 },
  { name: 'Bread', price: 10 },
  { name: 'Eggs', price: 15 },
    { name: 'Eggs', price: 8 },
    { name: 'Eggs', price: 12 },
    { name: 'Eggs', price: 46 },
  { name: 'Eggs', price: 2 },
];
const value = 10;

function findSum(array, value) {
    return array.filter(product => product.price > value)
        .reduce((acc, product) => acc + product.price, 0)
}

// console.log(findSum(products, value));

// Маємо масив об'єктів, який представляє список замовлень:
// Завдання:
// 1. Перевірте, чи всі замовлення виконані.
// 2. Поверніть список товарів з усіх виконаних замовлень.
const orders = [
  { id: 1, products: ['Milk', 'Bread'], status: 'completed' },
  { id: 2, products: ['Eggs', 'Juice'], status: 'processing' },
  { id: 3, products: ['Pasta', 'Spices'], status: 'completed' },
];

const allOrdersComplete = orders.every(order => order.status === 'completed');
console.log(allOrdersComplete);

const completedOrders = orders.filter(order => order.status === 'completed').flatMap(order => order.products);
console.log(completedOrders);



