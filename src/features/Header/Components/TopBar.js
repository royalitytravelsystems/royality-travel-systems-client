import React from 'react';
import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap';
import PropTypes from 'prop-types';
import logo from './../../../assets/images/tour.png';

const TopBar = props => {
  const { location } = props;
  return(
    <div className={ props.className+ " top-bar"}>
      <Container fluid="md">
        <Row>
          <Col className="header">
            <Navbar className="navbar navbar-default" expand="lg">
            <Navbar.Brand href="/">
            <img src={logo} className="navbar-logo" alt="Royality logo"/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"  />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="cl-effect-15 nav navbar-nav" as="ul" variant="pills" activeKey={location.pathname}>
                <Nav.Item as="li">
                  <Nav.Link href="/">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                  <Nav.Link href="/about">About</Nav.Link>
                </Nav.Item>
              </Nav>
            </Navbar.Collapse>
            </Navbar>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

TopBar.propTypes = {
  className: PropTypes.string,
  location: PropTypes.object,
};

export default TopBar;
