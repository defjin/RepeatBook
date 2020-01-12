// 4.2.3 메타문법 metasyntax
// 대괄호([])는 옵션, 생략부호(...)는 여기 들어갈 내용이 더 있다. 
// expression 어떤 값, condition 참 거짓값 , statement 구문

// //while
// while(condition)
//     statement

// // if else
// if(condition)
//     statement1
// [else
//     statement2]

// // do while
// do 
//     statement
// while(condition);

// // for
// for([initialization];[condition];[final-expression])
//     statement

// for(;;) <- 무한루프

// switch를 쓸 때는 break를 유의할 것. 기본적으로 쓰는 습관 들여라.
// 여러 옵션 중 하나를 선택할 때 쓰지만, dynamic dispatch에 대해서 배우고 나면 많이 쓰지 않을 것.

// 4.2.6 for ... in 
// 객체의 프로퍼티에 루프를 실행하도록 설계됨
// for (variable in object)
//     statement
const player = { name: 'Thomas', rank: 'Midshipman', age:25 };
for(let prop in player){
    if(!player.hasOwnProperty(prop)) continue;
    console.log(prop+': ' + player[prop]);
}

// 4.2.7 for .. of (ES6)
// 컬렉션의 요소에 루프를 실행
// for (variable of object)
//     statement
// 배열과 iterable에 모두 사용할 수 있는 범용
// for of 는 각 요소의 인덱스를 알 필요 없을 때 알맞다.