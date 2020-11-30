import React, { useEffect, useReducer } from 'react';

import './style.css';
import { TodoAdd } from './TodoAdd';
import { TodoList } from './TodoList';
import { todoReducer } from './todoReducer';



const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const TodoApp = () => {

    const [todos, dispatch] = useReducer(todoReducer, [], init);

   
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);


    const handleDelete = (todoId) => {

        const action = {
            type: "delete",
            payload: todoId
        };

        dispatch(action);
    }

    const handleToggle = (todoId) => {

        dispatch({
            type: 'toggle',
            payload: todoId
        });

    }

    const handleAddTodo =(newTodo)=>{

        dispatch({
            type: "add",
            payload: newTodo
        });
    }




    return (
        <div>
            <h1>TodoApp {todos.length}</h1>
            <hr></hr>
            <div className="container">
                <div className="row">
                    <div className="col-sm-6">
                        <h3>Tareas Actuales</h3>
                        <TodoList todos={todos} handleToggle={handleToggle} handleDelete={handleDelete}  />
                    </div>
                    <div className="col-sm-6">

                        <TodoAdd handleAddTodo={handleAddTodo} />

                    </div>

                </div>
            </div>
        </div>
    )
}
