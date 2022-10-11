const test1 = document.querySelector('.test1');
const compBautton = test1.querySelector('.compat');
const IMTButton = test1.querySelector('.IMT');
const yearButton = test1.querySelector('.year');
const dinnerButton = test1.querySelector('.dinner');

compBautton.addEventListener('click', compatibility);
IMTButton.addEventListener('click', IMT);
yearButton.addEventListener('click', yearFunc);
dinnerButton.addEventListener('click', dinner);

function compatibility() {

    var firstName = prompt("Его имя");
    var secondName = prompt("Её имя");
    alert(`Совместимость: ${firstName} и ${secondName} ` + Math.floor(Math.random() * 100) + "%")
}

function IMT() {

    var high = prompt("Рост");
    var weight = prompt("Вес");

    imtRes = weight / Math.pow(high, 2)

    if (imtRes <= 18.5)
        alert("Недостаток веса");
    if (imtRes <= 25 && imtRes > 18.5)
        alert("Нормальный вес");
    if (imtRes <= 30 && imtRes > 25)
        alert("У вас излишек веса");
    if (imtRes > 30)
        alert("Ожирение");
}

function yearFunc() {

    var year = prompt("Введите год");

    if (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)) {
        alert("Високосный год");
    }
    else {
        alert("Не является високосным");
    }
}

function dinner() {

    var size = prompt("Введите количество человек");
    let choose = new Array();
    for (i = 0; i < size; ++i) {
        var person = prompt(`Введите имя ${i + 1}`);
        choose[i] = person;
    }
    alert("Ужин оплачивает: " + choose[Math.floor(Math.random() * size)]);
}