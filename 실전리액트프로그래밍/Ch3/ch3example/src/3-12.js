import React, { Component } from 'react'

class MyComponent3_12 extends React.Component {
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

export default MyComponent3_12

// 상태 로직을 분리해서 사용하는 패턴


