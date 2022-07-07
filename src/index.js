import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import QuestionProvider from './components/QuestionProvider';

// TODO: Manage Error in retrieving JSON
const root = ReactDOM.createRoot(document.getElementById('quiz-content'));
root.render(
  <React.StrictMode>
    <QuestionProvider>
      <App />
    </QuestionProvider>
  </React.StrictMode>
);
