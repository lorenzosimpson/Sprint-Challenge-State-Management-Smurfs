import React, { useContext } from 'react';
import Smurf from './Smurf';
import SmurfContext from '../contexts';

const Smurfs = () => {

    const {smurfs} = useContext(SmurfContext)
    console.log(smurfs)

    return (
        <div className='smurfs'>
            {smurfs.map(smurf => (
                <Smurf name={smurf.name} age={smurf.age} height={smurf.height} id={smurf.id}/>
            ))}
            
        </div>
    )
}

export default Smurfs;