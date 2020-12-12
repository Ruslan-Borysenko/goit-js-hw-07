// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна отображаться строка 'незнакомец'.

const input = document.getElementById('name-input');
input.oninput = function changeText() {
  document.getElementById('name-output').innerHTML = input.value;
};
