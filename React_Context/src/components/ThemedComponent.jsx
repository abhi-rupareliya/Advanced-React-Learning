import React, { useContext } from 'react';

import ThemeContext from '../themeContext';
import Child from './Child';

function ThemedComponent() {
  const theme = useContext(ThemeContext); // Consume the current theme from context

  return (
    <div style={{ marginTop: '20px' }}>
      <h2>The current theme in ThemedComponent is {theme}</h2>
      <div style={{
        padding: '10px',
        backgroundColor: theme === 'light' ? '#fff' : '#333',
        color: theme === 'light' ? '#000' : '#fff',
      }}>
        This is a {theme} themed component!
      </div>
      {/* The child component will also have access to the theme */}
      <Child />
    </div>
  );
}

export default ThemedComponent;
