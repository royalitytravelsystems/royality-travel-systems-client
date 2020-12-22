import React from 'react';
import PropTypes from 'prop-types';
import { HeaderComponent } from '../StyledComponents/Header';
import { TopBarComponent } from '../StyledComponents/TopBar';



const HeaderContainer = props => {
  return(
  <header className={props.className}>
    <HeaderComponent />
    <TopBarComponent location={props.location} />
  </header>);
};

HeaderContainer.propTypes = {
  className: PropTypes.string,
  history: PropTypes.object,
  location:PropTypes.object,
};

export default HeaderContainer;
