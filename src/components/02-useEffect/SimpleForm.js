import React,{useState,useEffect} from 'react';
import './effect.css';
import { Message } from './Message';

export const SimpleForm = () => {
    const [formState, setFormState] = useState({
        name: "",
        email: ""
    });

    const { name, email } = formState;

    useEffect(() => {
        // console.log('hola');
    }, []);


    useEffect(()=>{
        // console.log('formState cambio');
    },[formState]);


    useEffect(() => {
    
    }, [email]);


    
  
    const handleInputChange = ({ target }) => {

        setFormState({
            ...formState,
            [ target.name ]: target.value
        });

    }




    return (
        <>
            <h1>Use Effect</h1>
            <hr />
            <div className="form-group">
            <label>Email</label>              
                <input type="text" name="email" value={email} onChange={handleInputChange} className="form-control" autoComplete="off" />           
            </div>
            <div className="form-group">
                <label>Name</label>
                <input type="text" name="name" value={name} onChange={handleInputChange} className="form-control"  />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>

            { name ==='123' && <Message/>}


        </>
    )
}
