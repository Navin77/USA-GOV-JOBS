import React from 'react';

const rateIntervalCode = {
          BW: 'bi weekly',
          FB : "fee basis",
          PA : "per year",
          PD : "per day",
          PH : "per hour",
          PM : "per month",
          PW : "piece work",
          ST : "student stipend paid",
          SY : "school year",
          WC : "without compensation"
        };

const numToCurrency = (num)=>{
  let dollar = new Intl.NumberFormat(
    'en-US',
    { style: 'currency',
      currency: 'USD'
    }
  ).format(num).split('.')
  if(/[1-9]/.test(dollar[2])) {
      return dollar.join('.');
  }
  return dollar[0];
};
const codeToInterval = (code)=>(rateIntervalCode[code]);

const Result = ({ jobDetail })=>{
  return(
    <section className="each-job">
      <header>
        <h2>{ jobDetail.organization_name }</h2>
      </header>
      <div className="jobdetail">
        <p><span className="jobdetail-head">Job title:</span> {jobDetail.position_title}</p>
        <p><span className="jobdetail-head">Salary:</span> {`${numToCurrency(jobDetail.minimum)} - ${numToCurrency(jobDetail.maximum)} ${codeToInterval(jobDetail.rate_interval_code)}`}</p>
        <p><span className="jobdetail-head">Location:</span> {jobDetail.locations[0]}</p>
        <p><span className="jobdetail-head">Dates:</span> {`${jobDetail.start_date} - ${jobDetail.end_date}`}</p>
      </div>
      <footer><a href={jobDetail.url} target="_blank">More details</a></footer>
    </section>
  );
};

export default Result;
