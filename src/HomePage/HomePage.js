import React from 'react';

const HomePage = () => {
  return (
    <main style={styles.main}>
      <h2>Welcome to My Website</h2>
      <p>This is a simple homepage built with React.js.</p>
    </main>
  );
};

const styles = {
  main: {
    padding: '2rem',
    textAlign: 'center',
  },
};

export default HomePage;
