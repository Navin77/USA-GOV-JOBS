import * as action from '../constants/constants';
import api from '../api/api';

const requestStarted = ()=>({
  type: action.REQUEST_STARTED,
})

const responseReceived = (jobs)=>({
  type: action.RESPONSE_RECEIVED,
  jobs,
});

const errorReceived = (error)=>({
  type: action.ERROR_RECEIVED,
  error,
});

const formatQuery = (query)=>(
  query
    .trim()
    .split(' ')
    .filter((item)=>(/[A-Za-z0-9]/.test(item)))
    .join('+')
);

export const fetchJobs = ({ searchBar })=>(dispatch)=>{
    dispatch(requestStarted());
    api(formatQuery(searchBar)).then((jobs)=>{
      if (Array.isArray(jobs)) {

         if (jobs.length === 0) {
           dispatch(errorReceived("no jobs"));
         } else {
           dispatch(responseReceived(jobs));
         }

      }else {
        dispatch(errorReceived(jobs));
      }
    }, (err)=>(dispatch(errorReceived(err)))
  )
};
