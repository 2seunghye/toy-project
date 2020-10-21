var price1 = 3000;
var price2 = 6000;
var price3 = 3000;

var result = price1 + price2 + price3 < 10000; // true

result = result ? '돈 관리 잘 했어요!' : price1 + price2 + price3 - 10000 + '원 초과';
document.write(result);
