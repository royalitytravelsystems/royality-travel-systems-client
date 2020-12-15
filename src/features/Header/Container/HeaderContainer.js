import React from 'react';
import PropTypes from 'prop-types';
import { HeaderComponent } from '../StyledComponents/Header';
import { TopBarComponent } from '../StyledComponents/TopBar';


const HeaderContainer = props => {
  return(
  <div className={props.className}>
    <HeaderComponent />
    <TopBarComponent />
  </div>);
};

HeaderContainer.propTypes = {
  className: PropTypes.string,
  history: PropTypes.object,
};

export default HeaderContainer;
