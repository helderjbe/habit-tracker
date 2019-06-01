import actionTypes from '../actionTypes';

const initialState = {
  first_choice: '',
  second_choice: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LANDING_CHOICES:
      return {
        ...state,
        [action.id]: action.payload
      };
    default:
      return state;
  }
};
