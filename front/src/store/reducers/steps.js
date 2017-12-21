import * as actionTypes from '../actions';

const initialState = {
    step: 1,
};

const reducer = (
    state = initialState,
    action,
) => {
    switch (action.type) {
        case actionTypes.NEXT_STEP:
            return { step: state.step + 1 };
        case actionTypes.PREV_STEP:
            return { step: state.step - 1 };
    }
    return state;
};

export default reducer;
