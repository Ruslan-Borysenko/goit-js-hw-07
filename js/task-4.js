// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

let counterValue = 0; // змінна, для збереження значення лічильника
let value = document.getElementById('value'); // елемент, який служить для виводу даних

const decrementBtn = document.getElementById('decrementBtn'); // кнопка з функцією віднімання
decrementBtn.onclick = function decrement() {
  counterValue--;
  value.innerHTML = counterValue;
};

const incrementBtn = document.getElementById('incrementBtn'); // кнопка з функцією додавання
incrementBtn.onclick = function increment() {
  counterValue++;
  value.innerHTML = counterValue;
};
