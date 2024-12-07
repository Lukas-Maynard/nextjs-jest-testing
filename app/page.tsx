import React, { useState } from 'react';

const Page = () => {
  const [number, setNumber] = useState<string>('');
  const [displayNumber, setDisplayNumber] = useState<string>('');

  const handleButtonClick = () => {
    setDisplayNumber(number);
  };

  return (
    <div>
      <h1>Number Input and Display</h1>
      <div>
        <label>
          Enter a number:
          <input
            type="number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            data-testid="input-number"
          />
        </label>
      </div>
      <div>
        <button onClick={handleButtonClick} data-testid="submit-button">
          Submit
        </button>
      </div>
      <div>
        <label>
          Last number input:
          <input
            type="text"
            value={displayNumber}
            readOnly
            data-testid="display-input"
          />
        </label>
      </div>
    </div>
  );
};

export default Page;
