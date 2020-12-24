import React from 'react';
import PropTypes from 'prop-types';
import { FooterComponent } from '../StyledComponents/Footer';



const FooterContainer = () => {
  return(
    <FooterComponent />
  );
};

FooterContainer.propTypes = {
  className: PropTypes.string,
  history: PropTypes.object,
  location:PropTypes.object,
};

export default FooterContainer;
