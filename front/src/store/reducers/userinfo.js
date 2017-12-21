import * as actionTypes from '../actions';

const initialState = {
  userInfo: {
    name: 'yarden',
    occupation: 'home',
    description: 'walking',
    facebook: 'yo',
    instagram: '',
    linkedin: '',
    twitter: '',
    email: 'y@y.com',
    password: 'hello123'
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
