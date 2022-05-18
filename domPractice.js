// HTML 태그 가져오기
console.log(document.getElementById("ten").textContent);
console.log(document.getElementsByClassName("a")[0].textContent);
console.log(document.getElementsByTagName("div")[0].textContent);

let ten = document.querySelector("#ten");
let div = document.querySelectorAll("div");
console.log("queryselector", ten);
console.log("queryselector", div);


// DOM 접근하기
ten.textContent = "안녕하세요~"; // 텍스트 변경 가능
ten.style.backgroundColor = "red"; // 스타일 변경 가능  
ten.innerHTML = '<h1>안녕하세요!</h1>'; // 태그 넣기 가능

let lion = document.querySelector(".a #b");
lion.style.backgroundColor = "yellow";


// Event

// 태그 만들기
let new_button = document.createElement('button'); // 버튼을 DOM으로 만듦
new_button.innerText = '밤낮 변경'; // 텍스트
new_button.value = 0;

// new_button.onclick = (e) => { // 클릭 이벤트 (매개변수 e(event 객체))
//   let button = e.target;

//   if (button.value == 1) { // '===' 은 타입과 값이 같다, '=='은 값만 같다
//     document.body.style.backgroundColor = "white";
//     button.value = 0;
//   } else {
//     button.value = 1;
//     document.body.style.backgroundColor = "black";
//   }
// };

new_button.addEventListener('click', (e) => {
  let button = e.target;
  if (button.value == 1) { // '===' 은 타입과 값이 같다, '=='은 값만 같다
    document.body.style.backgroundColor = "white";
    button.value = 0;
    alert("낮이다!")
  } else {
    button.value = 1;
    document.body.style.backgroundColor = "black";
    alert("밤이다!")
  }
}) // addEventLister(이벤트, 콜백함수)
document.body.append(new_button);
