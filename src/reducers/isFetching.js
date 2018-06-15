import { REQUEST_STARTED, RESPONSE_RECEIVED, ERROR_RECEIVED} from '../constants/constants';

const isFetching = (state=false, action)=> {
  switch (action.type) {
    case REQUEST_STARTED:
      return true;
    case RESPONSE_RECEIVED:
    case ERROR_RECEIVED:
      return false;
    default:
      return state;
  }
}

export default isFetching;
