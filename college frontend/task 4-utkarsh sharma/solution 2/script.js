let count = 0;

document.getElementById('increase').addEventListener('click', () => {
  count++;
  updateCounter();
});

document.getElementById('decrease').addEventListener('click', () => {
  if (count > 0) { 
    count--;
  }
  updateCounter();
});

document.getElementById('reset').addEventListener('click', () => {
  count = 0;
  updateCounter();
});

function updateCounter() {
  document.getElementById('counter').innerText = count;
}