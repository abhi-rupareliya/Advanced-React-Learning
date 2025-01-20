import React, { useContext } from 'react';
import ThemeContext from '../themeContext';

function Child() {
  const theme = useContext(ThemeContext);

  return (
    <div style={{
      marginTop: '10px',
      padding: '10px',
      backgroundColor: theme === 'light' ? '#f0f0f0' : '#444',
      color: theme === 'light' ? '#000' : '#fff',
    }}>
      <h3>This is the ChildComponent</h3>
      <p>The theme in the child is also: {theme}</p>
    </div>
  );
}

export default Child;
