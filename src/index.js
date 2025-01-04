import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Optional: Import your global styles
import App from './components/App'; // Import the App component
import './styles.css';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
