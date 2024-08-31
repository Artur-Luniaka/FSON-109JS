// При натисканні на кнопку "Приховати" потрібно введені користувачем
// символи в інпут відображати у вигляді крапок замість звичайного
// тексту, а також змінити назву кнопки на "Показати", при повторному
// натисканні знову будемо відображати символи, а назва кнопки зміниться
// на "Приховати".

const inputEl = document.querySelector(`#passwordInput`);
const btnEl = document.querySelector(`#passwordButton`);
console.dir(btnEl);

btnEl.addEventListener(`click`, handleClick);

function handleClick() {
    // if (inputEl.value.trim() === ``) {
    //     btnEl.disabled = true;
    //     return;
    // }
    btnEl.disabled = false;
    if (inputEl.type === "text" && inputEl.value.trim() !== ``) {
        inputEl.type = "password";
        btnEl.textContent = "Показати";
    } else {
        inputEl.type = "text";
        btnEl.textContent = "Приховати";
    }
}