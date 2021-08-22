import React, { useState, useEffect } from 'react';

import Context from './Context';

function ContextProvider({ children }) {
  const [state, setState] = useState({ questions: [] });
  const [questionIndex, setQuestionIndex] = useState(-1);

  useEffect(() => {
    console.log('updating question index after updating questions');
    setQuestionIndex(state.questions.length - 1);
  }, [state.questions]);

  function addQuestion() {
    setState(state => ({
      questions: [...state.questions, { choices: [] }]
    }));
  }

  function addChoice(choice) {
    console.log(questionIndex);
    if (questionIndex > -1) {
      const question = state.questions[questionIndex];

      if (questionIndex > 0) {
        // there are more than 1 questions
        setState({
          questions: [
            ...state.questions.slice(0, questionIndex),
            {
              ...question,
              choices: [...question.choices, choice]
            },
            ...state.questions.slice(questionIndex)
          ]
        });
      } else {
        // there is only one question added so far
        setState({
          questions: [
            {
              ...question,
              choices: [...question.choices, choice]
            }
          ]
        });
      }
    }
  }

  return (
    <Context.Provider
      value={{
        state,
        questionIndex,
        setQuestionIndex,
        addQuestion,
        addChoice
      }}
    >
      {children}
    </Context.Provider>
  );
}

export default ContextProvider;
