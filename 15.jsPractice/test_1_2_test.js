var num1 = 1200;
var num2 = 1300;
var num3 = 1000;
var num4 = prompt('4분기 판매량을 입력하세요', '0');

var result = num4 >= (num1 + num2 + num3) / 3; //true

result = result ? '판매량이 평균 이상입니다.' : '판매량이 평균 미달입니다.';

document.write(result);
