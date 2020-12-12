// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.

// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.

let input = document.getElementById('validation-input');
input.addEventListener('blur', () => {
  let setedLength = Object.values(input.dataset);
  let correctLength = Number(setedLength.join());
  let actualLength = input.value.length;

  if (actualLength === correctLength) {
    input.classList.add('valid');
  } else {
    input.classList.add('invalid');
  }
});
