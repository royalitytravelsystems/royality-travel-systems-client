import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagramSquare, faYoutubeSquare } from '@fortawesome/free-brands-svg-icons';
import { faMobileAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import { FACEBOOK_URL, INSTAGRAM_URL, YOUTUBE_URL } from '../../../utils/Config';

const Header = props => {
  return(
    <div className={props.className + " top"}>
        <Container fluid="md">
            <Row>
              <Col className="top-middle" md={6}>
                <ul>
                  <li><a href={FACEBOOK_URL}><i className="fa fa-facebook"><FontAwesomeIcon icon={faFacebookF}/></i></a></li>
                  <li><a href={INSTAGRAM_URL}><i className="fa fa-instagram"><FontAwesomeIcon icon={faInstagramSquare}/></i></a></li>
                  <li><a href={YOUTUBE_URL}><i className="fa fa-youtube"><FontAwesomeIcon icon={faYoutubeSquare}/></i></a></li>
                </ul>
              </Col>
              <Col className="top-left" md={6}>
                  <ul>
                    <li><i className="fa fa-mobile" aria-hidden="true"><FontAwesomeIcon icon={faMobileAlt}/></i> +91 808686 66993</li>
                    <li><i className="fa fa-map-marker" aria-hidden="true"><FontAwesomeIcon icon={faEnvelope}/></i> info@royalitytravelsystems.com </li>
                  </ul>
                </Col>
            </Row>
        </Container>
  </div>);
};

Header.propTypes = {
  className: PropTypes.string,
};

export default Header;
