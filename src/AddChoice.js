import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Context from './Context';

function AddChoice() {
  const history = useHistory();
  const [choice, setChoice] = useState(null);
  const { questionIndex, addChoice } = useContext(Context);
  return (
    <div>
      <h1>Add choice</h1>
      <form>
        <div style={{ marginBottom: '10px' }}>
          <label>Question</label>
          <input type="text" name="question" value={questionIndex} disabled />
        </div>
        <div>
          <label>Choice</label>
          <input
            type="text"
            name="question"
            onChange={e => setChoice(e.target.value)}
          />
        </div>
        <div style={{ marginTop: '10px' }}>
          <button
            class="addButton"
            onClick={() => {
              addChoice(choice);
              history.push('/addQuestion');
            }}
          >
            Add Choice
          </button>
          <button
            class="cancelButton"
            onClick={() => history.push('/addQuestion')}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddChoice;
