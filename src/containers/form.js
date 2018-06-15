import Form from '../components/form';
import React from 'react';
import { fetchJobs } from '../actions/actions';
import { connect } from 'react-redux';

const FormContainer = ({ fetchJobs })=>{
  return (
    <Form onSubmit = {fetchJobs} />
  );
}

export default connect(
  null,
  { fetchJobs }
)(FormContainer);
