const meals = new Array();

meals[0] = {
    strName: "해피치즈스마일(분식)",
    strInfo: "떠오르는 삼덕동 떡볶이 맛집!🌶",
    image: "./img/menu1.jpeg",
    strMenu: "떡볶이(₩4,500)\n돈가스 플레이트(₩12,000)",
    strAddress: "대구 중구 달구벌대로447길 50",
    strHours: "매일 11:30 - 21:30\n1월 1일 휴무"
}

meals[1] = {
    strName: "유이쯔(일식)",
    strInfo: "동성로 텐동 맛집!🍤",
    image: "./img/menu2.jpeg",
    strMenu: "텐동(₩9,000)/에비텐동(₩10,000)",
    strAddress: "대구 중구 중앙대로 376-20",
    strHours: "매일 11:30 - 21:00\n브레이크타임 15:30 - 17:00"
}

meals[2] = {
    strName: "미츠팡(요리주점)",
    strInfo: "분위기 좋고 음식도 맛있는 교동 맛집!🍻",
    image: "./img/menu3.jpeg",
    strMenu: "돼지찌개(₩23,000)\n꾸덕크림파스타(₩13,000)",
    strAddress: "대구 중구 동성로12길 21",
    strHours: "매일 18:00 - 02:00"
}

meals[3] = {
    strName: "오스테리아밀즈(양식)",
    strInfo: "냉파스타가 맛있는 맛집!\n색다른 메뉴가 끌린다면 추천해요👍",
    image: "./img/menu4.jpeg",
    strMenu: "카프레제 콜드 카펠리니(₩17,000)",
    strAddress: "대구 수성구 동원로1길 26",
    strHours: "매일 11:30 - 14:30 (런치)\n17:00 -21:00 (디너)"
}

meals[4] = {
    strName: "더부처스(고기요리)",
    strInfo: "다양한 숙성 소고기를 맛볼 수 있는\n퓨전 스테이크 하우스!🥩",
    image: "./img/menu5.jpeg",
    strMenu: "습식숙성 살치살(300g/₩29,000)",
    strAddress: "대구 중구 달구벌대로440길 9-18",
    strHours: "평일 17:00 - 01:00\n토요일 16:00 - 01:00\n일요일 16:00 - 24:00 (월 휴무)"
}

meals[5] = {
    strName: "Hash(양식)",
    strInfo: "파스타로 유명한 양식 핫플레이스!🍝",
    image: "./img/menu6.jpeg",
    strMenu: "목살 플레이트(₩16,000)\n소이목살 스파게티(₩11,500)",
    strAddress: "대구 중구 동성로 8-7",
    strHours: "매일 11:30 - 24:00"
}

meals[6] = {
    strName: "키스더쿡(양식)",
    strInfo: "분위기도 맛도 좋은 공평동 양식 레스토랑!✨",
    image: "./img/menu7.jpeg",
    strMenu: "비프 스테이크 샐러드(₩18,800)\n시금치 수란 리조또(₩14,800)",
    strAddress: "대구 중구 공평로 49",
    strHours: "매일 11:30 - 22:00\n브레이크타임 15:30 - 17:00"
}

meals[7] = {
    strName: "알로하돈부리(덮밥)",
    strInfo: "사케동이 맛있는 동성로 맛집!🍽",
    image: "./img/menu8.jpg",
    strMenu: "사케동(₩11,500)\n가츠동벤또(₩10,500)",
    strAddress: "대구 중구 동성로6길 58",
    strHours: "매일 12:00 - 21:00 / 수요일 휴무"
}


// 음식의 개수가 몇 개가 될지 모르니 변수를 따로 지정
const RESTAURANT_COUNT = meals.length;

function genRandom() {
    const number = Math.floor(Math.random() * RESTAURANT_COUNT);
    return number;
};

// 음식 이름 올리는 ...
function randomRecipe() {
    const number = genRandom();

    return meals[number];
}

function printMeal() {
    const selectedMeal = randomRecipe();
    const name = selectedMeal.strName;
    const info = selectedMeal.strInfo;
    const address = selectedMeal.strAddress;
    const img = selectedMeal.image;
    const menu = selectedMeal.strMenu;
    const hours = selectedMeal.strHours;

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



const createMeal = meal => {
    const ingredients = [];
    let i = 1;
    while(meal[`strIngredient${i}`]){
        ingredients.push(`${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`,);
       i++;
    }
 }