import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagramSquare, faYoutubeSquare } from '@fortawesome/free-brands-svg-icons';
import { faMobileAlt, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import { FACEBOOK_URL, INSTAGRAM_URL, YOUTUBE_URL } from '../../../utils/Config';
import TEXT from '../../../utils/message.json';

const Footer = props => {
  return(
    <footer className={props.className}>
      <Container fluid="md">
        <Row>
          <Col md={4} className="agile_footer_grid">
            <h3>Contact Info</h3>
            <ul className="w3_address">
            <li><i><FontAwesomeIcon icon={faMapMarkerAlt} /></i>{TEXT.MESSAGE.CONTACT_US.ADDRESS} <span>{TEXT.MESSAGE.CONTACT_US.CITY}</span></li>
            <li><i><FontAwesomeIcon icon={faEnvelope} /></i><a href={TEXT.MESSAGE.CONTACT_US.EMAIL}>{TEXT.MESSAGE.CONTACT_US.EMAIL}</a></li>
            <li><i><FontAwesomeIcon icon={faMobileAlt} /></i>{TEXT.MESSAGE.CONTACT_US.PHONE}</li>
            </ul>
          </Col>
          <Col md={4} className="agile_footer_grid">
            <h3>About Us</h3>
            <p>{TEXT.MESSAGE.SITE.DESC}</p>
            <ul className="agileits_social_list">
                <li><a href={FACEBOOK_URL} className="w3_agile_facebook"><i className="fa fa-facebook"><FontAwesomeIcon icon={faFacebookF} /></i></a></li>
                <li><a href={INSTAGRAM_URL} className="w3_agile_instagram"><i className="fa fa-instagram"><FontAwesomeIcon icon={faInstagramSquare}/></i></a></li>
                <li><a href={YOUTUBE_URL} className="w3_agile_youtube"><i className="fa fa-youtube"><FontAwesomeIcon icon={faYoutubeSquare}/></i></a></li>
            </ul>
          </Col>
          <Col md={4} className="agile_footer_grid"></Col>
        </Row>
      </Container>
    </footer>);
};

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
