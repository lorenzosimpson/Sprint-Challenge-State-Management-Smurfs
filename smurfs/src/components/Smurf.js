import React from 'react'
import { connect } from 'react-redux';
import { deleteSmurf } from '../actions';

const Smurf = props => {
    console.log(props, 'smurf props')


    const handleDelete = () => {
        props.deleteSmurf(props.smurf)
    }
    return (
        <div className='smurf'>
            <h1>{props.smurf.name}</h1>
            <h5>Age: {props.smurf.age}</h5>
            <h5>Height: {props.smurf.height}</h5>
            <button onClick={handleDelete}>Delete Smurf</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs,
    }
}

export default connect(mapStateToProps, { deleteSmurf})(Smurf)