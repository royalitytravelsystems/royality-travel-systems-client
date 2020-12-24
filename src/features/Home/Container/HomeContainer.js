import React, { Component} from 'react';
import PropTypes from 'prop-types';
import { BannerComponent } from '../StyledComponents/BannerComponent';
import { WelcomeComponent } from '../StyledComponents/WelcomeComponent';
import { ServicesComponent } from '../StyledComponents/Services';

export class HomeContainer extends Component{

  render(){
    return(
      <main className={this.props.className}>
        <BannerComponent />
        <WelcomeComponent />
        <ServicesComponent />
      </main>
    );
  }
}

HomeContainer.propTypes = {
  className: PropTypes.string,
};

export default HomeContainer;
