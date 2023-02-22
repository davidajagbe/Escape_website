import React from 'react'
import { Container } from 'react-bootstrap'
import './Head.css';

const Head = () => {
  return (
    <>
    <section className='section1'></section>
    <section className='head-section'>
        <Container>
            <div className='head-content'>
                <div className="head-heading">
                    <h1>Let's do it together.</h1>
                </div>
                <div className="head-subheading">
                    <p>We travel the world in search of stories. Come along for a ride.</p>
                </div>
                <a href="#Latest-post" className='button head-button'>View Latest Posts</a>
            </div>
        </Container>
    </section>
    </>
  )
}

export default Head
