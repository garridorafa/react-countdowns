import React, { useState } from 'react';
import './App.css'
import Timeout from './components/Timeout';


export default function App() {
  const [timeoutList, setTimeoutList] = useState([0]);

  function addTimeout() {
    setTimeoutList([...timeoutList, timeoutList.length + 1]);
  }

  function onRemove(index) {
    console.log(`deteleSomething ${index}!`);
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
      <button onClick={addTimeout}>New Timeout</button>
    </div>
  );
}