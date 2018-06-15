import { REQUEST_STARTED, RESPONSE_RECEIVED, ERROR_RECEIVED} from '../constants/constants';

const errors = (state=null, action) =>{
  switch (action.type) {
    case ERROR_RECEIVED:
      return action.error;
    case RESPONSE_RECEIVED:
    case REQUEST_STARTED:
      return null;
    default:
      return state;
  }
}

export default errors;
