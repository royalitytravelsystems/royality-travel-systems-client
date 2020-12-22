import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import TEXT from './../message.json';

const WelcomeTitle = props => {
  return(
    <Container fluid="md" className={props.className}>
      <Row>
        <Col md={12} className="two-grids">
          <div className="wthree_head_section">
            <h3 className="w3l_header">Welcome to <span>{TEXT.MESSAGE.SITE.NAME}</span></h3>
            <p>{TEXT.MESSAGE.SITE.DESC}
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

WelcomeTitle.propTypes = {
  className: PropTypes.string,
};

export default WelcomeTitle;
