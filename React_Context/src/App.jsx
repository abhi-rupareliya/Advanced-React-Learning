import React, { useState } from 'react';
import ThemeContext from './themeContext';
import ThemedComponent from './components/ThemedComponent';

function App() {
  const [theme, setTheme] = useState('dark'); 

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={theme}>
      <div style={{ padding: '20px' }}>
        <h1>React Context Example</h1>
        <button onClick={toggleTheme}>Toggle Theme</button>
        <ThemedComponent />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
