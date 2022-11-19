import * as React from 'react';
import { useState, useEffect, memo } from 'react';

interface Props {
  count: string;
}

const Override = () => {
  const initialCount = +localStorage.getItem('storageCount') || 0;
  const [count, setCount] = useState(initialCount);
  const [greeting, setGreeting] = useState('Hello React!');

  const handleIncrement = () => setCount((currentCount) => currentCount + 1);

  const handleDecrement = () => setCount((currentCount) => currentCount - 1);

  const handleChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => setGreeting(event.target.value);

  useEffect(() => localStorage.setItem('storageCount', count), [count]);

  return (
    <div>
      <input type="text" onChange={handleChange} />

      <Count count={count} />

      <Button handleClick={handleIncrement}>Increment</Button>
      <Button handleClick={handleDecrement}>Decrement</Button>
    </div>
  );
};

const Button = ({ handleClick, children }) => (
  <button type="button" onClick={handleClick}>
    {children}
  </button>
);

const Count = memo((props: Props) => {
  console.log('Does it (re)render?');

  return <h1>{props.count}</h1>;
});

Button.defaultProps = {
  handleClick: () => console.log('Default'),
};

export default Override;
