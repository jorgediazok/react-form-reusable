import React, { useState } from 'react';
import FormSignUp from './FormSignUp';
import FormSuccess from './FormSuccess';
import './Form.css';

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }

  return (
    <React.Fragment>
      <div className="form-container">
        <span className="close-btn"></span>
        <div className="form-content-left">
          <img src="images/img-2.svg" alt="spaceship" className="form-img" />
        </div>
        {!isSubmitted ? (
          <FormSignUp submitForm={submitForm} />
        ) : (
          <FormSuccess />
        )}
      </div>
    </React.Fragment>
  );
};

export default Form;
