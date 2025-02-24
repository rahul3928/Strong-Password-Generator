import React, { useState } from 'react';
import './App.css';

// Import components
import PasswordForm from './PasswordForm';
import PasswordDisplay from './PasswordDisplay';

function App() {
  const [password, setPassword] = useState('');

  return (
    <div className="App">
      <header className="App-header">
        <h1>Password Generator</h1>
        
        {/* Password Form Component */}
        <PasswordForm setPassword={setPassword} />
        
        {/* Only display PasswordDisplay when password is generated */}
        {password && <PasswordDisplay password={password} />}
        
        {/* Optional default content that you might want to keep */}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
