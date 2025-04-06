import React, { useState } from 'react';

const Vesty = ({ mood }) => {
  const [isExpanded, setIsExpanded] = useState(false); // State to track if Vesty is expanded

  const moodImages = {
    happy: '/vestyHappy.gif',
    excited: '/vestyExcited.jpeg',
    worried: '/vestyWorried.jpeg',
    thinking: '/vestyThinking.jpeg',
    shocked: '/vestyShocked.jpeg',
  };

  const moodExplanations = {
    happy: 'Vesty is happy because this investment is performing well!',
    excited: 'Vesty is excited about the potential of this investment!',
    worried: 'Vesty is worried because this investment is risky.',
    thinking: 'Vesty is thinking about whether this investment is a good choice.',
    shocked: 'Vesty is shocked by unexpected changes in the investment!',
  };

  const toggleExpand = () => {
    setIsExpanded((prev) => !prev); // Toggle the expanded state
  };

  return (
    <div style={isExpanded ? styles.expandedContainer : styles.container} onClick={toggleExpand}>
      <img
        src={moodImages[mood] || moodImages.happy} // Default to happy if no mood is provided
        alt={`Vesty is ${mood}`}
        style={isExpanded ? styles.expandedImage : styles.image}
      />
      {isExpanded && (
        <div style={styles.explanation}>
          <h2>Why is Vesty feeling {mood}?</h2>
          <p>{moodExplanations[mood] || 'Vesty is feeling neutral.'}</p>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end', // Align the image to the bottom of the container
    height: '100%', // Ensure the container takes up the full height of its parent
    textAlign: 'center',
    cursor: 'pointer', // Indicate that Vesty is clickable
  },
  expandedContainer: {
    display: 'flex',
    justifyContent: 'space-between', // Space between Vesty and the explanation
    alignItems: 'center',
    height: '100%', // Take up the full height of the parent
    padding: '20px',
    cursor: 'pointer', // Indicate that Vesty is clickable
  },
  image: {
    width: 'auto', // Maintain aspect ratio
    height: '80%', // Make the image take up 80% of the container's height
    maxHeight: '400px', // Set a maximum height to prevent it from getting too large
    objectFit: 'contain', // Ensure the image scales properly
  },
  expandedImage: {
    width: '50%', // Take up half the screen width
    height: 'auto', // Maintain aspect ratio
    maxHeight: '90%', // Prevent the image from getting too large
    objectFit: 'contain', // Ensure the image scales properly
  },
  explanation: {
    flex: 1, // Take up the remaining space
    marginLeft: '20px',
    textAlign: 'left',
    fontSize: '1.2rem',
    color: '#333',
  },
};

export default Vesty;