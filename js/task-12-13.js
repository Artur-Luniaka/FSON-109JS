// Напиши функцію, котра приймає масив користувачів і id.
// У масиві користувачів потрібно знайти людину з заданим id
// і повернути його ім'я. Якщо користувача не було знайдено
// функція повертає повідомлення
// "Користувача з таким id не знайдено"
const users = [
    { id: 1, name: "John" },
    { id: 2, name: "Pete" },
    { id: 3, name: "Mary" }
];

function findUser(array, id) {
    const result = array.find(user => user.id === id);
    if (!result) return `Користувача з таким id${id} не знайдено`;
    return result.name;
}

// console.log("findUser:", findUser(users, 2))
// console.log("findUser:", findUser(users, 1))
// console.log("findUser:", findUser(users, 8))
// console.log("findUser:", findUser(users, 3))

// Зібрати в allTopics масив всіх предметів всіх курсів.
//Виконати фільтрацію, залишивши в allTopics тільки унікальні елементи.
const courses = [
    {
        name: "Basic HTML+CSS",
        topics: ["VSCode", "HTML", "CSS", "GitHub", "GitHub Desctop"],
    },
    {
        name: "Intermediate HTML+CSS",
        topics: ["VSCode", "HTML", "CSS", "GitHub", "Git", "Terminal"],
    },
    {
        name: "Basic JavaScript",
        topics: [
            "VSCode",
            "Type system",
            "Loops",
            "Function",
            "Git",
            "Conditions",
            "Classes",
            "GitHub",
            "DOM",
        ],
    },
    {
        name: "Intermediate JavaScript",
        topics: [
            "VSCode",
            "NPM",
            "Bundlers",
            "Transpiling",
            "Git",
            "Promises",
            "AJAX",
            "GitHub",
        ],
    },
];

function allTopicsUnique(array) {
    return array.flatMap(course => course.topics)
    .filter((topic, index, array) => {
        // console.log("index:", index)
        // console.log("indexOf", array.indexOf(topic));
        // console.log("topic:", topic)
        return array.indexOf(topic) === index})
}
console.log("allTopicsUnique:", allTopicsUnique(courses))
