import React from 'react';
import Header from '../components/header';
import FormContainer from './form';
import FormResults from './formResults';

const Root = ()=>{
  return (
    <React.StrictMode>
      <Header />
      <FormContainer />
      <FormResults />
    </React.StrictMode>
  );
};

export default Root;
