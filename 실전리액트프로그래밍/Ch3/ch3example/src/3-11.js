import React, { Component } from 'react'

class MyComponent3_11 extends React.Component {
    state = {
        count: 0,
    }
    onClick = () => {
        this.setState(prevState => ({ count: prevState.count + 1}));
        this.setState(prevState => ({ count: prevState.count + 1}));
    }
    render() {
        console.log(`render called ${this.state.count}`);
        return (
            <div>
                <button onClick={this.onClick}>AA</button>
            </div>
        )
    }
}

export default MyComponent3_11

// setState는 효율적으로 작동하기 위해서 배치로 처리해서, 로그 자체는 한 번만 출력됨.
// 그러나 값은 2가 증가함. 


