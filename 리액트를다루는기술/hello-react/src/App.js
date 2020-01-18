import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyComponent from './MyComponent';
import Counter from './Counter';
import Say from './Say';
import EventPractice from './EventPractice';

// function App() {
//   const name = '리액트';
//   // const style = {
//   //   backgroundColor: 'black', // - 는 camelCase로 변환
//   //   color: 'aqua',
//   //   fontSize: '48px',
//   //   fontWeight: 'bold',
//   //   padding: 16 // 단위 생략은 px
//   // }
//   // return (
//   //   <div style={style}>
//   //     {name == "리액트" && <h1>리액트입니다.</h1>}
//   //   </div>
//   // );
//   return <div className="react">{name}</div>;
// }

// export default App;

// // 조건부 렌더링을 할 때 falsy 한 값 / ex/ number = 0을 넣으면 그것은 브라우저에 노출된다.
// // class 대신 className으로 사용
// // jsx 에서는 무조건 태그를 닫아줄 것.

// const App = () => {
//   return <MyComponent name="React" favoriteNumber={10}>칠드런</MyComponent>;
// };

// const App = () => {
//   return <Counter />
// }

// const App = () => {
//   return <Say />
// }

const App = () => {
  return <EventPractice />
}
export default App;
