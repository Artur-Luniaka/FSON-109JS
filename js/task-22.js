// Додай функціонал зміни теми при натисканні(подія change) на чекбокс
// #theme-switch-toggle у тулбарі.
// За замовчуванням тема світла.
// При зміні теми необхідно додавати на елемент body клас light-theme або dark-theme.
// Вибрана тема повинна зберігатись між перезавантаженнями сторінки. 
// Для зберігання теми використовуй localStorage.
// Якщо при завантаженні сторінки тема темна, не забудь поставити властивість checked 
// у чекбоксу #theme -switch-toggle у true, щоб повзунок зрушив у правильне положення.
// Для зручності зберігання списку використовуй такий перелік.

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const themeInput = document.querySelector('.theme-switch__toggle');
const bodyColor = document.querySelector('body');

const checkLs = localStorage.getItem('theme');
if (checkLs) {
    bodyColor.classList.add(checkLs);
} else {
    bodyColor.classList.add('light-theme');
};

if (checkLs === 'dark-theme') {
    themeInput.checked = true;
};


const handleColor = (event) => {
    event.currentTarget;
    if (event.currentTarget.checked) {
        bodyColor.classList.remove('light-theme');
        bodyColor.classList.add(Theme.DARK);
        localStorage.setItem('theme', Theme.DARK)
    } else {
        bodyColor.classList.remove(Theme.DARK);
        bodyColor.classList.add('light-theme');
        localStorage.setItem('theme', 'light-theme')
    }
};

themeInput.addEventListener('change', handleColor);




