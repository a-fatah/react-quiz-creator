import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Context from './Context';

function AddQuestion() {
  const history = useHistory();
  const { getCurrentQuestion, updateQuestion, addChoice } = useContext(Context);

  const currentQuestion = getCurrentQuestion() || {};

  return (
    <div>
      <h1>Add question</h1>

      <div>
        <label>Question</label>
        <input
          type="text"
          name="question"
          value={currentQuestion.text}
          onChange={e => updateQuestion(e.target.value)}
        />
      </div>
      <div class="emptyPanel">
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
        <button class="cancelButton" onClick={() => history.push('/')}>
          &lt; Go Back
        </button>
      </div>
    </div>
  );
}

export default AddQuestion;
