import React, {useState, useEffect} from 'react';

export default function Timeout({ onRemove }) {
  const [count, setCount] = useState(5);

  useEffect(() => {
    if (count === 0) return;
    const countdown = setTimeout(() => {
      console.log(count);
      setCount(count -1);
    }, 1000);

    return () => {
      clearTimeout(countdown);
    }
  }, [count]);

  return (
    <li id='timeout{prop.id}'>
      <span className="name">Timeout 1</span>
      <span className="count">{count}</span>
      <button className="btn" onClick={onRemove}>Delete</button>
    </li>
  );
}
