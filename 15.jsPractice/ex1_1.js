// 적정체중 = (본인신장 - 100)*0.9

var name = prompt('당신의 이름을 입력해주세요', '');
var height = prompt('당신의 신장을 입력해주세요', '0');
var weight = prompt('당신의 몸무게를 입력해주세요', '0');

var normal_w = (height - 100) * 0.9; // 평균 체중

var result = weight >= normal_w - 5 && weight <= normal_w + 5;

result = result ? '적정 체중 입니다.' : '적정 체중이 아닙니다.';

document.write(`${name} 님은 ${result}`);
