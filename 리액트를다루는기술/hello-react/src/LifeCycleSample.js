import React, { Component } from 'react';

class LifeCycleSample extends Component {
  state = {
    number: 0,
    color: null
  };

  myRef = null;

  constructor(props) {
    super(props);
    console.log('constructor');
  }

  static getDerivedStateFromProps(nextProps, prevState){
      console.log('getDerivedStateFromProps')
      if(nextProps.color !== prevState.color){
          console.log(nextProps, prevState)
          return { color: nextProps.color }
      }
      return null;
  }

  componentDidMount() {
      console.log('componentDidmount')
  }

  shouldComponentUpdate(nextProps, nextState){
      // 앞으로 변할 props와 state
      console.log('shouldComponentUpdate', nextProps, nextState)
      return nextState.number % 10 !==4;
      // false이면 리렌더링하지 않음
  }

  componentWillUnmount(){
      console.log('componentWillUnmount')
  }

  handleClick = () => {
      this.setState({
          number: this.state.number + 1
      })
  }

  getSnapshotBeforeUpdate(prevProps, prevState){
      console.log('getSnapshotBeforeupdate')
      if(prevProps.color !== this.props.color){
          return this.myRef.style.color;
      }
      return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot){
      console.log('componentdidupdate', prevProps, prevState)
      if(snapshot) {
          console.log('업데이트되기 직전 색상:', snapshot)
      }
  }

  render() {
      console.log('render')
      const style = { 
          color: this.props.color
      }
    return <div>
        {this.props.missing.values}
        <h1 style={style} ref={ref => this.myRef=ref}>{this.state.number}</h1>
        <p>color: {this.state.color}</p>
        <button onClick={this.handleClick}>더하기</button>
    </div>;
  }
}
export default LifeCycleSample;

// 최초 렌더링 
// constructor -> getderivedstatefromprops -> render -> componentdidmount
// 업데이트
// getDerivedStateFromProps -> shouldComponentUpdate -> render -> getSnapshotBeforeUpdate -> componentDidUpdate
// should에서 막히면 거기서 끝나고 render 되지 않음
// 언마운트
// componentWillUnmount