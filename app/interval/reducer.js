import { merge } from 'ramda';
import { CHANGE_START, CHANGE_END } from './actionTypes';

export default (
  state = {
    start: Date.now(),
    end: Date.now()
  },
  action = null
) => {
  switch (action.type) {
    case (CHANGE_START):
      return merge(state, { start: action.start });
    case (CHANGE_END):
      return merge(state, { end: action.end });
    default:
      return state;
  }
};
