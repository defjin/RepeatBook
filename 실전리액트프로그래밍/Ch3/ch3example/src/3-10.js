import React, { Component } from 'react'

class MyComponent3_10 extends React.Component {
    state = {
        count: 0,
    }
    onClick = () => {
        this.setState({ count: this.state.count + 1});
        this.setState({ count: this.state.count + 1});
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

export default MyComponent3_10

// setState는 비동기라서 위의 코드는 한 번만 작동한다. - count가 1씩 증가


