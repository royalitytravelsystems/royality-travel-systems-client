import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFacebookF, faInstagramSquare, faYoutubeSquare } from '@fortawesome/free-brands-svg-icons';
import { faSuitcase, faUser, faCar, faTaxi } from '@fortawesome/free-solid-svg-icons';
// import { FACEBOOK_URL, INSTAGRAM_URL, YOUTUBE_URL } from '../../../utils/Config';
import TEXT from '../../../utils/message.json';

const Services = props => {
  return(
    <footer className={props.className}>
      <Container fluid="md">
        <Row>
          <Col md={12} className="two-grids">
            <div className="wthree_head_section">
              <h3 className="w3l_header">Our <span>Services</span></h3>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={6} className="w3_two_grid_right">
            <Row className="w3_two_grid_right1">
              <Col xs="3" className="w3_two_grid_right_grid">
                <div className="w3_two_grid_right_grid1">
                  <i className="fa fa-building" aria-hidden="true">
                    <FontAwesomeIcon icon={faSuitcase}/>
                  </i>
                </div>
              </Col>
              <Col xs={9} className="w3_two_grid_right_gridr">
                <h4>Tour Packages</h4>
                <p>{TEXT.MESSAGE.SERVICES.EASY_TRIP_PLANNING}</p>
              </Col>
            </Row>
          </Col>
          <Col md={6} className="w3_two_grid_right">
            <Row className="w3_two_grid_right1">
                <Col xs="3" className="w3_two_grid_right_grid">
                  <div className="w3_two_grid_right_grid1">
                    <i className="fa fa-building" aria-hidden="true">
                      <FontAwesomeIcon icon={faUser}/>
                    </i>
                  </div>
                </Col>
                <Col xs={9} className="w3_two_grid_right_gridr">
                  <h4>Seasoned Agents</h4>
                  <p>{TEXT.MESSAGE.SERVICES.SEASONED_AGENTS}</p>
                </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col md={6} className="w3_two_grid_right">
            <Row className="w3_two_grid_right1">
              <Col xs="3" className="w3_two_grid_right_grid">
                <div className="w3_two_grid_right_grid1">
                  <i className="fa fa-building" aria-hidden="true">
                    <FontAwesomeIcon icon={faCar}/>
                  </i>
                </div>
              </Col>
              <Col xs={9} className="w3_two_grid_right_gridr">
                <h4>Cab services</h4>
                <p>{TEXT.MESSAGE.SERVICES.CAB_SERVICES}</p>
              </Col>
            </Row>
          </Col>
          <Col md={6} className="w3_two_grid_right">
            <Row className="w3_two_grid_right1">
                <Col xs="3" className="w3_two_grid_right_grid">
                  <div className="w3_two_grid_right_grid1">
                    <i className="fa fa-building" aria-hidden="true">
                      <FontAwesomeIcon icon={faTaxi}/>
                    </i>
                  </div>
                </Col>
                <Col xs={9} className="w3_two_grid_right_gridr">
                  <h4>One way cab services</h4>
                  <p>{TEXT.MESSAGE.SERVICES.ONE_WAY_CAB_SERVICES}</p>
                </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </footer>);
};

Services.propTypes = {
  className: PropTypes.string,
};

export default Services;
