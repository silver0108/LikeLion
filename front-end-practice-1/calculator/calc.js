// 입력 문자를 뒤에 붙여줌
function addOutput(num) {
  var save = document.getElementById("save");
  save.value = save.value + num;
}

// 계산
function calculate() {
  var save = document.getElementById("save");
  var result = eval(save.value); // 계산
  var displayResult = document.getElementById("result");
  displayResult.value = result;
}

// 입력 및 출력 초기화
function reset() {
  var save = document.getElementById("save");
  var result = document.getElementById("result");
  save.value = "";
  result.value = "";
}

// 하나씩 삭제
function del() {
  var save = document.getElementById("save");
  var substring = save.value.substring(0, save.value.length - 1); // substring
  save.value = substring;
}