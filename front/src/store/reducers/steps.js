import * as actionTypes from '../actions';

const initialState = {
  step: 1,
  fireRedirect: false,
};

const reducer = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case actionTypes.NEXT_STEP:
      return {
        ...state,
        step: state.step + 1,
      };
    case actionTypes.PREV_STEP:
      return {
        ...state,
        step: state.step - 1,
      };
    case actionTypes.REDIRECT:
      return {
        ...state,
        fireRedirect: true,
      };
  }
  return state;
};

export default reducer;
