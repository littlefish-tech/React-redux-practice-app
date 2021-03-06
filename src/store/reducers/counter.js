import * as actionTypes from '../actions';

const initialState = {
    counter: 0
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.INCREMENT:
            // const newState = Object.assign({}, state);
            // newState.counter = state.counter + 1;
            // return newState;
            return {
            ...state,
            counter: state.counter + 1
            }
        case actionTypes.DECREMENT:
            return {
                ...state,
                counter: state.counter - 1
            }
        case actionTypes.ADD:
            return {
                ...state,
                counter: state.counter + action.val
            }
        case actionTypes.SUBTRACT:
            return {
                ...state,
                counter: state.counter - action.val
            }
        case actionTypes.TIMES_RESULT:
            return {
                ...state,
                counter: state.counter * action.val
            }
        case actionTypes.DIVID_RESULT:
            return {
                ...state,
                counter: state.counter / action.val
            }
    }
    return state;
};

export default reducer;