let currentTempC = 22;
currentTempC = 22.5;

// let targetTempC; //undefined
let targetTempC, room1 = "conference_room_a", room2 = "lobby";
const ROOM_TEMP_C = 21.5, MAX_TEMP_C = 30;

// 3.5 원시타입
// immutable 
// 숫자, 문자열, 불리언, null, undefined, 심볼

//3.6 숫자 : 일반적으로 숫자는 더블 형식으로 저장됨. double precision
let count = 10;
const blue = 0x0000ff; //16진수
const umask = 0o0022; //8진수 
const roomTemp = 21.5;
const c = 3.0e6 //지수
const e = -1.6e-19; // 지수
const inf = Infinity;
const ninf = -Infinity;
const nan = NaN;

// console.log(inf, typeof inf)
// console.log(ninf, typeof ninf)
// console.log(nan, typeof nan)

// 중요한 상수값들
const small = Number.EPSILON; // 2.2e-16 차이를 구별할 수 있는 가장 작은 값
const bigInt = Number.MAX_SAFE_INTEGER; //표현할 수 있는 가장 큰 정수
const max = Number.MAX_VALUE; //표현할 수 있는 가장 큰 숫자
const minInt = Number.MIN_SAFE_INTEGER;
const min = Number.MIN_VALUE;
const nInf = Number.NEGATIVE_INFINITY;
const nan1 = Number.NaN;
const Inf = Number.POSITIVE_INFINITY;
// console.log(small)
// console.log(bigInt)
// console.log(max)

// 3.7 문자열은 유니코드 사용
// 3.7.1 이스케이프
const imperative = "don't do that!"
const dialog = "He looked up and said \"don't do that!\" to Max."
// console.log(dialog)

// 3.8 특수문자
// \n : 줄바꿈 ASCII unicode10
// \r : 캐리지 리턴 ASCII unicode13
// \t : 탭 ASCII unicode9
// \` : 백틱 (ES6에서 생김)
// \$ : 달러기호 (ES6에서 생김)
// \uXXXX : 임의의 유니코드 포인트 16진수 유니코드 포인트 입력
// \xXX : 라틴-1 문자 16진수 포인트 입력
// 16진수 입력시에는 대소문자 모두 사용가능

// 3.8.1 문자열 템플릿 : ES6 이전에는 문자열 병합만 가능했음 + 
// ES6 부터는 template 혹은 interploation 이라 불리는 기능 이용가능
let currentTemp = 19.5;
const message = `The current temperature is ${currentTemp}\u00b0C`;
// console.log(message)

// js는 multiline string 되도록 쓰지말자. 백틱으로 사용가능하긴한데, 아니면 병합으로 쓰자.
let multiline = `line1
line2`;
//console.log(multiline)
multiline = "line1\n" + "line2\n" + "line3"
//console.log(multiline)
//백틱과 병합을 섞어 쓸 수 있음

// 3.8.3 숫자와 문자열
// 섞어쓰지마라

// 3.10 심볼
// ES6에서 새로 도입한 데이터 타입. 유일성을 만족.
// 고유한 식별자가 필요하다면 심볼을 써라.
const RED = Symbol("The color of a sunset!");
const ORANGE = Symbol("The color of a sunset!"); 
// console.log(RED)
// console.log(ORANGE)
// console.log(RED === ORANGE)

// 3.11 null and undefined
// null이 일반적으로는 나은 선택.

// 3.12 객체
// 컨테이너 - 내용물이 바뀐다고 컨테이너가 바뀌는 것은 아니다.
const obj = {};
// property or member는 key-value pair
// color 프로퍼티를 객체 obj에 추가하자
obj.color = "yellow";
// 유효한 식별자 이름일 때만 .기호 - member access operator를 사용할 수 있다. 
// 즉, 식별자 이름이 js 규칙을 만족해야함. 
// 그렇지 않다면 [] (계산된 멤버 접근 연산자 computed member access operator)를 써야함.
obj["not an identifier"] = 3;
// console.log(obj["not an identifier"])
// console.log(obj."not an identifier")  <- 사용 불가능
// 아래의 경우에는 두 방식 모두 사용가능
// console.log(obj.color)
// console.log(obj["color"])
// 단 심볼 프로퍼티라면 대괄호를 사용한다.
const SIZE = Symbol("size");
obj[SIZE] = 8;
// console.log(obj.SIZE) //undefined 
// console.log(obj[SIZE]) // 8
// 실제로 실행해보면 SIZE를 프로퍼티로 나열해주지는 않는다.

obj.SIZE = 0 // obj.SIZE or obj["SIZE"]로 호출 이건 위에서 언급한 Symbol SIZE와는 다른 것이다.
// console.log(obj)

// 빈 객체로 만들지 않아도, 바로 프로퍼티를 만들 수 있음
// 프로퍼티로는 객체도 가능
const sam1 = {
    name:'Sam',
    age: 4,
    property1 : {
        name1: "Sam1",
        age2: 5,
    }
}
// console.log(sam1)
// 함수를 담을 수도 있음
sam1.speak = function(){ return "Meow!"}
// console.log(sam1.speak())
// 객체에서 프로퍼티를 제거할 때는 delete 사용
delete sam1.speak;
// console.log(sam1.speak())  <- error 남

// 3.13 Number, String, Boolean 객체
// 2가지 목적 : 특별한 값 저장, 함수 형태로 기능 제공

const s = "hello";
// console.log(s);
// console.log(s.toUpperCase()); 
// console.log(s); 
// 원시문자열 타입인 s에 어떻게 함수형태로 실행이 가능하지? 
// <- 임시로 String 객체를 만들어냄. 이 객체 안에 toUpperCase 함수가 들어있음
// <- 함수 호출이 끝나면 이 임시 객체를 파괴한다. 따라서 s는 여전히 원본

s.rating = 3 ; // 에러가 나지 않았지만
// 임시의 String 객체에 rating이라는 프로퍼티를 만들고 거기에 값을 3을 할당한 것
// 그러나 이 직후 바로 String 객체는 파괴된다. 따라서 s에는 rating이라는 프로퍼티를 집어넣은 적이 없다.
// console.log(s.rating) //undefined

// 3.14 배열
// 배열 크기 고정 x 
// 데이터 타입이 자유로움
// index 0으로 시작
// 배열 정의 방법들
const a1 = [1,2,3,4];
const a2 = [1, 'two', 3, null];
const a3 = [
    "abc",
    "cde",
    "efg",
];
const a4 = [
    { name:"Ruby", hardness:9},
    { name:"Diamond", hardness:10},
    { name:"Topaz", hardness:8},
];
const a5 = [
    [1,3,5],
    [2,4,6]
];

const arr= ['a','b','c'];
// 배열의 길이
// console.log(arr.length); <- 메소드가 아니라 프로퍼티임
// 배열 접근
// arr[0]
// arr[arr.length-1]
// 값 수정
// arr[2] = 'd'
// console.log(arr)

// 3.15 객체와 배열의 (맨) 마지막 쉼표 
// trailing comma, dangling comma, terminal comma 등으로 부름 -> 자유 선택

// 3.16 날짜
// Date 객체가 담당. 사용하기가 매우 까다로움
const now = new Date(); // 타임존은 어떻게 세팅하지?
// console.log(now)
const halloween = new Date(2016,9,31, 19, 0); // 월은 0~11 : 9는 10월
// console.log(halloween)
// getFullYear, getMonth, getDate, getDay, getHours, getMinutes, getSeconds, getMilliseconds 등의 메소드

// 3.17 정규표현식
// regex, regexp, regular expression
// 문자열의 검색과 교체를 단순하게 만들어줌.  JS에서는 RegExp 객체 사용 또는 / 사이에 표현식 / 넣는 방법 사용
// 다른 프로그램 언어에서는 확장으로 제공
// email 예제 
const email = /\b[a-z0-9._-]+@[a-z_-]+(?:\.[a-z]+)+\b/;

// 3.18 map , set
// ES6에서 Map, Set, WeakMap, WeakSet이 도입됨 

// 3.19 데이터 타입 변환
const numStr = "33.3";
const num = Number(numStr); // <- Number 객체의 인스턴스는 아님. 숫자로 바꿀 수 없으면 NaN이 반환됨.

// 2번째 방법 parseInt, parseFloat parseInt 사용시 몇 진수인지를 넘길 수 있다. 숫자로 변환할 수 있는 부분
// 까지만 변환한다. 
const a = parseInt("16 volts",10);
const b = parseInt("3a", 16); // 2자리 58
const b1 = parseInt("3z", 16); // 1자리 3

const c1 = parseFloat("15.5kph"); // parseFloat는 항상 10진수로 가정함 
// console.log(a)
// console.log(b)
// console.log(b1)
// console.log(c1)

// Date 객체를 숫자로 바꿀 때는 valueOf() UTC 1970년 1월 1일 자정으로부터 몇 밀리초가 지났는지를 나타내는 숫자
const d = new Date();
const ts = d.valueOf();
// console.log(d)
// console.log(ts)

// 3.19.2 문자열로 변환
// toString() 메서드 , 객체의 toString()을 수정해서 사용하자 , 배열은 쓸만 배열요소들 + , 로 만들어줌
const arr1 = [1, true, "hello"];
console.log(arr1.toString());

// 3.19.3 불리언으로 변환
// ! 을 이용해 모든 값을 불리언으로 변환 가능