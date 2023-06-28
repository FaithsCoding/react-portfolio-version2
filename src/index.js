// Importing necessary modules and styles
import React from 'react';  // React library for building user interfaces
import ReactDOM from 'react-dom/client';  // DOM-specific methods, in the `client` object, for React 
import './index.css';  // Importing styles for the application
import App from './App';  // Importing main App component
import reportWebVitals from './reportWebVitals';  // Importing function for reporting web vitals

// Creating a root node to render the application. `createRoot` is part of the new concurrent mode in React
const root = ReactDOM.createRoot(document.getElementById('root'));

// Rendering the App component inside this root node in strict mode
// StrictMode is a tool for highlighting potential problems in an application. Like Fragment, StrictMode does not render any visible UI
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Start measuring performance in your app by invoking the `reportWebVitals` function
// It can be passed a function to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
