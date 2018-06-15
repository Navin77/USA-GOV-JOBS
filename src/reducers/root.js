import { reducer as formReducer } from 'redux-form';
import { combineReducers } from 'redux';
import jobs from './jobs';
import errors from './errors';
import isFetching from './isFetching';

const rootReducer = combineReducers({
  jobs,
  errors,
  isFetching,
  form: formReducer,
});

export default rootReducer;
