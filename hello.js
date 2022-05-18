console.log("hello world");

// 변수의 자료형을 선언하지 않아도 작동
for (var i = 0; i <= 10; i++) {
  console.log(i);
}


// 배열
var a = [1, 2, 3];
console.log(a);

a.push(4); // 맨 뒤의 값 삽입
console.log(a);
a.unshift(0); // 맨 앞의 값 삽입
console.log(a);

a.pop(); // 맨 뒤의 값 삭제
console.log(a);
a.shift(); // 맨 앞의 값 삭제
console.log(a);

// splice(인덱스 번호, 삭제할 개수, 수정된 값)
a.splice(0, 1); // 값 2개 입력: 삭제
console.log(a);
a.splice(1, 0, 5); // 값 3개: 수정 및 삽입
console.log(a);


// 정렬
var b = [12, 10, 9, 121, 34];
console.log(b);

// sort는 값을 문자로 치환 후, 사전 오름차순으로 정렬
// 익명함수를 이용하면 숫자 순으로 정렬 가능
b.sort( // 오름차순
  (a, b) => a - b // 차이가 0보다 크면 a, b의 순서를 바꿈
);
console.log(b);

b.sort( // 내림차순
  (a, b) => b - a // 차이가 0보다 크면 a, b의 순서를 바꿈
);
console.log(b);