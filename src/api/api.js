import fetch from 'cross-fetch';
const BASE_URL = `https://jobs.search.gov/jobs/search.json?`;

const api = (query)=>{
  return fetch(`${BASE_URL}query=${query}`)
         .then((response)=>{
           if (response.status < 400) {
             return response.json()
                    .then((json)=>(json), (err)=>(err))
           }
            return response.status;
          }, (err)=>(err));
};

export default api;
