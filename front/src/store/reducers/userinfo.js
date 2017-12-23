import * as actionTypes from '../actions';

const initialState = {
  userInfo: {
/*     name: '',
    occupation: '',
    description: '',
    facebook: '',
    instagram: '',
    linkedin: '',
    twitter: '',
    email: '',
    password: '',
    profile_type: '', */
  },
};

const reducer = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case actionTypes.UPDATE_USER:
      return {
        ...state,
        userInfo: {
          ...state.userInfo,
          [action.property]: action.input,
        },
      };
  }
  return state;
};

export default reducer;
