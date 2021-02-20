import React from 'react';
import ReactDOM from 'react-dom';
import HomePage from '@/pages/home';

ReactDOM.render(
  <React.StrictMode>
    <HomePage />
  </React.StrictMode>,
  document.getElementById('root'),
);

if (import.meta.hot) {
  import.meta.hot.accept();
}
