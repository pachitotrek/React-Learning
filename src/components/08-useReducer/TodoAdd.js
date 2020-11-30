import React from 'react'
import { useForm } from '../../hooks/useForm';

export const TodoAdd = ({handleAddTodo}) => {

    const [{ description }, handleInputChange, reset] = useForm({
        description: ''
    });


    
    const handleSubmit = (e) => {
        e.preventDefault();

        if (description.trim().length <= 1) {
            return;
        }

        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false
        };
    
        handleAddTodo(newTodo);      

        reset();
    }


    return (
        <>
            <h3>Agregar Tarea</h3>
                        <hr></hr>
                        <form onSubmit={handleSubmit}>
                            <input
                                type="text"
                                className="form-control "
                                name="description"
                                placeholder="Aprender ...."
                                autoComplete="off"
                                onChange={handleInputChange}
                                value={description}
                            />
                            <button className="btn btn-outline-primary btn-block mt-4">
                                Agregar
                            </button>

                        </form>
            
        </>
    )
}
