/* @flow */
import { LOG_TEST } from '../actions/home';

const INITIAL_STATE = null;

export default (state=INITIAL_STATE, action) => {
  switch (action.type) {
    case LOG_TEST:
      console.log(action.text);
    default:
      return state;
  }
};
