import React, { useState } from 'react';

const Say = () => {
  const [message, setMessage] = useState('');
  const onClickEnter = () => setMessage('안녕하세요!');
  const onClickLeave = () => setMessage('안녕히가세요!');

  const [color, setColor] = useState('black');
  // 현재상태 , 상태를 바꿔줄 함수

  return (
    <div>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
      <h1 style={{ color }}>{message}</h1>
      {/* 윗줄의 color는 어떻게 저렇게 사용가능하지? color: color 형태가 되는건가? 자기이름으로 */}
      <button style={{ color: 'red' }} onClick={() => setColor('red')}>
        빨간색
      </button>
      <button style={{ color: 'green' }} onClick={() => setColor('green')}>
        초록색
      </button>
      <button style={{ color: 'blue' }} onClick={() => setColor('blue')}>
        파란색
      </button>
    </div>
  );
};

export default Say;

// 클래스형이던 함수형이던 컴포넌트에서 state를 쓸 때는 무조건 setter 함수만 사용해야한다.