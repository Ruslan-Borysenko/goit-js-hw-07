// Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.
// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число. Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.
// Каждый созданный div:
// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.

let amount;
let inputRef = document.querySelector('#controls > input');
let renderBtnRef = document.querySelector('button[data-action="render"]');
let destroyBtnRef = document.querySelector('button[data-action="destroy"]');
let boxContainerRef = document.querySelector('#boxes');

inputRef.addEventListener('change', handleInputValue);
renderBtnRef.addEventListener('click', handleRender);
destroyBtnRef.addEventListener('click', handleDestroy);

function handleInputValue(event) {
  const inputVal = event.target.value;
  amount = Number(inputVal);
}

function randomColor() {
  let color = Math.floor(Math.random() * Math.pow(256, 3)).toString(16);
  while (color.length < 6) {
    color = '0' + color;
  }
  let finalColor = '#' + color;
  return finalColor;
}

const createBoxes = function (amount) {
  let divSize = 30;
  for (let i = 0; i < amount; i += 1) {
    let div = document.createElement('div');
    div.style.height = `${divSize}px`;
    div.style.width = `${divSize}px`;
    div.style.backgroundColor = randomColor();
    divSize += 10;
    boxContainerRef.appendChild(div);
  }
};

function handleRender() {
  createBoxes(amount);
}

function handleDestroy() {
  boxContainerRef.textContent = '';
  // const arrayChild = boxContainerRef.childNodes;
  // console.dir(arrayChild);
  // arrayChild.forEach(child => child.remove());
  // while (arrayChild.length) {
  //   arrayChild[0].remove();
  // }
  // for (let i = 0; i < arrayChild.length; i += 1) {
  //   arrayChild[i].remove();
  //   i -= 1;
  // }
}
