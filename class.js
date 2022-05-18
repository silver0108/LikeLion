// 클래스
class Person {
  // 생성자
  constructor(name, age) {
    // this는 자기 자신(객체)를 가리킴
    this.name = name;
    this.age = age;
  }

  // 메서드
  speak() {
    console.log(`${this.name}입니다.`);
  }
}

// 객체
const soeun = new Person("김소은", 22);
// 해당 객체 필드 접근
console.log(soeun);
console.log(soeun.name, soeun.age);
// 해당 객체 메서드 접근
soeun.speak();


// Object
// object = {key:value}
// 두가지 방법으로 만들 수 있음
const obj1 = {};
const obj2 = new Object();
console.log(obj1, obj2);

const print = (person) => {
  console.log(person.name, person['age']);
}
const kimsoeun = { name: "kimsoeun", age: 22 };
print(kimsoeun);

// 추가도 가능
kimsoeun.hasJob = false;
console.log(kimsoeun);

// 키가 object 안에 있는지 확인 가능
console.log("name" in kimsoeun);
// 반복문으로도 가능
for (key in kimsoeun) {
  console.log(key);
}


// Object Clone
const user = { name: "soeun", age: 22 };
const user2 = user; // user에도 영향을 받음(같은 주소값을 참조하게 됨)
user2.age = 23;
console.log(user, user2);

const user3 = {};
Object.assign(user3, user);
user3.age = 22;
console.log(user, user3);

const user4 = { ...user };
user4.age = 24;
console.log(user, user4);

const arr = [1, 2, 3];
const arr2 = [...arr];
console.log(arr, arr2);
