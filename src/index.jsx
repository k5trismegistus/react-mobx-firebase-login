import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { AuthStore } from './stores/AuthStore';
import { App } from './components/App';
import { firebaseApp } from './util/firebase/initializer'

const authStore = new AuthStore();

render(
  <AppContainer>
    <App authStore={authStore} />
  </AppContainer>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept('./components/App/App', () => {
    const NextApp = require('./components/App/App').default;

    render(
      <AppContainer>
        <NextApp authStore={authStore} />
      </AppContainer>,
      document.getElementById('root')
    );
  });
}
