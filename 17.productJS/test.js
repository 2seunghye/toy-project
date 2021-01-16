




function Goods() {
    //json 배열[{goodsId:goodsId, goodsNm:goodsNm, amt:amt},{...},{...}]
    this.arrAllGoods = new Array(); //상품 목록
    this.arrSelGoods = new Array(); //선택한 상품 목록
  
    var p = this;
  
    //상품 추가 시
    this.select = function (trgtGoodsId) {
      var selectedIndex = -1;
  
      //전체 목록 배열에서 검색하여 goodsId가 없다면 선택 목록에 push후 container안에 그려준다.
  
      //선택 목록에서 검색
      for (var i = 0; i < p.arrSelGoods.length; i++) {
        if (p.arrSelGoods[i].goodsId == trgtGoodsId) {
          selectedIndex = i;
          break;
        }
      }
  
      if (selectedIndex < 0) {
        //선택목록에 없을 경우 추가. 잇을경우 얼럿.
        //전체목록에서 선택 추가해줌.
        for (var j = 0; j < p.arrAllGoods.length; j++) {
          if (p.arrAllGoods[j].goodsId == trgtGoodsId) {
            p.arrSelGoods.push(p.arrAllGoods[j]);
            p.arrSelGoods[p.arrSelGoods.length - 1].cnt = 0; //무조건 개수 초기화
            p.appendChoiceDiv(p.arrAllGoods[j]);
            break;
          }
        }
      } else {
        alert('이미 추가한 상품입니다.');
      }
      p.afterProc();
    };
  
    //상품 제거 시
    this.deselect = function (trgtGoodsId) {
      var selectedIndex = -1;
  
      //배열에서 검색.
      for (var i = 0; i < p.arrSelGoods.length; i++) {
        if (p.arrSelGoods[i].goodsId == trgtGoodsId) {
          p.removeChoiceDiv(p.arrSelGoods[i]);
          p.arrSelGoods.splice(i, 1);
          break;
        }
      }
      p.afterProc();
    };
  
    this.appendChoiceDiv = function (prmtObj) {
      var innerHtml = '';
  
      innerHtml += '<div id="div_' + prmtObj.goodsId + '">';
      innerHtml += '<ul>';
      innerHtml += '	<li>' + prmtObj.goodsNm + '</li>';
      innerHtml += '	<li>' + prmtObj.goodsUnprc + '원</li>';
      innerHtml += '	<li><button type="button" id="" class="add" name="" onclick="goods.minus(\'' + prmtObj.goodsId + '\');">-</button></li>';
      innerHtml += '	<li>개수:<input type="text" id="input_cnt_' + prmtObj.goodsId + '" name="" value="0"/>';
      innerHtml += '	<li>가격:<input type="text" id="input_sumAmt_' + prmtObj.goodsId + '" name="" value="0"/>';
      innerHtml +=
        '	<li><button type="button" id="" class="remove" name="" onclick="goods.plus(\'' + prmtObj.goodsId + '\');">+</button></li>';
      innerHtml +=
        '	<li><button type="button" id="" class="remove" name="" onclick="goods.deselect(\'' + prmtObj.goodsId + '\');">제거</button></li>';
      innerHtml += '</ul>';
      innerHtml += '</div>';
      $('#container').append(innerHtml);
    };
  
    this.removeChoiceDiv = function (prmtObj) {
      $('#div_' + prmtObj.goodsId).remove();
    };
  
    this.plus = function (trgtGoodsId) {
      for (var i = 0; i < p.arrSelGoods.length; i++) {
        if (p.arrSelGoods[i].goodsId == trgtGoodsId) {
          p.arrSelGoods[i].cnt++;
          break;
        }
      }
  
      p.afterProc();
    };
  
    this.minus = function (trgtGoodsId) {
      for (var i = 0; i < p.arrSelGoods.length; i++) {
        if (p.arrSelGoods[i].goodsId == trgtGoodsId) {
          if (p.arrSelGoods[i].cnt == 0) break;
          p.arrSelGoods[i].cnt--;
          break;
        }
      }
  
      p.afterProc();
    };
  
    //계산 후처리.
    this.afterProc = function () {
      for (var i = 0; i < p.arrSelGoods.length; i++) {
        $('#input_cnt_' + p.arrSelGoods[i].goodsId).val(p.arrSelGoods[i].cnt);
        $('#input_sumAmt_' + p.arrSelGoods[i].goodsId).val(p.arrSelGoods[i].cnt * p.arrSelGoods[i].goodsUnprc);
      }
  
      var goodsTotAmt = 0;
      for (var i = 0; i < p.arrSelGoods.length; i++) {
        goodsTotAmt += p.arrSelGoods[i].cnt * p.arrSelGoods[i].goodsUnprc;
      }
      $('#goodsTotAmt').val(goodsTotAmt);
    };
  }
  
  var goods = new Goods();
  
  //jstl로 전체 상품 목록 미리 세팅
  goods.arrAllGoods.push({ goodsId: 'G010108001001001', goodsUnprc: 3500, goodsNm: '카페라떼', cnt: 0 });
  goods.arrAllGoods.push({ goodsId: 'G010108001001002', goodsUnprc: 3000, goodsNm: '바닐라라떼', cnt: 0 });
  goods.arrAllGoods.push({ goodsId: 'G010108002002001', goodsUnprc: 1500, goodsNm: '아메리카노', cnt: 0 });
  goods.arrAllGoods.push({ goodsId: 'G010108002002002', goodsUnprc: 1000, goodsNm: '자바칩프라푸치노', cnt: 0 });
  
  //jstl로 셀렉트 박스 옵션 채우기
  $('#selGoods').append('<option id="" value="G010108001001001">카페라떼:3500원</option>');
  $('#selGoods').append('<option id="" value="G010108001001002">바닐라라떼:3000원</option>');
  $('#selGoods').append('<option id="" value="G010108002002001">아메리카노:2500원</option>');
  $('#selGoods').append('<option id="" value="G010108002002002">자바칩프라푸치노:6000원</option>');
  
  $('#btnAddGoods').on('click', function () {
    //console.log($('#selGoods option:selected').val());
    goods.select($('#selGoods option:selected').val());
  });
  