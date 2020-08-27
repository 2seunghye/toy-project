const moodBtnList = document.querySelectorAll('.mood');

let selectedMoodBtn = '';
let selectedCircleBtnList = {};

function initMoodsBtnList(){
  moodBtnList.forEach((moodBtn) => {
    moodBtn.addEventListener('click', () => moodBtnClick(moodBtn));
  });
}

function moodBtnClick(moodBtn){
  if (selectedMoodBtn == moodBtn){
    selectedMoodBtn.classList.remove('clicked')
    selectedMoodBtn = '';
    return;
  }
  
  if (selectedMoodBtn != '')
    selectedMoodBtn.classList.remove('clicked')
  
  selectedMoodBtn = moodBtn;
  selectedMoodBtn.classList.add('clicked')
}

function initCircleBtnList(){
  const circleBtnList = document.querySelectorAll('.circle');
  
  circleBtnList.forEach((circleBtn) => {
    circleBtn.addEventListener('click', () => circleBtnClick(circleBtn));
  });
}

function circleBtnClick(circleBtn){
  var previousSelectedMood = '';
  
  if (circleBtn.id in selectedCircleBtnList){
    previousSelectedMood = selectedCircleBtnList[circleBtn.id];

    circleBtn.classList.remove(previousSelectedMood)
    delete selectedCircleBtnList[circleBtn.id];
  }

  var isSelectedMoodBtn = selectedMoodBtn != '';
  var isDifferentOfPreviousSelctedMood = previousSelectedMood != selectedMoodBtn.id;

  if (isSelectedMoodBtn && isDifferentOfPreviousSelctedMood){
    circleBtn.classList.add(selectedMoodBtn.id);
    selectedCircleBtnList[circleBtn.id] = selectedMoodBtn.id;
  }
}

function saveMoodListAtLocalStorage() {
  localStorage.setItem('moodList', JSON.stringify(selectedCircleBtnList));
}

function load() {
  const moodList = JSON.parse(localStorage.getItem(`moodList`));

  for (var key in moodList){
    selectedCircleBtnList[key] = moodList[key];
    document.getElementById(key).classList.add(selectedCircleBtnList[key]);
  }
}

initMoodsBtnList();
initCircleBtnList();

load();

window.onunload = () => {
  save();
}

