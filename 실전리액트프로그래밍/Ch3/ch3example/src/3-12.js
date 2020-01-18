import React, { Component } from 'react'

const actions = {
    init() {
        return { count:0 };
    },
    increment(state) {
        return { count: state.count + 1};
    },
    decrement(state) {
        return { count: state.count - 1};
    }
};

class MyComponent3_12 extends React.Component {
    state = actions.init();
    onIncrement = () => {
        this.setState(actions.increment);
    }
    onDecrement = () => {
        this.setState(actions.decrement);
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
// setState의 인수로 함수도 넘길 수 있기 때문에 함수를 정의해서 사용한다. 


