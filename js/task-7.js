let input = document.getElementById('font-size-control');
let text = document.getElementById('text');

input.addEventListener('input', handleSizeControl);

function handleSizeControl() {
  let amount = `${input.value}px`;
  text.style.fontSize = amount;
}
