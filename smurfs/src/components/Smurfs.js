import React, { useEffect } from 'react'
import { connect } from 'react-redux';

import {fetchSmurfs} from '../actions'

import Smurf from './Smurf';

const Smurfs = props => {
    console.log(props)
    useEffect(() => {
        props.fetchSmurfs();
    }, [])

    if (props.isFetching) {
        return <h2>Loading smurfs...</h2>
    }
    return (
        <div className='smurfs'>
            {props.smurfs.map(smurf => (
                <Smurf key={smurf.id} smurf={smurf} />
            ))}
        </div>
    )
}



 
const mapStateToProps = state => {
    return {
        smurfs: state.smurfs,
        isFetching: state.isFetching,
        error: state.error
    }
}
export default connect(mapStateToProps, { fetchSmurfs })(Smurfs)