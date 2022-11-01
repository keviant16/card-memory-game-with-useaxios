import React, { createContext, useState } from 'react';
import './App.css';
import Game from './components/Game/Game';

export const StateContext = createContext()
export const QUESTION_MARK = "?"
const initialState = {
  images: [
    QUESTION_MARK, QUESTION_MARK, QUESTION_MARK, QUESTION_MARK,
    QUESTION_MARK, QUESTION_MARK, QUESTION_MARK, QUESTION_MARK,
    QUESTION_MARK, QUESTION_MARK, QUESTION_MARK, QUESTION_MARK,
    QUESTION_MARK, QUESTION_MARK, QUESTION_MARK, QUESTION_MARK,
  ],
  isGameLoding: false
}

function App() {
  const [state, setState] = useState(initialState);
  return (
    <div className="App">
      <StateContext.Provider value={{ state, setState }}>
        <Game />
      </StateContext.Provider>
    </div>
  );
}

export default App;
