import React, { Component } from 'react'

class MyComponent3_9 extends React.Component {
    state = {
        count1: 0,
        count2: 0,
    }
    onClick = () => {
        const { count1 } = this.state
        this.setState({ count1: count1 + 1});
    }
}

export default MyComponent3_9

// setState 메서드로 입력된 객체는 기존 상탯값과 병합된다. 이 경우엔 count2는 변경되지 않음. 
// 이 컴포넌트 포함 count1을 속성값으로 받는 자식 컴포넌트의 렌더도 호출됨.
// setState는 비동기로 상태를 변경한다.


