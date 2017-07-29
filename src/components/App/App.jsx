import React, { Component } from 'react';
import { observer } from 'mobx-react';
import DevTools from 'mobx-react-devtools';

import { Auth } from '../Auth';
import { Root } from '../Root'

@observer
class App extends Component {
  componentDidMount() {
    this.props.authStore.refLogin();
  }

  render() {
    return (
      <div>
        { this.props.authStore.isLoggedin ? <Root authStore={this.props.authStore} /> : <Auth authStore={this.props.authStore} /> }
      </div>
    )
  }
};

export default App;
