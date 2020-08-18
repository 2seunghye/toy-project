const cafes = new Array();

cafes[0] = {
    strName: "스토브",
    strInfo: "치즈 케이크&스누피 와플이 유명한 동성로 카페🧇",
    image: "./img/cafe1.jpeg",
    strMenu: "제리치즈케이크(₩7,000)\n스누피와플(₩7,500)",
    strAddress: "대구 중구 동성로2길 12-34",
    strHours: "매일 12:00 - 22:30"
}

cafes[1] = {
    strName: "슬로우 터틀",
    strInfo: "동성로 크로플 맛집, 슬로우 터틀🐢",
    image: "./img/cafe2.jpeg",
    strMenu: "생딸기 아이스크림 와플(₩15,800)\n생딸기 케이크(₩6,500)",
    strAddress: "대구 중구 동성로2길 18-14",
    strHours: "매일 11:00 - 22:30"
}

cafes[2] = {
    strName: "딜리저트",
    strInfo: "딸기 홍콩와플이 유명한 삼덕동 카페!🍓",
    image: "./img/cafe3.jpeg",
    strMenu: "홍콩와플(₩13,000)",
    strAddress: "대구 중구 공평로 26-9",
    strHours: "매일 12:00 - 22:00\n화요일 정기휴무"
}

cafes[3] = {
    strName: "스코너리",
    strInfo: "스콘이 맛있는 예쁜 동성로 카페!☕️",
    image: "./img/cafe4.jpeg",
    strMenu: "버터 스콘(크림+잼)(₩4,500)\n초코칩 스콘(₩3,500)",
    strAddress: "대구 중구 동성로3길 28-1",
    strHours: "매일 12:00 - 22:00"
}

cafes[4] = {
    strName: "혜밀턴",
    strInfo: "핸드드립 전문! 아늑한 주택개조 카페🏠",
    image: "./img/cafe5.jpeg",
    strMenu: "필터커피(₩5,000)",
    strAddress: "대구 중구 달구벌대로445길 44",
    strHours: "매일 12:00 - 23:00"
}

cafes[5] = {
    strName: "아파트먼트",
    strInfo: "바쁜 일상, 따뜻한 아침 식사를 주제로 한\n건강한 브런치 카페🥗",
    image: "./img/cafe6.jpeg",
    strMenu: "바스켓 팬케이크 브랙퍼스트(₩9,800)\n삭슈카(1~2인 ₩7,800)",
    strAddress: "대구 중구 국채보상로 532",
    strHours: "평일 10:30 - 20:30\n주말 09:00 - 20:00"
}

cafes[6] = {
    strName: "루미에르",
    strInfo: "마카롱, 케이크, 베이킹 디저트와\n다양한 음료를 즐길 수 있는 카페🧁",
    image: "./img/cafe7.jpeg",
    strMenu: "브레베(₩5,500)\n레드벨벳 스무디(₩5,800)",
    strAddress: "대구 중구 봉산문화길 80",
    strHours: "매일 12:00 - 21:00\n금,토 12:00-22:00 / 월요일 휴무"
}

cafes[7] = {
    strName: "괜스레",
    strInfo: "샌드위치가 맛있는 삼덕동 브런치 카페🥪",
    image: "./img/cafe8.jpeg",
    strMenu: "사과브리 샌드위치(₩14,000)\n감자 스프(₩6,000)",
    strAddress: "대구 중구 공평로 26-1",
    strHours: "매일 11:00 - 22:00"
}


// 음식의 개수가 몇 개가 될지 모르니 변수를 따로 지정
const CAFE_COUNT = cafes.length;

function genRandom() {
    const number = Math.floor(Math.random() * CAFE_COUNT);
    return number;
};

// 음식 이름 올리는 ...
function randomCafe() {
    const number = genRandom();

    return cafes[number];
}

function printCafe() {
    const selectedCafe = randomCafe();
    const name = selectedCafe.strName;
    const info = selectedCafe.strInfo;
    const address = selectedCafe.strAddress;
    const img = selectedCafe.image;
    const menu = selectedCafe.strMenu;
    const hours = selectedCafe.strHours;

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
