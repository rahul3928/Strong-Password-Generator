import React from 'react';

const PasswordDisplay = ({ password }) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(password);
  };

  return (
    <div>
      <input type="text" value={password} readOnly />
      <button onClick={handleCopy}>Copy Password</button>
    </div>
  );
};

export default PasswordDisplay;
