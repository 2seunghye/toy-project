var week_days = ['월', '화', '수', '목', '금', '토', '일'];
var months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

//월 컨테이너
function add_months_container() {
  for (let i = 0; i < months.length; i++) {
    // 월 컨테이너 추가
    var months_container = document.createElement('div');
    months_container.setAttribute('class', 'months');
    months_container.setAttribute('id', `${i + 1}month`);
    document.getElementById(`${i + 1}month`);
    months_container.innerHTML += `<h3>${months[i]}월</h3>`;
    document.getElementById('calendar').appendChild(months_container);

    // 요일 컨테이너 추가
    var week_days_container = document.createElement('div');
    week_days_container.setAttribute('id', 'week_days');

    for (let i = 0; i < week_days.length; i++) {
      week_days_container.innerHTML += `<div class="week_days">${week_days[i]}</div>`;
    }

    document.getElementById(`${i + 1}month`).appendChild(week_days_container);

    // 일 컨테이너 추가

    var days_container = document.createElement('div');
    days_container.setAttribute('class', 'days_container');
    days_container.setAttribute('id', `${i + 1}month_days`);
    document.getElementById(`${i + 1}month`).appendChild(days_container);

    // 일 컨테이너
    let date = new Date();
    date.setMonth(i);
    date.setDate(1);

    let day = date.getDay(); // 현재 달의 1일 시작요일
    let lastDate = new Date(2020, i + 1, 0).getDate(); // 현재 달의 마지막 날짜

    for (let j = 0; j < lastDate + day; j++) {
      if (j % 7 == 0) {
        document.getElementById(`${i + 1}month_days`).innerHTML += `<br>`;
      }

      var temp;
      if (j < day) {
        temp = `<div class="days"><span></span></div>`;
        document.getElementById(`${i + 1}month_days`).innerHTML += temp;
      } else {
        temp = `<div class="days"><span class="circle">${j - day + 1}</span></div>`;
        document.getElementById(`${i + 1}month_days`).innerHTML += temp;
      }
    }
  }
}

function addID() {
  var a = document.querySelectorAll('.circle');
  for (i = 0; i < a.length; i++) {
    document.getElementsByClassName('circle')[i].id = `${i}`;
  }
}

function init() {
  add_months_container();
  addID();
}

init();
