import React, { useState } from 'react';

const IterationSample = () => {
  const [names, setNames] = useState([
    { id: 1, text: '눈사람' },
    { id: 2, text: '얼음' },
    { id: 3, text: '눈' },
    { id: 4, text: '바람' }
  ]);
  const [inputText, setInputText] = useState('');
  const [nextId, setNextId] = useState(5);
  const nameList = names.map(name => <li key={name.id} onDoubleClick={()=> onDelete(name.id)}>{name.text}</li>);

  const handleChange = e => setInputText(e.target.value);
  const onClick = () => {
    const newnames = names.concat({ id: nextId, text: inputText });
    setNames(newnames);
    setNextId(nextId + 1);
    setInputText('');
  };

  const onDelete = id => {
     const newnames = names.filter(name=> name.id !== id) 
     setNames(newnames);
  }
  return (
    <div>
      <input
        type="text"
        value={inputText}
        onChange={handleChange}
        placeholder="할일"
      ></input>
      <button onClick={onClick}>추가</button>
      

      
      <ul>{nameList}</ul>
    </div>
  );
};

export default IterationSample;

//기본 index를 key값으로 사용하면 효율적인 리렌더링이 불가능하다. 그럼 효율적인 방법은?
