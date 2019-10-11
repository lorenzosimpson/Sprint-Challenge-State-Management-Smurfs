import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addSmurf } from '../actions';

const Form = props => {
    const [newSmurf, setNewSmurf] = useState({})

    const handleChanges = e => {
        setNewSmurf({...newSmurf, [e.target.name]: e.target.value})
    }

    const handleSubmit = e => {
        props.addSmurf(newSmurf)
    }
  console.log(newSmurf)
    return (
        <form>
            <input type='text' name='name' onChange={handleChanges}></input>
            <input type='text' name='age'  onChange={handleChanges}></input>
            <input type='text' name='height' onChange={handleChanges}></input>
            <button onClick={handleSubmit}>Add Smurf</button>
        </form>
    )
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs
    }
}

export default connect(mapStateToProps, {addSmurf})(Form);