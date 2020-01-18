import React, { Component } from 'react'

// 3-15,3-16


function Title(props){
    props.title = 'abc';
}
// props 는 부모로 부터 상속 받는 값이고, 상위에서 관리하기 때문에 수정하지 못하도록 되어있다. 
// title을 수정하려면 실제 가지고 있는 컴포넌트에서 직접 수정해야. 

// 상탯값은 직접 수정이 가능. 
// 즉, props 는 immutable, state 는 mutable 

onClick= () => {
    this.state.comment = "Hello";
    this.forceUpdate();
};

// 직접 수정후 forceUpdate를 호출하면 새로운 값과 함께 화면을 다시 그리지만, 상탯값도 불변으로 관리하는 것을 권장한다.
// 코드의 복잡도가 낮아지기 때문. + 렌더링 성능이 높아진다.

