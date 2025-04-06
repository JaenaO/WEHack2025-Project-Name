import React, { useState } from 'react';
import Vesty from '../components/Vesty';

const Tamagotchi = () => {
  const [vestyMood, setVestyMood] = useState('happy'); // Initial mood is 'happy'
  const [vestyMessage, setVestyMessage] = useState(''); // Vesty's message
  const [vestyExplanation, setVestyExplanation] = useState(''); // Vesty's explanation
  const [selectedInvestment, setSelectedInvestment] = useState(null); // Track the selected investment

  const investments = [
    { id: 1, name: 'Real Estate Fund', returnRate: 8, quality: 'good' },
    { id: 2, name: 'Tech Startup', returnRate: 15, quality: 'good' },
    { id: 3, name: 'Green Energy', returnRate: 10, quality: 'neutral' },
    { id: 4, name: 'Risky Venture', returnRate: -5, quality: 'bad' },
    { id: 5, name: 'Crypto Fund', returnRate: 20, quality: 'good' },
    { id: 6, name: 'High-Risk Stocks', returnRate: -10, quality: 'bad' },
  ];

  const handleMouseOver = (quality) => {
    if (!selectedInvestment) {
      // Only change mood on hover if no investment is selected
      updateMood(quality);
    }
  };

  const handleMouseOut = () => {
    if (!selectedInvestment) {
      setVestyMood('happy'); // Reset Vesty's mood when the mouse leaves and no investment is selected
      setVestyMessage('Shall we check up on our investments?');
      setVestyExplanation('');
    }
  };

  const handleInvestmentClick = (investment) => {
    setSelectedInvestment(investment); // Save the selected investment
    updateMood(investment.quality); // Update Vesty's mood based on the selected investment
    updateMessageAndExplanation(investment); // Update Vesty's message and explanation
  };

  const handleInvestmentDoubleClick = () => {
    setSelectedInvestment(null); // Clear the selected investment
    setVestyMood('neutral'); // Reset Vesty's mood to neutral
    setVestyMessage('Select an investment to see how I feel about it!');
    setVestyExplanation('');
  };

  const updateMood = (quality) => {
    if (quality === 'good') {
      setVestyMood('excited');
    } else if (quality === 'bad') {
      setVestyMood('worried');
    } else {
      setVestyMood('thinking');
    }
  };

  const updateMessageAndExplanation = (investment) => {
    if (investment.quality === 'good') {
      setVestyMessage(`I'm excited about ${investment.name}!`);
      setVestyExplanation(
        `${investment.name} has a promising return rate of ${investment.returnRate}%. It looks like a solid investment opportunity!`
      );
    } else if (investment.quality === 'bad') {
      setVestyMessage(`I'm worried about ${investment.name}.`);
      setVestyExplanation(
        `${investment.name} has a negative return rate of ${investment.returnRate}%. This might not be a wise investment.`
      );
    } else {
      setVestyMessage(`I'm thinking about ${investment.name}.`);
      setVestyExplanation(
        `${investment.name} has a moderate return rate of ${investment.returnRate}%. It could go either way, so proceed with caution.`
      );
    }
  };

  return (
    <div style={styles.container}>
      {/* Vesty Section */}
      <section style={styles.vestySection}>
        <Vesty mood={vestyMood} message={vestyMessage} explanation={vestyExplanation} />
      </section>

      {/* Investment Section */}
      <section style={styles.investmentSection}>
        <h2 style={styles.subHeader}>Latest Investments</h2>
        <ul style={styles.investmentList}>
          {investments.map((investment) => (
            <li
              key={investment.id}
              style={{
                ...styles.investmentItem,
                backgroundColor: selectedInvestment?.id === investment.id ? '#e0f7fa' : '#f9f9f9', // Highlight selected investment
              }}
              onMouseOver={() => handleMouseOver(investment.quality)}
              onMouseOut={handleMouseOut}
              onClick={() => handleInvestmentClick(investment)} // Handle investment selection
              onDoubleClick={handleInvestmentDoubleClick} // Handle deselection on double-click
            >
              <strong>{investment.name}</strong> - Return Rate: {investment.returnRate}%
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    height: '100vh',
    overflow: 'hidden', // Prevent scrolling on the entire page
  },
  vestySection: {
    position: 'fixed',
    top: '70px',
    left: 0,
    width: '100%',
    height: 'calc(50% - 60px)',
    backgroundColor: '#f9f9f9',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottom: '2px solid #ddd',
    zIndex: 10,
    overflow: 'hidden',
  },
  investmentSection: {
    position: 'absolute',
    top: '50%', // Start below the Vesty section
    left: 0,
    width: '100%',
    height: '50%', // Remaining height for the investments
    backgroundColor: '#ffffff',
    overflowY: 'auto', // Allow scrolling for the investment list
    padding: '2%',
    borderTop: '2px solid #ddd',
    boxSizing: 'border-box', // Ensure padding doesn't affect width/height
  },
  subHeader: {
    fontSize: '1.5rem',
    color: '#333',
    marginBottom: '10px',
    textAlign: 'center',
  },
  investmentList: {
    listStyleType: 'none',
    padding: 0,
    margin: 0,
    display: 'grid', // Use CSS Grid for responsive layout
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', // Responsive columns
    gap: '10px', // Space between items
  },
  investmentItem: {
    fontSize: '1rem',
    color: '#555',
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '5px',
    transition: 'background-color 0.3s ease',
    textAlign: 'center',
    backgroundColor: '#f9f9f9',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    cursor: 'pointer', // Indicate that the item is clickable
  },
};

export default Tamagotchi;