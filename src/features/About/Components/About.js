import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import TEXT from '../../../utils/message.json';

const About = props => {
  return(
    <Container fluid="md" className={props.className}>
    <Row>
      <Col md={12} className="two-grids">
        <div className="wthree_head_section">
          <h3 className="w3l_header">About <span>us</span></h3>
          <p>{TEXT.MESSAGE.SITE.ABOUT_US}
          </p>
        </div>
      </Col>
    </Row>
  </Container>
  );
};

About.propTypes = {
  className: PropTypes.string,
};

export default About;
