import React from 'react'

const Smurf = props => {
    console.log(props)
    return (
        <div className='smurf'>
            <h1>{props.smurf.name}</h1>
            <h5>Age: {props.smurf.age}</h5>
            <h5>Height: {props.smurf.height}</h5>
        </div>

    )
}

export default Smurf;