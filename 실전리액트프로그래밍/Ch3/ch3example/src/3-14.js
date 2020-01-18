import React, { Component } from 'react'


class MyComponent3_14 extends React.Component {
    state = {
        count: 0,
    };

    onClick= () => {
        const { count } = this.state;
        this.setState({ count: 123 }, () => console.log('count is 123'));
    };
    render() {
        const { count } = this.state;
        return (
            <p onClick={this.onClick}>AA</p>
        )
    }
}

export default MyComponent3_14

// setState의 두 번째 매개변수는 처리가 끝났을 때 호출되는 콜백 함수이다. 
// 콜백은 상탯값이 변경된 후에 호출되기 때문에 변경된 값을 기반으로 다음 작업을 처리할 때 유용하게 사용된다.


