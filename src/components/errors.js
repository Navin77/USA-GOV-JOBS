import React from 'react';

const Errors = (props: Props)=>{
  const { err } = props;

      if (err === "no jobs") {
        return(
          <React.Fragment>
            <h3>Currently, no jobs available for your search term</h3>
            <p>Maybe, you have entered incorrectly.</p>
            <p>you can retry with similar search term.</p>
          </React.Fragment>
        );
      } else {
        return(
          <React.Fragment>
            <p>Pardon, error occured somewhere. Please, search after few seconds</p>
          </React.Fragment>
        );
      }
};

export default Errors;
