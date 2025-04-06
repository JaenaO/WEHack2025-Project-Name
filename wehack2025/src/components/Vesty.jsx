import React from 'react';

const Vesty = ({ mood, message, explanation }) => {
  const moodImages = {
    happy: '/vestyHappy.gif',
    excited: '/vestyExcited.jpeg',
    worried: '/vestyWorried.jpeg',
    thinking: '/vestyThinking.jpeg',
    shocked: '/vestyShocked.jpeg',
  };

  return (
    <div style={styles.container}>
      <p style={styles.message}>{message}</p> {/* Move the message above the image */}
      <img
        src={moodImages[mood] || moodImages.happy} // Default to happy if no mood is provided
        alt={`Vesty is ${mood}`}
        style={styles.image} // Use the default image style
      />
      {explanation && <p style={styles.explanation}>{explanation}</p>}
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
  },
  image: {
    width: '300px', // Adjust the width
    height: '300px', // Adjust the height
  },
  message: {
    fontSize: '1.2rem',
    color: '#333',
    marginBottom: '10px', // Add spacing below the message
    fontWeight: 'bold', // Make the text bold
  },
  explanation: {
    fontSize: '1rem',
    color: '#555',
    marginTop: '10px',
  },
};

export default Vesty;