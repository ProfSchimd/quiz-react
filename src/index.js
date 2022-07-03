import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { preprocessQuestions } from './util';

export const QuestionContext = createContext();

// TODO: Manage Error in retrieving JSON
const root = ReactDOM.createRoot(document.getElementById('quiz-content'));
fetch("questions.json")
  .then(response => response.json())
  .then(json => root.render(
    <React.StrictMode>
      <QuestionContext.Provider value={preprocessQuestions(json)}>
        <App />
      </QuestionContext.Provider>
    </React.StrictMode>
  ));


