const moods = document.querySelectorAll('.mood');
let defaultColor = 'rgb(207, 207, 207)';
let activeColor = '';

moods.forEach((mood) => {
  mood.addEventListener('click', () => {
    if (mood.classList.contains('clicked')) {
      mood.classList.remove('clicked');
      activeColor = defaultColor;
    } else {
      moods.forEach((mood) => {
        mood.classList.remove('clicked');
      });
      mood.classList.add('clicked');
      activeColor = getComputedStyle(mood).getPropertyValue('background-color');
    }
  });
});

const circles = document.querySelectorAll('.circle');
circles.forEach((circle) => {
  circle.addEventListener('click', () => {
    circle.style.backgroundColor = activeColor;
  });
});

function save() {
  for (let i = 0; i < circles.length; i++) {
    document.getElementById(`${i}`).addEventListener('click', () => {
      localStorage.setItem(`bgcolor${i}`, activeColor);
    });
  }
}

function load() {
  for (let i = 0; i < circles.length; i++) {
    document.getElementById(`${i}`).style.backgroundColor = localStorage.getItem(`bgcolor${i}`);
  }
}

load();
save();
