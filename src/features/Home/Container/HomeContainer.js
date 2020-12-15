import React, { Component} from 'react';
import PropTypes from 'prop-types';


export class HomeContainer extends Component{

  render(){
    return(
      <div className={this.props.className}>
      Coming Soon ...
     </div>
    );
  }
}

HomeContainer.propTypes = {
  className: PropTypes.string,
};

export default HomeContainer;
