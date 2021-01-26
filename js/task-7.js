const input = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

input.addEventListener('input', handleSizeControl);

function handleSizeControl({ target }) {
  text.style.fontSize = `${target.value}px`;
}
