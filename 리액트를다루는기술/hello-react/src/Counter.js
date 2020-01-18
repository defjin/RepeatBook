import React, { Component } from 'react';

class Counter extends Component {
  //state를 정의하는 방법1
  //   constructor(props) {
  //     super(props);
  //     //state의 초깃값
  //     this.state = {
  //       number: 0,
  //       fixedNumber: 0
  //     };
  //   }

  // state를 정의하는 방법2
  state = {
    number: 0,
    fixedNumber: 0
  };

  render() {
    const { number, fixedNumber } = this.state;
    return (
      <div>
        <h1>{number}</h1>
        <h2>바뀌지 않는 값: {fixedNumber}</h2>
        <button
          onClick={() => {
            this.setState(
              prevState => {
                return {
                  number: prevState.number + 1
                };
              },
              () => {
                console.log('방금 setState1 호출함');
                console.log(this.state);
              }
            );

            this.setState(
              prevState => ({
                number: prevState.number + 1
              }),
              () => {
                console.log('방금 setState2 호출함');
                console.log(this.state);
              }
            );
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

export default Counter;

// 이벤트 처리시의 비동기성에 유의하자.
// 객체 대신에 함수를 넣어서 여러 번 호출하는 것을 처리할 수 있다.
// 밑에 까지 모두 처리가 끝난 state 값이 반환된다.
