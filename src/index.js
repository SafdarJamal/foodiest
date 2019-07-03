import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css';

import { Provider } from 'react-redux';
import store from './store';

import Firebase, { FirebaseContext } from './firebase';

ReactDOM.render(
  <Provider store={store}>
    <FirebaseContext.Provider value={new Firebase()}>
      <div>
        <App />
      </div>
    </FirebaseContext.Provider>
  </Provider>,
  document.getElementById('root')
);
