import React, { Component } from 'react'

class MyComponent3_3 extends React.Component {
    color = 'red';
    onClick = () => {
        this.color = 'blue';
    }
    render() {
        return (
            <button style={{ backgroundColor: this.color }} onClick={this.onClick}>좋아요</button>
        )
    }
}

export default MyComponent3_3

// 상태값(state)를 이용하지 않으면 리액트가 UI데이터의 변경을 알 수 없다.