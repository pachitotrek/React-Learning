import React from 'react';
import { useForm } from '../../hooks/useForm';
import './effect.css';

export const FormWithCustomHook = () => {

    const [formvalues, handleInputChange] = useForm({
        name: "",
        email: "",
        password:""
    });

    const { name, email,password } = formvalues;  

    const handleSubmit =(e)=>{

        e.preventDefault();    

    }
  

    return (
        <form onSubmit={handleSubmit}>
            <h1>FormWithCustomHook</h1>
            <hr />
            <div className="form-group">
            <div className="form-group">
                <label>Name</label>
                <input type="text" name="name" value={name} onChange={handleInputChange} className="form-control"  />
            </div>
            <label>Email</label>              
                <input type="text" name="email" value={email} onChange={handleInputChange} className="form-control" autoComplete="off" />           
            </div>
            <div className="form-group">
                <label>Password</label>
                <input type="password" name="password" value={password} onChange={handleInputChange} className="form-control"  />
            </div>

            <button type="submit" className="btn btn-primary">Submit</button>

        </form>
    )
}
