import * as React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';

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
      <Input value={greeting} onChangeInput={handleChange}>
        Set Greeting:
      </Input>
    </div>
  );
};

const Headline = ({ headline }) => <h1>{headline}</h1>;

const Input = ({
  value,
  onChangeInput,
  children,
}: {
  value: string;
  onChangeInput: Function;
  children: string;
}) => {
  return (
    <label>
      {children}
      <input type="text" value={value} onChange={onChangeInput} />
    </label>
  );
};

Headline.propTypes = {
  headline: PropTypes.string.isRequired,
};

export default App;
