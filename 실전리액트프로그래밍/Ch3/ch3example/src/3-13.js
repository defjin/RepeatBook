import React, { Component } from 'react'


class MyComponent3_13 extends React.Component {
    state = {
        count1: 0,
        count2: 0,
    };

    onClick= () => {
        const { count1, count2 } = this.state;
        this.setState({ count1: count1 + 1});
        this.setState({ count2: count2 + 1});
    };
    render() {
        const { count1, count2 } = this.state;
        const result = count1 >= count2;
    }
}

export default MyComponent3_13

// setState는 비동기지만, 이 함수들끼리는 순차적으로 동작한다.
// 따라서 result는 항상 참이다. 


