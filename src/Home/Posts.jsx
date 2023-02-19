import React from 'react'
import { Container } from 'react-bootstrap';
import './Posts.css';

const Posts = () => {
  return (
    <section className='main-section post-section'>
        <Container>
            <div className="section-heading">
                <div className="section-title">
                    <h2>Featured Posts</h2>
                </div>
                <div className="divider-rule"></div>
            </div>
        </Container>
    </section>
  )
}

export default Posts;
