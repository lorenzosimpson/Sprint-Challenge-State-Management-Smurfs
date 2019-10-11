import React from 'react'
import { connect } from 'react-redux';
import { deleteSmurf } from '../actions';


const Smurf = props => {
    console.log(props, 'smurf props')

    const handleDelete = (id) => {
        props.deleteSmurf(id).then(() => window.location.reload())
        

    }
    return (
        <div className='smurf'>
            <h1>{props.smurf.name}</h1>
            <h5>Age: {props.smurf.age}</h5>
            <h5>Height: {props.smurf.height}</h5>
            <button onClick={() => handleDelete(props.smurf.id)}>Delete Smurf</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs,
        isFetching: state.isFetching
    }
}

export default connect(mapStateToProps, { deleteSmurf })(Smurf)