import React from 'react'
import { connect } from 'react-redux';

const Smurfs = props => {
    return (
        <div className='smurfs'>
            <h1>hello from smurfs</h1>
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
export default connect(mapStateToProps, {})(Smurfs)