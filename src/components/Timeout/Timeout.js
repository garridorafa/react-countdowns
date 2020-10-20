import React, {useState, useEffect} from 'react';
import RemoveTimeoutButton from './RemoveTimeoutButton';
import './timeout.css'

export default function Timeout({ index, onRemove }) {
  const [count, setCount] = useState(5);

  useEffect(() => {
    if (count === 0) return;
    const countdown = setTimeout(() => {
      setCount(count -1);
    }, 1000);

    return () => {
      clearTimeout(countdown);
    }
  }, [count]);

  return (
    <li class='timeout'>
      <div className="timeout-wrapper">
        <span className="name">Timeout {index + 1}</span>
        <span className="count">{count}</span>
      </div>
      <RemoveTimeoutButton onClick={onRemove} />
    </li>
  );
}
