// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.

// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.

const inputRef = document.querySelector('#validation-input');
inputRef.addEventListener('blur', isValid);

function isValid({ target }) {
  const mustLength = Number(target.dataset.length);
  const actualLength = target.value.length;
  const validation = actualLength === mustLength ? 'valid' : 'invalid';

  // target.classList = '';

  target.classList.contains('valid')
    ? target.classList.remove('valid')
    : target.classList.remove('invalid');

  // target.classList.remove('valid');
  // target.classList.remove('invalid');
  target.classList.add(validation);
}
