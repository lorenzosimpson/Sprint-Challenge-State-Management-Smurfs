import axios from 'axios';

export const START_FETCHING = 'START_FETCHING';
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAILURE = "FETCH_FAILURE";
export const ADD_SMURF = 'ADD_SMURF';

export const fetchSmurfs = () => dispatch => {
    dispatch({ type: START_FETCHING });

    axios
      .get(
        `http://localhost:3333/smurfs`
      )
      .then(res => dispatch({ type: FETCH_SUCCESS, payload: res.data}))
      .catch(err => dispatch({ type: FETCH_FAILURE, payload: err.response}))
  };
  
  export const addSmurf = (smurf) => dispatch => {
      axios
        .post(`http://localhost:3333/smurfs`, smurf)
        .then(res => {
            console.log(res)
            dispatch({ type: ADD_SMURF, payload: smurf}) })
        .catch(err => console.log(err))
  }