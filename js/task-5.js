// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна отображаться строка 'незнакомец'.

// const input = document.getElementById('name-input');
// input.oninput = function changeText() {
//   document.getElementById('name-output').innerHTML = input.value;
// };

const textRef = document.getElementById('name-input');
const nameOutput = document.getElementById('name-output');

textRef.addEventListener('input', changeText);

function changeText(e) {
  console.log(e.target.value);
  nameOutput.textContent = e.target.value;
}
