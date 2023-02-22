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
        
          <Row className='latest-post latest-Row'>
            <Col className='featured-thumbnail photography-col f-col'>
              <a href="#photograpghy" className="featured-wrapper f-inline-block">
                <div>
                  <div className="category-tag">Photograghy</div>
                  <div className='featured-image'></div>
                </div>
                <div className="featured-text">
                  <div className="featured-title">The Road Ahead</div>
                  <div class="featured-description">The road ahead might be paved - it might not be.</div>
                  <div className="featured-details">
                    <div className="clearfix">
                    <img src="https://assets.website-files.com/5e4b1929fccc7f96f6de825d/5e4b1929fccc7f7389de832c_128-34.jpg" alt="" class="author-img"/>
                      <div className="author-title lite">Mat Vogels</div>
                      <div className="thumbnail-date lite">february 19, 2022</div>
                    </div>
                  </div>
                </div>
              </a>
            </Col>
            <Col className='featured-thumbnail adventure-col f-col'>
              <a href="#adventure" className="featured-wrapper f-inline-block">
                <div>
                  <div className="category-tag-2">ADVENTURE</div>
                  <div className='adventure-image'></div>
                </div>
                <div className="featured-text">
                  <div className="featured-title">From Top To Down</div>
                  <div class="featured-description">Once a year, go somewhere you've never been before.</div>
                  <div className="featured-details">
                    <div className="clearfix">
                    <img src="https://assets.website-files.com/5e4b1929fccc7f96f6de825d/5e4b1929fccc7ff9f8de8335_128-14.jpg" alt="" class="author-img"/>
                      <div className="author-title lite">William Wong</div>
                      <div className="thumbnail-2-date lite">february 20, 2022</div>
                    </div>
                  </div>
                </div>
              </a>
            </Col>
          </Row>  
        </Container >
        <Container className='w-container'>
          <div className="section-heading">
              <div className="section-title">
                  <h2>Most Recents</h2>
              </div>
              <div className="divider-rule"></div>
          </div>
          <Row>
            <Col>
              <a href="#nature" data-w-id="46150442-4efa-9d36-3a4c-20d527e7a6bc" class="thumbnail-wrapper w-inline-block">
                <div class="image-wrapper">
                  <div class="thumbnail-image"></div>
                  <div class="category-tag-3">Nature</div>
                </div>
                <div class="thumbnail-text">
                  <div class="blog-title">Still Standing Tall</div>
                  <div class="preview-text">Life begins at the end of your comfort zone.</div>
                </div>
                <div class="thumb-details w-clearfix">
                  <img src="https://assets.website-files.com/5e4b1929fccc7f96f6de825d/5e4b1929fccc7f7389de832c_128-34.jpg" alt="" class="author-img"/>
                  <div class="author-title">William Wong</div>
                  <div class="thumbnail-date">9/25/2015</div>
                </div>
              </a>
            </Col>
            <Col><a href="#nature" data-w-id="46150442-4efa-9d36-3a4c-20d527e7a6bc" class="thumbnail-wrapper w-inline-block">
                <div class="image-wrapper">
                  <div class="thumbnail-image"></div>
                  <div class="category-tag-3">Nature</div>
                </div>
                <div class="thumbnail-text">
                  <div class="blog-title">Still Standing Tall</div>
                  <div class="preview-text">Life begins at the end of your comfort zone.</div>
                </div>
                <div class="thumb-details w-clearfix">
                  <img src="https://assets.website-files.com/5e4b1929fccc7f96f6de825d/5e4b1929fccc7f7389de832c_128-34.jpg" alt="" class="author-img"/>
                  <div class="author-title">William Wong</div>
                  <div class="thumbnail-date">9/25/2015</div>
                </div>
              </a>
            </Col>
            <Col>
              <a href="#nature" data-w-id="46150442-4efa-9d36-3a4c-20d527e7a6bc" class="thumbnail-wrapper w-inline-block">
                <div class="image-wrapper">
                  <div class="thumbnail-image"></div>
                  <div class="category-tag-3">Nature</div>
                </div>
                <div class="thumbnail-text">
                  <div class="blog-title">Still Standing Tall</div>
                  <div class="preview-text">Life begins at the end of your comfort zone.</div>
                </div>
                <div class="thumb-details w-clearfix">
                  <img src="https://assets.website-files.com/5e4b1929fccc7f96f6de825d/5e4b1929fccc7f7389de832c_128-34.jpg" alt="" class="author-img"/>
                  <div class="author-title">William Wong</div>
                  <div class="thumbnail-date">9/25/2015</div>
                </div>
              </a>
            </Col>
          </Row>
          <Row className='my-4'>
            <Col>
              <a href="#nature" data-w-id="46150442-4efa-9d36-3a4c-20d527e7a6bc" class="thumbnail-wrapper w-inline-block">
                <div class="image-wrapper">
                  <div class="thumbnail-image"></div>
                  <div class="category-tag-3">Nature</div>
                </div>
                <div class="thumbnail-text">
                  <div class="blog-title">Still Standing Tall</div>
                  <div class="preview-text">Life begins at the end of your comfort zone.</div>
                </div>
                <div class="thumb-details w-clearfix">
                  <img src="https://assets.website-files.com/5e4b1929fccc7f96f6de825d/5e4b1929fccc7f7389de832c_128-34.jpg" alt="" class="author-img"/>
                  <div class="author-title">William Wong</div>
                  <div class="thumbnail-date">9/25/2015</div>
                </div>
              </a>
            </Col>
            <Col><a href="#nature" data-w-id="46150442-4efa-9d36-3a4c-20d527e7a6bc" class="thumbnail-wrapper w-inline-block">
                <div class="image-wrapper">
                  <div class="thumbnail-image"></div>
                  <div class="category-tag-3">Nature</div>
                </div>
                <div class="thumbnail-text">
                  <div class="blog-title">Still Standing Tall</div>
                  <div class="preview-text">Life begins at the end of your comfort zone.</div>
                </div>
                <div class="thumb-details w-clearfix">
                  <img src="https://assets.website-files.com/5e4b1929fccc7f96f6de825d/5e4b1929fccc7f7389de832c_128-34.jpg" alt="" class="author-img"/>
                  <div class="author-title">William Wong</div>
                  <div class="thumbnail-date">9/25/2015</div>
                </div>
              </a>
            </Col>
            <Col>
              <a href="#nature" data-w-id="46150442-4efa-9d36-3a4c-20d527e7a6bc" class="thumbnail-wrapper w-inline-block">
                <div class="image-wrapper">
                  <div class="thumbnail-image"></div>
                  <div class="category-tag-3">Nature</div>
                </div>
                <div class="thumbnail-text">
                  <div class="blog-title">Still Standing Tall</div>
                  <div class="preview-text">Life begins at the end of your comfort zone.</div>
                </div>
                <div class="thumb-details w-clearfix">
                  <img src="https://assets.website-files.com/5e4b1929fccc7f96f6de825d/5e4b1929fccc7f7389de832c_128-34.jpg" alt="" class="author-img"/>
                  <div class="author-title">William Wong</div>
                  <div class="thumbnail-date">9/25/2015</div>
                </div>
              </a>
            </Col>
          </Row>
        </Container>
    </section>
  )
}

export default Posts;
