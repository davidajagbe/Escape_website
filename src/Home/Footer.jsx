import React from 'react';
import { Container } from 'react-bootstrap';
import './Footer.css'

const Footer = () => {
  const message = false;

  if (message === onclick.Submit){
    <div className={message}>
      <p>Thank you! Your submission has been received!</p>
    </div>
  }
  else{
    <div class="w-form-fail">
      <p>Oops! Something went wrong while submitting the form</p>
    </div>
  }
  return (
    <section className='main-section dark f-section'>
        <Container className='f-container'>
            <div className="section-heading">
                <h2 className='white'>
                    Stay in Touch
                </h2>
                <div className="med-divider"></div>
            </div>
            <div className="form-wrapper w-form">
              <form 
                name='email-form'
                method='get'
                className="f-clearfix"
              >
                <div class="input-group mt-3 border-0">
                  <input type='text' className='form-control' placeHolder='Enter your Email Address' ariaLabel='Enter your Email Address' ariaDescribedby='button-addon2' required=""/>
                  <button className='btn btn-secondary' type='submit' id='button-addon2' value={"Submit"} dataWait="Please wait..." onClick={"Submit"}>Submit</button>
                </div>
              </form>
            </div>
        </Container>
        <div className="footer-section">

        </div>
    </section>
  )
}

export default Footer;
