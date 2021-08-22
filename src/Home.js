import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Context from './Context';

function Home() {
  const history = useHistory();
  const { state, getQuizName, setQuizName, addQuestion } = useContext(Context);

  return (
    <div>
      <h1>Quiz Creator</h1>
      <p>Start by adding some questions</p>
      <div>
        <label>Quiz Name</label>
        <input
          type="text"
          name="quizName"
          value={getQuizName()}
          onChange={e => setQuizName(e.target.value)}
        />
      </div>
      <div class="emptyPanel">
        <span>No questions added</span>
        <button
          class="addButton"
          onClick={() => {
            addQuestion('', 'singleChoice');
            history.push('addQuestion');
          }}
        >
          Add question
        </button>
      </div>
      <div
        style={{ marginTop: 5, display: 'flex', flexDirection: 'row-reverse' }}
      >
        <button class="addButton">Create Quiz</button>
        <button class="cancelButton">Reset</button>
      </div>
      <div>
        <pre>{JSON.stringify(state, null, 2)}</pre>
      </div>
    </div>
  );
}

export default Home;
