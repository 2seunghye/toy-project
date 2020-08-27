const circles = document.querySelectorAll('.circle');

document.getElementById(`${i}`).addEventListener('click', function () {
  document.getElementById(`${i}`).style.backgroundColor = activeColor;
  localStorage.setItem(`background${i}`, activeColor);
});

function init() {
  for (let i = 0; i < circles.length; i++) {
    document.getElementById(`${i}`).style.backgroundColor = localStorage.getItem('background');
  }
}

init();

localStorage.setItem('background', activeColor);
