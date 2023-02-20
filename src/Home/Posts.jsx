import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import './Posts.css';

const Posts = () => {
  return (
    <section className='main-section post-section'>
        <Container className='featured-post'>
          <div className="section-heading">
              <div className="section-title">
                  <h2>Featured Posts</h2>
              </div>
              <div className="divider-rule"></div>
          </div>
        </Container >
        <Row className='latest-post latest-Row'>
          <Col className='featured-thumbnail photography-col f-col'>
            <a href="#photograpghy" className="featured-wrapper f-inline-block">
              <div>
                <div className="category-tag">Photograghy</div>
                <div className='featured-image'></div>
              </div>
              <div className="featured-text">
                <div className="featured-title">The Road Ahead</div>
                <div class="featured-description"><p> The road ahead might be paved - it might not be.</p></div>
                <div className="featured-details">
                  <div className="clearfix">
                    <img src="" alt="" className='author-img'/>
                    <div className="author-title lite"></div>
                    <div className="thumbnail date lite"></div>
                  </div>
                </div>
              </div>
            </a>
          </Col>
          <Col className='featured-thumbnail adventure-col f-col'>
            <a href="#adventure" className="featured-wrapper f-inline-block">

            </a>
          </Col>
        </Row>
    </section>
  )
}

export default Posts;
