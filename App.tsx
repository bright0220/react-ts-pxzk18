import * as React from 'react';
import { useState } from 'react';

interface Props {
  value: string;
}

const App = () => {
  const [greeting, setGreeting] = useState('Hello Function Component!');

  const handleChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => setGreeting(event.target.value);

  return (
    <div>
      <Headline headline={greeting} />
      <Input value={greeting} onChaneInput={handleChange}>
        Set Greeting:
      </Input>
    </div>
  );
};

const Headline = ({ headline }) => <h1>{headline}</h1>;

const Input = ({ value, onChaneInput, children }) => {
  return (
    <label>
      {children}
      <input type="text" value={value} onChange={onChaneInput} />
    </label>
  );
};

export default App;
