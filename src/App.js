import React, { useState } from 'react';
import Timeout from './components/Timeout/Timeout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons'
import './App.css'

export default function App() {
  const [timeoutList, setTimeoutList] = useState([0]);

  function addTimeout() {
    setTimeoutList([...timeoutList, timeoutList.length + 1]);
  }

  function onRemove(index) {
    setTimeoutList([
      ...timeoutList.slice(0, index),
      ...timeoutList.slice(index + 1, timeoutList.length)
    ]);
  }

  return (
    <div className="app">
      <div>
        <ul class="timeouts-list">
          {timeoutList.map((c, index) => <Timeout index={index} key={c} onRemove={() => onRemove(index)}  />)}
        </ul>
      </div>
      <button className="button" onClick={addTimeout}>
        <FontAwesomeIcon icon={faPlusSquare} />
        New Timeout
      </button>
    </div>
  );
}
