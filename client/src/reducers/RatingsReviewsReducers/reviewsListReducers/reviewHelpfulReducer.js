import Redux from 'redux';
import * as actions from '../../../actionTypes/RatingsReviews/actionTypes';

const reviewHelpfulReducer = (state = {}, action) => {
  switch (action.type) {
  case actions.CHANGE_REVIEW_HELPFUL:
    return action.payload.reviewHelpful;
  default:
    return state;
  }
};

export default reviewHelpfulReducer;