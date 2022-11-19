import * as React from 'react';
import { useState, useEffect, useRef } from 'react';

const Ref = () => {
  const [greeting, setGreeting] = useState('Hello React!');

  const handleChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => setGreeting(event.target.value);

  return <div></div>;
};

const Input = ({ value, handleChange }) => {};

export default Ref;
