import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Form = props => {
    const [newSmurf, setNewSmurf] = useState({})

    
    const handleChanges = e => {
        setNewSmurf({...newSmurf, [e.target.name]: e.target.value})
    }

    const addSmurf = (newSmurf) => {
        axios
        .post(`http://localhost:3333/smurfs`, newSmurf)
    }


    const handleSubmit = e => {
        addSmurf(newSmurf)
    }


    return (
        <div className='form-container'>
            <form>
                <input type='text' name='name' placeholder="Name"onChange={handleChanges}></input>
                <input type='text' name='age'  placeholder='Age' onChange={handleChanges}></input>
                <input type='text' name='height' placeholder='Height (cm)'onChange={handleChanges}></input>
                <button onClick={handleSubmit}>Add Smurf</button>
            </form>
        </div>
    )
}


export default Form;