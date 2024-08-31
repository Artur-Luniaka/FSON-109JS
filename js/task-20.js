// При кліку на кнопку "Filter" потрібно видалити з списку позначені елементи.


const form = document.querySelector(".checkboxForm");

form.addEventListener("submit", handleSubmit)

const checkBoxList = document.querySelector(".checkboxList");

function handleSubmit(evt) {
    evt.preventDefault();
    const checkBox = document.querySelectorAll(".checkboxWrapper");

    const filterList = [...checkBox].filter(item => !item.lastElementChild.checked); 
    // filterList.forEach(item => item.remove());
    checkBoxList.innerHTML = "";
    checkBoxList.append(...filterList);
}