import React from 'react'
import { connect } from 'react-redux';
import { deleteSmurf } from '../actions';


const Smurf = props => {

    const smurfImages = ['https://fandan.co/2hfW4MU', 'https://bit.ly/2OI7jxw', 'https://bit.ly/2ozrfrq']
    const random = Math.floor(Math.random() * smurfImages.length)
    const randomImage = smurfImages[random]
    const handleDelete = (id) => {
        props.deleteSmurf(id).then(window.location.reload())
        

    }
    return (
        <div className='smurf'>
            <img src={randomImage} alt='smurf'></img>
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