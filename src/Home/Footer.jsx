import React from 'react';
import { Container } from 'react-bootstrap';
import './Footer.css'

const Footer = () => {
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
                  placeholder='Enter Your Email Addresses'
                  className="f-clearfix"
                >
                    <input type="text" className="field-input" />
                </form>
            </div>
        </Container>
        <div className="footer-section">

        </div>
    </section>
  )
}

export default Footer;
