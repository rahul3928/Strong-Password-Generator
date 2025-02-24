import React, { useState } from 'react';

const PasswordForm = ({ setPassword }) => {
  const [length, setLength] = useState(12);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSpecialChars, setIncludeSpecialChars] = useState(true);

  const handleGenerate = () => {
    const password = generatePassword();
    setPassword(password);
  };

  const generatePassword = () => {
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const specialChars = '!@#$%^&*()_+[]{}|;:,.<>?';

    let characters = '';
    if (includeLowercase) characters += lowercase;
    if (includeUppercase) characters += uppercase;
    if (includeNumbers) characters += numbers;
    if (includeSpecialChars) characters += specialChars;

    let password = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      password += characters[randomIndex];
    }

    return password;
  };

  return (
    <div>
      <label>
        Password Length:
        <input
          type="number"
          value={length}
          onChange={(e) => setLength(e.target.value)}
          min="8"
          max="20"
        />
      </label>
      <br />
      <label>
        Include Lowercase:
        <input
          type="checkbox"
          checked={includeLowercase}
          onChange={() => setIncludeLowercase(!includeLowercase)}
        />
      </label>
      <br />
      <label>
        Include Uppercase:
        <input
          type="checkbox"
          checked={includeUppercase}
          onChange={() => setIncludeUppercase(!includeUppercase)}
        />
      </label>
      <br />
      <label>
        Include Numbers:
        <input
          type="checkbox"
          checked={includeNumbers}
          onChange={() => setIncludeNumbers(!includeNumbers)}
        />
      </label>
      <br />
      <label>
        Include Special Characters:
        <input
          type="checkbox"
          checked={includeSpecialChars}
          onChange={() => setIncludeSpecialChars(!includeSpecialChars)}
        />
      </label>
      <br />
      <button onClick={handleGenerate}>Generate Password</button>
    </div>
  );
};

export default PasswordForm;
