import React, { Component } from 'react'

// 3-5, 3-6 같이
function Title(props) {
    return <p>{props.title}</p>
}

class MyComponent3_5 extends React.Component {
    state = { count: 0 }
    onClick = () => {
        const { count } = this.state;
        this.setState({ count: count + 1});
    };
    render() {
        const { count } = this.state
        return (
            <div>
                <Title title={`현재 카운트: ${ count }`}/>
                <button onClick={this.onClick}>증가</button>
            </div>
        )
    }
}

export default MyComponent3_5