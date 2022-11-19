import * as React from 'react';
import { useState, useEffect, useRef, forwardRef } from 'react';

const Ref = () => {
  const [greeting, setGreeting] = useState('Hello React!');

  const handleChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => setGreeting(event.target.value);

  const ref = useRef();

  useEffect(() => ref.current.focus(), []);

  return (
    <div>
      <h1>{greeting}</h1>

      <Input value={greeting} handleChange={handleChange} ref={ref} />
    </div>
  );
};

const Input = forwardRef(({ value, handleChange }, ref) => {
  return <input type="text" value={value} onChange={handleChange} ref={ref} />;
});

export default Ref;
