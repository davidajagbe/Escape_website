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
          <Row className='thumbnailpost'>
            <Col>
              <a href="#nature" data-w-id="46150442-4efa-9d36-3a4c-20d527e7a6bc" class="thumbnail-wrapper w-inline-block">
                <div class="image-wrapper">
                  <div class="thumbnail-image"></div>
                  <div class="category-tag-3 bg-primary">Nature</div>
                </div>
                <div class="thumbnail-text">
                  <div class="blog-title">Still Standing Tall</div>
                  <div class="preview-text">Life begins at the end of your comfort zone.</div>
                </div>
                <div class="thumb-details w-clearfix">
                  <img src="https://assets.website-files.com/5e4b1929fccc7f96f6de825d/5e4b1929fccc7f7389de832c_128-34.jpg" alt="" class="author-img"/>
                  <div class="author-title">William Wong</div>
                  <div class="thumbnail-date">1/25/2021</div>
                </div>
              </a>
            </Col>
            <Col><a href="#nature" data-w-id="46150442-4efa-9d36-3a4c-20d527e7a6bc" class="thumbnail-wrapper w-inline-block">
                <div class="image-wrapper">
                  <div class="thumbnail-image" style={{backgroundImage: "url(https://assets.website-files.com/5e4b1929fccc7f96f6de825d/5e4b1929fccc7f1017de8349_photo-1433155327100-12aac6a14ff1.jpg)"}}></div>
                  <div class="category-tag-3 bg-warning">PHOTOGRAPHY</div>
                </div>
                <div class="thumbnail-text">
                  <div class="blog-title">Sunny Side Up</div>
                  <div class="preview-text">No place is ever as bad as they tell you it's going to be.</div>
                </div>
                <div class="thumb-details w-clearfix">
                  <img src="https://assets.website-files.com/5e4b1929fccc7f96f6de825d/5e4b1929fccc7f7389de832c_128-34.jpg" alt="" class="author-img"/>
                  <div class="author-title">Mat Vogels</div>
                  <div class="thumbnail-date">2/23/2022</div>
                </div>
              </a>
            </Col>
            <Col>
              <a href="#nature" data-w-id="46150442-4efa-9d36-3a4c-20d527e7a6bc" class="thumbnail-wrapper w-inline-block">
                <div class="image-wrapper">
                  <div class="thumbnail-image" style={{backgroundImage: "url(https://assets.website-files.com/5e4b1929fccc7f96f6de825d/5e4b1929fccc7f5e3ede8340_photo-1441906363162-903afd0d3d52.jpg)"}}></div>
                  <div class="category-tag-3 bg-info">TRAVEL</div>
                </div>
                <div class="thumbnail-text">
                  <div class="blog-title">Water Falls</div>
                  <div class="preview-text">We travel to escape, but for life not to escape us.</div>
                </div>
                <div class="thumb-details w-clearfix">
                  <img src="https://assets.website-files.com/5e4b1929fccc7f96f6de825d/5e4b1929fccc7f7389de832c_128-34.jpg" alt="" class="author-img"/>
                  <div class="author-title">William Wong</div>
                  <div class="thumbnail-date">9/25/2022</div>
                </div>
              </a>
            </Col>
          </Row>
          <Row className='my-4'>
            <Col>
              <a href="#nature" data-w-id="46150442-4efa-9d36-3a4c-20d527e7a6bc" class="thumbnail-wrapper w-inline-block">
                <div class="image-wrapper">
                  <div class="thumbnail-image" style={{backgroundImage: "url(https://assets.website-files.com/5e4b1929fccc7f96f6de825d/5e4b1929fccc7f7caade8338_photo-1431329842981-433c8635c2b9.jpg)"}}></div>
                  <div class="category-tag-3 bg-danger">VACATION</div>
                </div>
                <div class="thumbnail-text">
                  <div class="blog-title">Awaken Early </div>
                  <div class="preview-text">Not all those who wander are lost.</div>
                </div>
                <div class="thumb-details w-clearfix">
                  <img src="https://assets.website-files.com/5e4b1929fccc7f96f6de825d/5e4b1929fccc7f7389de832c_128-34.jpg" alt="" class="author-img"/>
                  <div class="author-title">William Wong</div>
                  <div class="thumbnail-date">1/25/2022</div>
                </div>
              </a>
            </Col>
            <Col><a href="#nature" data-w-id="46150442-4efa-9d36-3a4c-20d527e7a6bc" class="thumbnail-wrapper w-inline-block">
                <div class="image-wrapper">
                  <div class="thumbnail-image" style={{backgroundImage: "url(https://assets.website-files.com/5e4b1929fccc7f96f6de825d/5e4b1929fccc7f0ea0de8344_photo-1433878455169-4698e60005b1.jpg)"}}></div>
                  <div class="category-tag-3 bg-success">TRAVEL</div>
                </div>
                <div class="thumbnail-text">
                  <div class="blog-title">Try It Always</div>
                  <div class="preview-text">The world is a book, and those who do not travel only read one page.</div>
                </div>
                <div class="thumb-details w-clearfix">
                  <img src="https://assets.website-files.com/5e4b1929fccc7f96f6de825d/5e4b1929fccc7f7389de832c_128-34.jpg" alt="" class="author-img"/>
                  <div class="author-title">William Wong</div>
                  <div class="thumbnail-date">1/25/2022</div>
                </div>
              </a>
            </Col>
            <Col>
              <a href="#nature" data-w-id="46150442-4efa-9d36-3a4c-20d527e7a6bc" class="thumbnail-wrapper w-inline-block">
                <div class="image-wrapper">
                  <div class="thumbnail-image" style={{backgroundImage: "url(https://assets.website-files.com/5e4b1929fccc7f96f6de825d/5e4b1929fccc7f9857de8342_photo-1442347504183-965bd14449ac.jpg)"}}></div>
                  <div class="category-tag-3 bg-dark">ADVENTURE</div>
                </div>
                <div class="thumbnail-text">
                  <div class="blog-title">Through The Mist</div>
                  <div class="preview-text">Travel makes you see what a tiny place you occupy in the world.</div>
                </div>
                <div class="thumb-details w-clearfix">
                  <img src="https://assets.website-files.com/5e4b1929fccc7f96f6de825d/5e4b1929fccc7f7389de832c_128-34.jpg" alt="" class="author-img"/>
                  <div class="author-title">William Vogels</div>
                  <div class="thumbnail-date">9/25/2021</div>
                </div>
              </a>
            </Col>
          </Row>
        </Container>
    </section>
  )
}

export default Posts;
