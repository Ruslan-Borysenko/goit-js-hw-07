// Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.
// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число. Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.
// Каждый созданный div:
// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.

const refs = {
  input: document.querySelector('#controls > input'),
  renderBtn: document.querySelector('button[data-action="render"]'),
  destroyBtn: document.querySelector('button[data-action="destroy"]'),
  boxContainer: document.querySelector('#boxes'),
};

const { input, renderBtn, destroyBtn, boxContainer } = refs;

// input.addEventListener('change', handleInputValue);
// renderBtn.addEventListener('click', () => createBoxes(amount));
renderBtn.addEventListener('click', createBoxes.bind(input));
destroyBtn.addEventListener('click', handleDestroy);

// let amount;

// function handleInputValue({ target }) {
//   amount = Number(target.value);
// }

function randomColor() {
  let color = Math.floor(Math.random() * Math.pow(256, 3)).toString(16);
  while (color.length < 6) {
    color = '0' + color;
  }
  return '#' + color;
}

function createBoxes() {
  let divSize = 30;
  const amount = this.value;
  const readyBoxes = [];
  for (let i = 0; i < amount; i += 1) {
    const div = document.createElement('div');
    div.style.height = `${divSize}px`;
    div.style.width = `${divSize}px`;
    div.style.backgroundColor = randomColor();
    divSize += 10;
    readyBoxes.push(div);
  }
  // const amount = [...new Array(Number(this.value))];
  // const readyBoxes = amount.map(item => {
  //   const div = document.createElement('div');
  //   div.style.height = `${divSize}px`;
  //   div.style.width = `${divSize}px`;
  //   div.style.backgroundColor = randomColor();
  //   divSize += 10;
  //   return div;
  // });
  boxContainer.append(...readyBoxes);
}

function handleDestroy() {
  boxContainer.textContent = '';
}
