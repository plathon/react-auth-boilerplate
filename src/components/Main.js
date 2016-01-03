require('normalize.css');

import React from 'react';
import SignUp from './SignUp';
//import SignIn from './SignIn';

class AppComponent extends React.Component {
  render() {
    return (
      <SignUp />
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
