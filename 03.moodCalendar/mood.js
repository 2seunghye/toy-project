const moods = document.querySelectorAll('.mood');
let defaultColor = 'rgb(207, 207, 207)';
let activeColor = '';

moods.forEach((mood) => {
  mood.addEventListener('click', () => {
    // if is already selected, deselect it
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
