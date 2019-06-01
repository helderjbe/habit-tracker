import actionTypes from '../actionTypes';

const actions = {};

actions.setChoice = (id, payload) => ({
  type: actionTypes.LANDING_CHOICES,
  [id]: payload
});

export default actions;
