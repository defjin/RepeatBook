import React, { Component } from 'react'

class MyComponent3_4 extends React.Component {
    state = { color: 'red'};
    onClick = () => {
        this.setState({ color:'blue' });
    };
    render() {
        return (
            <button style={{ backgroundColor: this.state.color }} onClick={this.onClick}>좋아요</button>
        )
    }
}

export default MyComponent3_4


// 컴포넌트의 state멤버변수는 상탯값을 관리하기 위해 사용하는 예약어임
// 변경시에서는 setState메소드를 사용. 
// setState 호출시 : 상태 변경 -> 리렌더
// 상탯값은 해당 컴포넌트가 관리하는 데이터