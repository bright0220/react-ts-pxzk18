import * as React from 'react';
import { useState } from 'react';

const Override = () => {
  console.log('Does it render?');

  const [count, setCount] = useState(0);

  console.log(`My count is ${count}`);
  const handleIncrement = () => setCount((currentCount) => currentCount + 1);

  const handleDecrement = () => setCount((currentCount) => currentCount - 1);

  return (
    <div>
      <h1>{count}</h1>

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

Button.defaultProps = {
  handleClick: () => console.log('Default'),
};

export default Override;
