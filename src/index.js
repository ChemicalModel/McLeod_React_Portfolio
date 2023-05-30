import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter

import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Router> {/* Wrap the App component with Router */}
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
