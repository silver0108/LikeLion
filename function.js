// Function

// 함수 선언
// function addNum(a, b) {
//   return a + b;
// }
// console.log(addNum(1, 2));

// 함수 표현식
const addNum = function (a, b) {
  return a + b;
}
console.log(addNum(1, 2));


// scope

// let globalNumber = 2;
// function printNumber() {
//   let number = 1;
//   console.log(globalNumber, number);
// }
// printNumber();
// // console.log(globalNumber, number);


// Hoisting: 자바스크립트 엔진이 선언된 것을 제일 위로 올려주는 것
// 함수 표현식은 hoisting 불가능

// printNumber();
// function printNumber() {
//   let number = 1;
//   console.log(number);
// }


// Arrow Function
// retrun도 생략 가능

const printNumber = (a) => a;
console.log(printNumber(1));


// Callback 함수

function introduceSelf(firstName, lastName, callback) {
  let fullName = firstName + lastName;
  callback(fullName);
}

function sayHello(name) {
  console.log(`안녕하세요 제 이름은 ${name}입니다.`);
}

function sayBye(name) {
  console.log(`지금까지 ${name}이었습니다.`);
}

introduceSelf("김", "소은", sayHello);
introduceSelf("김", "소은", sayBye);