import React, { Component } from 'react';
import { observer } from 'mobx-react';
import DevTools from 'mobx-react-devtools';

@observer
class Root extends Component {
  render() {
    return (
      <div>
        <div>
          こんにちはー {this.props.authStore.displayName} さん
        </div>
        <div>
          <button onClick={this.props.authStore.doLogout}>Logout</button>
        </div>
      </div>
    )
  }
};

export default Root;
