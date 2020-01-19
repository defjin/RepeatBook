import React, { Component } from 'react';
import './ValidationSample.css';

class ValidationSample extends Component {
  state = {
    password: '',
    clicked: false,
    validated: false
  };

  handleChange = e => {
    this.setState({
      password: e.target.value
    });
  };

  handleButtonClick = () => {
    this.setState({
      clicked: true,
      validated: this.state.password === '0000'
    });
    this.input.focus();
  };

  render() {
    const { password } = this.state;
    return (
      <div>
        <input
          ref={ref => (this.input = ref)}
          type="password"
          value={password}
          placeholder="비밀번호 입력하세요"
          onChange={this.handleChange}
          className={
            this.state.clicked
              ? this.state.validated
                ? 'success'
                : 'failure'
              : ''
          }
        />
        <button onClick={this.handleButtonClick}>클릭</button>
      </div>
    );
  }
}

export default ValidationSample;
