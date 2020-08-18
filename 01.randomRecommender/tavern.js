const tarverns = new Array();

tarverns[0] = {
    strName: "주하",
    strInfo: "분위기 좋은 술집,\n편하게 와인을 즐길 수 있는 곳🍷",
    image: "./img/tar1.jpeg",
    strMenu: "스테이크(₩30,000)\n샹그리아(₩28,000)",
    strAddress: "대구 중구 동성로3길 12-3",
    strHours: "화,수,목 18:00 - 02:00\n 금,토,일 18:00 - 03:00/월 휴무"
}

tarverns[1] = {
    strName: "밀교",
    strInfo: "동성로의 숨어있는 공간, 분위기 최고👍",
    image: "./img/tar2.jpeg",
    strMenu: "베이컨 매콤 크림 떡볶이(₩18,000)\n타다끼와 숙성연어(₩22,000)",
    strAddress: "대구 중구 동성로1길 59-2",
    strHours: "매일 18:00 - 03:00\n평일은 02:00 마감"
}

tarverns[2] = {
    strName: "삼덕관",
    strInfo: "분위기 좋고, 전골 안주가 맛있어요\n페퍼로니 감자전도 강추👍",
    image: "./img/tar3.jpeg",
    strMenu: "한국전골(₩19,000)\n페퍼로니 감자전(₩15,000)",
    strAddress: "대구 중구 동성로4길 21",
    strHours: "매일 18:00 - 03:00"
}

tarverns[3] = {
    strName: "삼덕가든",
    strInfo: "야외테라스가 있는 분위기 좋은 한식술집🥘",
    image: "./img/tar4.jpeg",
    strMenu: "동파삼겹수육(₩22,000)\n감바스 알 아히요(₩18,000)",
    strAddress: "대구 중구 공평로 21",
    strHours: "평일 17:30 - 03:00\n주말 17:30 - 04:00"
}

tarverns[4] = {
    strName: "취하는밤",
    strInfo: "맛있는 요리와 전통주 혹은\n소주 한 잔 즐길 수 있는 곳🍶",
    image: "./img/tar5.jpeg",
    strMenu: "통삼겹수비드구이(₩23,000)",
    strAddress: "대구 중구 동성로3길 32-33",
    strHours: "매일 18:00 - 03:00"
}

tarverns[5] = {
    strName: "소담히",
    strInfo: "동성로 분위기 좋은 연어&육회 맛집🐟",
    image: "./img/tar6.jpeg",
    strMenu: "유쾌한어장관리(₩29,000)",
    strAddress: "대구 중구 동성로4길 6",
    strHours: "평일 18:00 - 03:00\n주말 18:00 - 04:00"
}

tarverns[6] = {
    strName: "베이식",
    strInfo: "동성로 분위기 좋은 전골 맛집!🥘",
    image: "./img/tar7.jpeg",
    strMenu: "소고기모듬전골(₩19,900)\n아롱사태무침(₩20,000)",
    strAddress: "대구 중구 동성로4길 5",
    strHours: "평일 17:30 - 03:00\n주말 17:30-04:00"
}

tarverns[7] = {
    strName: "위(WE)",
    strInfo: "대창전골이 맛있는 신상술집🥘",
    image: "./img/tar8.jpeg",
    strMenu: "대창전골(₩22,000)\n대창순대볶음(₩20,000)",
    strAddress: "대구 중구 동성로4길 13-1",
    strHours: "매일 17:30 - 03:00\n금,토는 04:00 마감"
}


// 음식의 개수가 몇 개가 될지 모르니 변수를 따로 지정
const TARVERN_COUNT = tarverns.length;

function genRandom() {
    const number = Math.floor(Math.random() * TARVERN_COUNT);
    return number;
};

// 음식 이름 올리는 ...
function randomTarvern() {
    const number = genRandom();

    return tarverns[number];
}

function printTarvern() {
    const selectedTarvern = randomTarvern();
    const name = selectedTarvern.strName;
    const info = selectedTarvern.strInfo;
    const address = selectedTarvern.strAddress;
    const img = selectedTarvern.image;
    const menu = selectedTarvern.strMenu;
    const hours = selectedTarvern.strHours;

    document.getElementById("img").innerHTML = `<img src="${img}">`
    document.getElementById("name").innerText = `추천식당 : ${name}`
    document.getElementById("info").innerText = `${info}`
    document.getElementById("address").innerText = `주소 : ${address}`
    document.getElementById("hours").innerText = `영업시간 : ${hours}`
    document.getElementById("menu").innerText = `추천메뉴 : ${menu}`

    document.getElementById("name").style.padding = "10px 0 20px 0"
    document.getElementById("info").style.padding = "0 0 10px 0"
    document.getElementById("address").style.padding = "0 0 10px 0"
    document.getElementById("hours").style.padding = "0 0 10px 0"
    document.getElementById("menu").style.padding = "0 0 10px 0"
};
