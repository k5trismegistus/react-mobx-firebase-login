import React, { Component } from 'react';
import { observer } from 'mobx-react';
import DevTools from 'mobx-react-devtools';

@observer
class Auth extends Component {

  render() {
    return (
      <div>
        <div>
          ログインしてね
        </div>
        <div>
          <button onClick={this.props.authStore.doLogin}>Login</button>
        </div>
      </div>
    )
  }
};

export default Auth;
