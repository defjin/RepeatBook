import React from 'react';
import TodoTemplate from './components/TodoTemplate';
import { MdAndroid } from 'react-icons/md';
import TodoInsert from './components/TodoInsert';

const App = () => {
  return <TodoTemplate>
    <TodoInsert />
  </TodoTemplate>
}

export default App;
