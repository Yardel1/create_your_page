import * as actionTypes from '../actions';

const initialState = {
    step: 6,
    fireRedirect: false
};

const reducer = (
    state = initialState,
    action,
) => {
    switch (action.type) {
        case actionTypes.NEXT_STEP:
            return { ...state,
                step: state.step + 1 
            };
        case actionTypes.PREV_STEP:
            return { 
                ...state,
                step: state.step - 1 
            };
    }
    return state;
};

export default reducer;
