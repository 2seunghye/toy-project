// 1. 1~10개는 1초에 하나씩 뜨게하기
// 2. 11~20개는 0.7초에 하나씩 뜨게하기
// 3. 21~30개는 0.5초에 하나씩 뜨게하기

// function add10Insect() {
//   let position = Math.floor(Math.random() * 300) + 'px';
//   document.getElementById('play-container').innerHTML += `<img src="bug.jpg" class="bug" id="bug">`;
//   let bug = document.getElementById(`bug`);
//   bug.style.top = position;
//   bug.style.left = position;
// }

// function add20Insect() {
//   for (let i = 10; i < 20; i++) {
//     setTimeout(function () {
//       let position = Math.floor(Math.random() * 300) + 'px';
//       document.getElementById('play-container').innerHTML += `<img src="bug.jpg" class="bug" id="bug_${i}">`;
//       let bug = document.getElementById(`bug_${i}`);
//       bug.style.top = position;
//       bug.style.left = position;
//     }, i * 500);
//   }
// }

// setInterval(add10Insect(), 1000);
// add20Insect();
var count = 0;

document.getElementById('play-count').innerHTML = `count=${count}`;

var i = 0;

let timerId = setTimeout(function tick() {
  let position1 = Math.floor(Math.random() * 300) + 'px';
  let position2 = Math.floor(Math.random() * 300) + 'px';

  const insect = document.createElement('div');
  insect.style.top = position1;
  insect.style.left = position2;
  insect.innerHTML = `<img src="bug.jpg">`;
  insect.addEventListener('click', removeInsect);

  document.getElementById('play-container').innerHTML += `<img src="bug.jpg" class="bug" id="bug${i}" onclick="handleClick()">`;
  let bug = document.getElementById(`bug${i}`);
  bug.style.top = position1;
  bug.style.left = position2;

  let time;
  if (i < 10) {
    time = 2000;
  } else {
    time = 4000;
  }
  timerId = setTimeout(tick, time);
  i += 1;

  if (i == 20) {
    clearInterval(timerId);
    alert('Game Over');
  }
}, 1000);

// let CLICKED_CLASS = 'clicked';

// function handleClick() {
//   document.querySelector(`#bug${i}`).classList.add(CLICKED_CLASS);
// }
