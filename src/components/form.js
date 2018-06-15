import React from 'react';
import { Field, reduxForm } from 'redux-form';

const validate = (values)=>{
    const errors = {};
    if (!values.searchBar) {
      errors.searchBar = 'Required'
    }else if (values.searchBar.length<2 || values.searchBar.length>50) {
      errors.searchBar = "must be 2 to 50 characters"
    }else if (/[^a-zA-Z0-9, ]/i.test(values.searchBar)) {
      errors.searchBar = "Only alphanumeric characters"
    }
    return errors;
};

const renderField = ({
  input,
  type,
  meta:{touched, error},
})=>(
  <React.Fragment>
    <input
      {...input}
      type={type}
      placeholder="Search Jobs..."
      id={input.name}
      autoComplete = "true"
      className={(error)?(touched)?"error-highlight": undefined : undefined}
    />
    {touched &&
        (error && <p className="field-error">{error}</p>)
    }
  </React.Fragment>
);

const Form = ({ handleSubmit, submitting})=>{
  return (
    <form onSubmit={handleSubmit}>
      <div className="srchBar">
        <button type="submit" disabled={submitting} className="srch-btn">
          <span className="srch-icon">
            <svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5
                0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49
                19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14
                7.01 14 9.5 11.99 14 9.5 14z">
              </path>
            </svg>
          </span>
        </button>
        <Field name="searchBar"
               component={renderField}
               type="text"/>
      </div>
    </form>
  );
};

export default reduxForm({
  form: 'searchBar',
  validate,
})(Form);
