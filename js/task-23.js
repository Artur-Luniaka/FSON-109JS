// * Якщо імейл і пароль користувача збігаються, при сабміті зберігай дані з форми
// * у локальне сховище і змінюй кнопку login на logout і роби поля введення
// * Недоступними для зміни.
// * При перезавантаженні сторінки, якщо користувач залогінений, ми повинні бачити logout-кнопку
// * та недоступні для зміни поля з даними користувача.
// * Клік по кнопці logout повертає все в початковий вигляд і видаляє дані користувача
// * З локального сховища.
// *
// * Якщо введені дані не збігаються з потрібними даними, викликати аlert і
// * повідомляти про помилку.

const user = {
    email: "user@vbj.com",
    password: "123",
}

const formEl = document.getElementById("login-form");
const userValue = JSON.parse(localStorage.getItem("userData"));
formEl.addEventListener("submit", handleSubmit);

function handleSubmit(evt) {
    evt.preventDefault();
    if (JSON.parse(localStorage.getItem("userData"))) {
        formEl.reset();
        formEl.elements.email.disabled = false;
        formEl.elements.password.disabled = false;
        formEl.elements.button.textContent = "Login";
        localStorage.removeItem("userData");
        return;
}
    if (formEl.elements.email.value.trim() !== user.email || formEl.elements.password.value.trim() !== user.password) {
        alert("Некоректно введені дані");
        return;
    }
    const dataUser = {};
    dataUser.email = formEl.elements.email.value.trim();
    dataUser.password = formEl.elements.password.value.trim();
    localStorage.setItem("userData", JSON.stringify(dataUser));
    formEl.elements.email.disabled = true;
    formEl.elements.password.disabled = true;
    formEl.elements.button.textContent = "Logout";
};

if (userValue) {
    formEl.elements.email.value = userValue.email;
    formEl.elements.password.value = userValue.password;
    formEl.elements.email.disabled = true;
    formEl.elements.password.disabled = true;
    formEl.elements.button.textContent = "Logout";
}