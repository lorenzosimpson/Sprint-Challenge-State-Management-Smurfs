import React from 'react';
import axios from 'axios';

const Smurf = (props) => {

    const deleteSmurf = smurf => {
        axios
        .delete(`http://localhost:3333/smurfs/${props.id}`)
        .then(window.location.reload())
    }

    console.log(props, 'smurf props')


    return (
        <div>
            <h4>{props.name}</h4>
            <h4>{props.age}</h4>
            <h4>{props.height}</h4>
            <button onClick={deleteSmurf}>Delete</button>
        </div>
    )
}

export default Smurf;