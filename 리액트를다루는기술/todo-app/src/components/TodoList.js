import React from 'react';
import TodoListItem from './TodoListItem.js'
import './TodoList.scss'

const TodoList = ({todos, onRemove, onToggle}) => {
    console.log(todos)
    const TodoListItems = (
        todos.map(todo => (<TodoListItem key={todo.id} todo={todo} onRemove={onRemove} onToggle={onToggle}/>))
    )
    return (
        <div className="TodoList">
            {TodoListItems}
        </div>
    );
    
};

export default TodoList;