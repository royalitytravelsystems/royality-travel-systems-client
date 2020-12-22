import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Slide1 from './../../../assets/images/Slide1.jpg';

const Banner = props => {
  return(
    <Container fluid="md" className={props.className}>
      <Row>
        <Col md={12} className="cover-column">
          <div>
            <img
              className="d-block"
              src={Slide1}
              alt="Second slide"
            />
          </div>
          <div className="cover-caption">Discover your favorite places with us</div>
          <div className="cover-text">Travel to your dream destination without going around in circles</div>
        </Col>
      </Row>
    </Container>
  );
};

Banner.propTypes = {
  className: PropTypes.string,
};

export default Banner;
