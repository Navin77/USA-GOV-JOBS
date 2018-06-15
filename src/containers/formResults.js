import React from 'react';
import { connect } from 'react-redux';
import Result from '../components/result';
import Errors from '../components/errors'


const FormResults = ({ jobs, errors, isFetching })=>{
  if (isFetching) {
    return(
      <React.Fragment>
        <section className="loader-container">
          <div class="loader"></div>
        </section>
        <footer className="page-footer">
          <p>made with &#10084; by <a href="https://navin77.github.io/navin/">Navin Raj</a></p>
        </footer>
      </React.Fragment>
    );
  } else if(errors) {
    return(
      <React.Fragment>
        <section className="err-container">
          <Errors err={errors} />
        </section>
        <footer className="page-footer">
          <p>made with &#10084; by <a href="https://navin77.github.io/navin/">Navin Raj</a></p>
        </footer>
      </React.Fragment>

    )
  }else {
    return (
      <React.Fragment>
        <section className="result-container">

        {
          jobs.map((job)=>(<Result key={job.id} jobDetail={job} />))
        }
        </section>
        <footer className="page-footer">
          <p>made with <span className="love">&hearts;</span> by <a href="https://navin77.github.io/navin/">Navin Raj</a></p>
        </footer>
      </React.Fragment>

    );
  }

};


const mapStateToProps = ({ jobs, errors, isFetching })=>({
  jobs,
})
export default connect(mapStateToProps)(FormResults);
