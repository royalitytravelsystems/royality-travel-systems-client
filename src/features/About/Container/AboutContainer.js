import React, { Component} from 'react';
import PropTypes from 'prop-types';
import About from '../Components/About';


export class AboutContainer extends Component{

  render(){
    return(
      <div className={this.props.className}>
      <About />
     </div>
    );
  }
}

AboutContainer.propTypes = {
  className: PropTypes.string,
};

export default AboutContainer;
