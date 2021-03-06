import React from 'react';
import AsyncLoad from './AsyncLoad';

const Authorization = (componentFunc) => (props) => {
  const isAuthorized = true;
  if (isAuthorized) {
    return (<AsyncLoad {...props} moduleProvider={componentFunc}></AsyncLoad>);
  }
};

export default Authorization;
