let count = 0;
document.getElementById('play-count').innerHTML = `Score=0`;

let i = 0;
let time = 1000;
let maxScore = 0;

function addInsect() {
  setTimeout(createInsect(), 1000);
}

function createInsect() {
  let position1 = Math.floor(Math.random() * 350) + 'px';
  let position2 = Math.floor(Math.random() * 1000) + 'px';

  let insect = document.createElement('div');
  insect.setAttribute('class', 'insect');
  insect.style.top = position1;
  insect.style.left = position2;
  insect.style.transform = `rotate(${Math.random() * 360}deg)`;
  insect.innerHTML = `<img src="bug.png">`;
  insect.addEventListener('click', removeInsect);
  document.getElementById('insect-container').appendChild(insect);

  if (i < 10) {
    time = 1000;
  } else {
    time = 700;
  }
  i += 1;
  if (sec == -1) {
    clearInterval(createInsect);
    alert(`당신의 점수는 ${count}점 입니다!\
    현재 최고 점수 : ${localStorage.getItem('maxScore')}`);

    if (count > localStorage.getItem('maxScore')) {
      localStorage.setItem('maxScore', count);
      alert('축하합니다! 최고기록 갱신!');
    }
    window.location.reload();
  } else {
    setTimeout(createInsect, time);
  }
}

function removeInsect() {
  this.classList.add('clicked');
  document.getElementById('play-count').innerHTML = `Score=${++count}`;
}

//timer
let sec = 5;

function addTimer() {
  let m = Math.floor(sec / 60);
  let s = sec % 60;
  m = m < 10 ? `0${m}` : m;
  s = s < 10 ? `0${s}` : s;
  document.getElementById('timer').innerHTML = `${m}:${s}`;

  sec--;
}

// start game
let audio = new Audio('sound.mp3');

function startGame() {
  audio.play();
  setInterval(addTimer, 1000);
  addInsect();
  document.getElementById('startBtn').style.display = 'none';
  document.getElementById('stopBtn').style.display = 'block';
}

//stop game
function stopGame() {
  pauseSound();
  alert('게임이 종료되었습니다. 확인을 누르시면 초기화면으로 돌아갑니다!');
  window.location.reload();
}

// play sound
function playSound() {
  audio.play();
}

// pause sound
function pauseSound() {
  audio.pause();
}
