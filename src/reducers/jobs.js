import { RESPONSE_RECEIVED } from '../constants/constants';

const jobs = (state=[], action)=>{
  switch (action.type) {
    case RESPONSE_RECEIVED:
    return action.jobs;
    default:
    return state;
  }
};

export default jobs;
