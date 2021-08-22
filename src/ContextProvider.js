import React, { useState, useEffect } from 'react';

import Context from './Context';

function ContextProvider({ children }) {
  const [state, setState] = useState({
    name: '',
    maximumTime: 3600,
    questions: []
  });
  const [questionIndex, setQuestionIndex] = useState(-1);

  useEffect(() => {
    setQuestionIndex(state.questions.length - 1);
  }, [state.questions]);

  function getQuizName() {
    return state.name;
  }

  function getMaximumTime() {
    return state.maximumTime;
  }

  function setMaximumTime(maximumTime) {
    setState(state => ({
      ...state,
      maximumTime
    }));
  }

  function setQuizName(name) {
    setState({
      ...state,
      name
    });
  }

  function updateQuestion(text) {
    const question = state.questions[questionIndex];
    if (questionIndex == 0) {
      setState({
        ...state,
        questions: [
          {
            ...question,
            text
          }
        ]
      });
    } else if (questionIndex > 0) {
      setState({
        ...state,
        questions: [
          ...state.questions.slice(0, questionIndex),
          {
            ...question,
            text
          },
          ...state.questions.slice(questionIndex)
        ]
      });
    }
  }

  function addQuestion() {
    setState(state => ({
      ...state,
      questions: [...state.questions, { choices: [] }]
    }));
  }

  function getCurrentQuestion() {
    return state.questions[questionIndex];
  }

  function addChoice(choice) {
    if (questionIndex == 0) {
      // there is only one question added so far
      const question = state.questions[questionIndex];

      setState(state => ({
        ...state,
        questions: [
          {
            ...getCurrentQuestion(),
            choices: [...question.choices.filter(Boolean), choice]
          }
        ]
      }));
    } else if (questionIndex > 0) {
      // there are more than 1 questions

      const question = getCurrentQuestion();
      setState(state => ({
        ...state,
        questions: [
          ...state.questions.slice(0, questionIndex),
          {
            ...question,
            choices: [...question.choices.filter(Boolean), choice]
          },
          ...state.questions.slice(questionIndex)
        ]
      }));
    }
  }

  return (
    <Context.Provider
      value={{
        state,
        getQuizName,
        setQuizName,
        getMaximumTime,
        setMaximumTime,
        getCurrentQuestion,
        addQuestion,
        addChoice,
        updateQuestion
      }}
    >
      {children}
    </Context.Provider>
  );
}

export default ContextProvider;
