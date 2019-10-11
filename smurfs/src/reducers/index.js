import { START_FETCHING, FETCH_SUCCESS, FETCH_FAILURE, DELETE_SMURF } from '../actions';

export const initialState = {
    smurfs: [],
    isFetching: false,
    error: ''
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case START_FETCHING:
            return {
                ...state,
                isFetching: true,
            }
        case FETCH_SUCCESS: 
            return {
                ...state,
                isFetching: false,
                error: '',
                smurfs: action.payload,
            }
        case FETCH_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload,
            }
        default:
            return state;
    }
}