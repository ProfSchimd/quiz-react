import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// TODO: Manage Error in retrieving JSON
const root = ReactDOM.createRoot(document.getElementById('quiz-content'));
fetch("questions.json")
  .then(response => response.json())
  .then(json => root.render(
    <React.StrictMode>
      <App questions={json} />
    </React.StrictMode>
  ));


