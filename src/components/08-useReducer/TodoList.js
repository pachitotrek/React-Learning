import React from 'react'
import { TodoItem } from './TodoItem'

export const TodoList = ({todos,handleToggle,handleDelete}) => {
    return (
        <div>
            <ul className="list-group list-group-flush">

                {
                    todos.map((t, i) => (
                        <TodoItem t={t} i={i} handleToggle={handleToggle} handleDelete={handleDelete}  />
                    ))
                }
            </ul>

        </div>
    )
}
