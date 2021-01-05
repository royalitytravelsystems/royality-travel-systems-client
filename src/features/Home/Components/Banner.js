import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Slide1 from './../../../assets/images/TravelPlans.svg';
// import TEXT from '../../../utils/message.json';

const Banner = props => {
  return(
    <Container fluid="md" className={props.className}>
      <Row>
          <Col md={7} xs={7} className="two-grids">
            <div className="wthree_head_section">
              <h3 className="w3l_header">Discover <span>your favorite places with us</span></h3>
            </div>
          </Col>
          <Col md={5} xs={5}>
          <div>
            <img
              className="d-block"
              src={Slide1}
              alt="Second slide"
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

Banner.propTypes = {
  className: PropTypes.string,
};

export default Banner;
