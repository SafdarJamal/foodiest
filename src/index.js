import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import Firebase, { FirebaseContext } from './services/firebase';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './containers/App';
import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <FirebaseContext.Provider value={new Firebase()}>
      <Router>
        <App />
      </Router>
    </FirebaseContext.Provider>
  </Provider>,
  document.getElementById('root')
);
