let sizeControlRef = document.querySelector('#font-size-control');
let textRef = document.querySelector('#text');

sizeControlRef.addEventListener('input', handleSizeControlAmount);

function handleSizeControlAmount(event) {
  let fontSizeAmount = '';
  fontSizeAmount = `${event.target.value}px`;
  textRef.style.fontSize = fontSizeAmount;
}
