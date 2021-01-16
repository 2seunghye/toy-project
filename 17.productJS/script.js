function createSelBox() {
  let goodsBox = document.getElementById('goodsBox');
  goodsBox.innerHTML += `<select id="selGoods" name="selGoods" style="height:40px;">`;

  let selBox = document.getElementById('selGoods');

  selBox.addEventListener('change', function () {
    let selGoodsList = document.getElementById('selGoodsList');

    for (let i = 0; i < allGoodsArr.length; i++) {}

    selGoodsList.innerHTML += `- ${this.options[this.selectedIndex].text}<br>`;
  });

  // 셀렉트 박스 옵션 채우기
  document.getElementById('selGoods').innerHTML += `<option id="" value="G001">아메리카노:2500원</option>`;
  document.getElementById('selGoods').innerHTML += `<option id="" value="G002">카페라떼:3000원</option>`;
  document.getElementById('selGoods').innerHTML += `<option id="" value="G003">레몬에이드:3500원</option>`;
  document.getElementById('selGoods').innerHTML += `<option id="" value="G004">초코라떼:2700원</option>`;
}

createSelBox();

// 상품 배열 만들기
let allGoodsArr = new Array(); // 모든 상품
let selGoodsArr = new Array(); // 선택한 상품

function addGoodsArr() {
  allGoodsArr.push({
    goodsName: '아메리카노',
    goodsId: 'G001',
    goodsPrice: 2500,
  });
  allGoodsArr.push({
    goodsName: '카페라떼',
    goodsId: 'G002',
    goodsPrice: 3000,
  });
  allGoodsArr.push({
    goodsName: '레몬에이드',
    goodsId: 'G003',
    goodsPrice: 3500,
  });
  allGoodsArr.push({
    goodsName: '초코라떼',
    goodsId: 'G004',
    goodsPrice: 2700,
  });
}

addGoodsArr();
