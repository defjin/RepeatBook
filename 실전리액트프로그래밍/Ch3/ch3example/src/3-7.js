import React, { Component } from 'react'

// 원칙적으로는 부모 컴포넌트가 렌더링되면 자식 컴포넌트는 같이 렌더링된다.

// title 속성 값이나 상태값이 변경될 때만 렌더링하게 해주려면 2가지 방법이 있다.
// 함수형 컴포넌트는 React.memo
// 클래스형 컴포넌트에서는 React.PureComponent

function Title(props){
    return <p>{props.title}</p>
}
export default React.memo(Title);

export default class Title extends React.PureComponent {
    render() {
    return <p>{ this.props.title }</p>
    }
}
