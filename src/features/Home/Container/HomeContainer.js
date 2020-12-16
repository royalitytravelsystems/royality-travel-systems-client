import React, { Component} from 'react';
import PropTypes from 'prop-types';
import { ControlledCarousal } from '../StyledComponents/Carousal';

export class HomeContainer extends Component{

  render(){
    return(
      <div className={this.props.className}>
      <ControlledCarousal />
     </div>
    );
  }
}

HomeContainer.propTypes = {
  className: PropTypes.string,
};

export default HomeContainer;
