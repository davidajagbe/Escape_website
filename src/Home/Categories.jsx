import React from 'react'
import { Container } from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import './Categories.css'

const Categories = () => {
  return (
    <section className='Category-section ' >
        <Container>
            <Row className='category-row'>
                <Col className='category-wrapper'>
                    <a href="#nature" className="category-link">Nature</a>
                </Col>
                <Col className='category-wrapper'>
                    <a href="#photography" class="category-link">Photography</a>
                </Col>
                <Col className='category-wrapper'>
                    <a href="#relaxation" class="category-link">Relaxation</a>
                </Col>
                <Col className='category-wrapper'>
                    <a href="#vacation" class="category-link">Vacation</a>
                </Col>
                <Col className='category-wrapper'>
                    <a href="#travel" class="category-link">Travel</a>
                </Col>
                <Col className='category-wrapper'>
                    <a href="#adventure" class="category-link">Adventure</a>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Categories;
