var week_days = ['월', '화', '수', '목', '금', '토', '일'];
var months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

function add_months_container() {
    for (var month of months){
        makeMonthsContainer(month);
        makeWeekDaysContainer(month);
        makeDaysContainer(month);
        makeDays(month);
    }
}

function makeMonthsContainer(month){
    var months_container = document.createElement('div');
    months_container.setAttribute('class', 'months');
    months_container.setAttribute('id', `${month}month`);

    months_container.innerHTML += `<h3>${month}월</h3>`;

    document.getElementById('calendar').appendChild(months_container);
}

function makeWeekDaysContainer(month){
    var week_days_container = document.createElement('div');
    week_days_container.setAttribute('id', 'week_days');

    for (var week_day of week_days){
        week_days_container.innerHTML += `<div class="week_days">${week_day}</div>`;
    }

    document.getElementById(`${month}month`).appendChild(week_days_container);
}

function makeDaysContainer(month){
    var days_container = document.createElement('div');
    days_container.setAttribute('class', 'days_container');
    days_container.setAttribute('id', `${month}month_days`);

    document.getElementById(`${month}month`).appendChild(days_container);
}

function makeDays(month){
    var date = new Date(2020, month-1, 1);
    var emptySpace = date.getDay(); // 현재 달의 1일 시작요일

    var maxDate = new Date(2020, month, 0).getDate(); // 현재 달의 마지막 날짜

    for (var i = 0; i < maxDate + emptySpace; i++) {
        var day = i - emptySpace + 1;

        const month_days = document.getElementById(`${month}month_days`);

        var circle;
        if (i < emptySpace)
            circle = `<div class="days"><span class="circle empty"></span></div>`;
        else
            circle = `<div class="days"><span class="circle" id="${month}-${day}">${day}</span></div>`;

        month_days.innerHTML += circle;

        if (i % 7 == 6) {
            month_days.innerHTML += `<br>`;
        }
    }
}

add_months_container();