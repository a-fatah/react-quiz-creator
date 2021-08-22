import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Context from './Context';

function AddQuestion() {
  const history = useHistory();
  const { addQuestion, addChoice, setQuestionIndex, state } = useContext(
    Context
  );
  const questionsCount = state.questions.length;

  return (
    <div>
      <p>{JSON.stringify(state)}</p>
      <h1>Add question</h1>

      <div>
        <label>Question</label>
        <input type="text" name="question" />
      </div>
      <div class="listPanel">
        <span>No choices added</span>
        <button
          class="addButton"
          onClick={() => {
            addChoice();
            history.push('addChoice');
          }}
        >
          Add choice
        </button>
      </div>
      <div
        style={{ marginTop: 5, display: 'flex', flexDirection: 'row-reverse' }}
      >
        <button class="addButton">Save</button>
        <button class="cancelButton" onClick={() => history.push('/')}>
          Cancel
        </button>
      </div>
    </div>
  );
}

export default AddQuestion;
