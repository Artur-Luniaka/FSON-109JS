// Є масив об'єктів з популярними фільмами і форма пошуку за назвою фільму.
// 1. Зроби так, щоб при першому завантаженні сторінки користувач
// бачив весь перелік фільмів (назву, рік виробництва, рейтинг і країну виробник).
// Для рендеру розмітки використовуємо шаблонні рядки та метод insertAdjacentHTML.
// 2. Реалізуй пошук потрібного фільму за назвою. При кліку на кнопку "Пошук" у
// списку залишаються тільки ті фільми, котрі мають повне або часткове співпадіння
// за назвою фільму.
const popularMovies = [
  {
    title: "Avengers: Endgame",
    year: 2019,
    rating: 8.4,
    country: "USA"
  },
  {
    title: "Parasite",
    year: 2019,
    rating: 8.6,
    country: "South Korea"
  },
  {
    title: "Joker",
    year: 2019,
    rating: 8.5,
    country: "USA"
  },
  {
    title: "Spider-Man: Into the Spider-Verse",
    year: 2018,
    rating: 8.4,
    country: "USA"
  },
  {
    title: "The Irishman",
    year: 2019,
    rating: 7.9,
    country: "USA"
  },
  {
    title: "Knives Out",
    year: 2019,
    rating: 7.9,
    country: "USA"
  },
  {
    title: "Black Panther",
    year: 2018,
    rating: 7.3,
    country: "USA"
  },
  {
    title: "Mad Max: Fury Road",
    year: 2015,
    rating: 8.1,
    country: "Australia"
  },
  {
    title: "Mad Max: Fury Road",
    year: 2015,
    rating: 8.1,
    country: "Australia"
  }
];

const ul = document.querySelector("#movieList");
const liMarkup = popularMovies.map(({title, year, rating, country}) => 
  `<li>
    <p>Назва фільму: ${title}</p>
    <p>Рік виходу: ${year}</p>
    <p>Рейтинг: ${rating}</p>
    <p>Країна: ${country}</p>
    </li>`
).join("")

ul.insertAdjacentHTML("beforeend", liMarkup)

const form = document.querySelector("#searchForm")

const handleForm = (event) => {
  event.preventDefault();
  const inputValue = event.currentTarget.elements.searchInput.value.trim().toLowerCase();
  const filteredArray = popularMovies.filter(movie => movie.title.toLowerCase().includes(inputValue));
  const liMarkupFiltered = filteredArray.map(({title, year, rating, country}) => 
    `<li>
      <p>Назва фільму: ${title}</p>
      <p>Рік виходу: ${year}</p>
      <p>Рейтинг: ${rating}</p>
      <p>Країна: ${country}</p>
      </li>`
  ).join("")
  ul.innerHTML = "";
  ul.insertAdjacentHTML("beforeend", liMarkupFiltered);
  form.reset();
}

form.addEventListener('submit', handleForm);