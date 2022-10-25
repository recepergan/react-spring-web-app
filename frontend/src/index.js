import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './bootstrap-override.scss';
import App from './App';
import UserSignupPage from './pages/UserSignupPage';
import LoginPage from './pages/LoginPage';
import * as serviceWorker from './serviceWorker';
import './i18n';
import LanguageSelector from './components/LanguageSelector';

ReactDOM.render(
  <div>
    <UserSignupPage />
    <LanguageSelector />
  </div>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();