import * as actionTypes from '../actions';

const initialState = {
  picture: {
    profile_image: 'http://test.com',
    profile_url: 'http://test.com',
    pic1_image: 'http://test.com',
    pic1_url: 'http://test.com',
    pic2_image: 'http://test.com',
    pic2_url: 'http://test.com',
    pic3_image: 'http://test.com',
    pic3_url: 'http://test.com',
  }
};

const reducer = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case actionTypes.PROFILE:
      return {
        ...state,
        picture: {
          ...state.picture,
          profile_image: action.picture.image,
          profile_url: action.picture.url,
        }
      };
    case actionTypes.PICTURE1:
      return {
        ...state,
        picture: {
          ...state.picture,
          pic1_image: action.picture.image,
          pic1_url: action.picture.url,
        }
      };
    case actionTypes.PICTURE2:
      return {
        ...state,
        picture: {
          ...state.picture,
          pic2_image: action.picture.image,
          pic2_url: action.picture.url,
        }
      };
    case actionTypes.PICTURE3:
      return {
        ...state,
        picture: {
          ...state.picture,
          pic3_image: action.picture.image,
          pic3_url: action.picture.url
        }
      };
  }
  return state;
};

export default reducer;
