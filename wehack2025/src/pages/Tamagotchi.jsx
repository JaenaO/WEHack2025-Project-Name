import React, { useState } from 'react';
import Vesty from '../components/Vesty';

const Tamagotchi = () => {
  const [vestyMood, setVestyMood] = useState('happy'); // Initial mood is 'happy'
  const [selectedInvestment, setSelectedInvestment] = useState(null); // Track the selected investment

  const investments = [
    { id: 1, name: 'Real Estate Fund', returnRate: 8, quality: 'good' },
    { id: 2, name: 'Tech Startup', returnRate: 15, quality: 'good' },
    { id: 3, name: 'Green Energy', returnRate: 10, quality: 'neutral' },
    { id: 4, name: 'Risky Venture', returnRate: -5, quality: 'bad' },
    { id: 5, name: 'Crypto Fund', returnRate: 20, quality: 'good' },
    { id: 6, name: 'High-Risk Stocks', returnRate: -10, quality: 'bad' },
    // Add more investments as needed
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
    }
  };

  const handleInvestmentClick = (investment) => {
    setSelectedInvestment(investment); // Save the selected investment
    updateMood(investment.quality); // Update Vesty's mood based on the selected investment
  };

  const handleInvestmentDoubleClick = () => {
    setSelectedInvestment(null); // Clear the selected investment
    setVestyMood('neutral'); // Reset Vesty's mood to neutral
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

  return (
    <div style={styles.container}>
      {/* Vesty Section */}
      <section style={styles.vestySection}>
        <Vesty mood={vestyMood} />
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
    top: '60px', // Push below the header
    left: 0,
    width: '100%',
    height: 'calc(50% - 60px)', // Adjust height to account for the header
    backgroundColor: '#f9f9f9',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottom: '2px solid #ddd',
    zIndex: 10, // Ensure it stays above the scrolling section
    overflow: 'hidden', // Prevent Vesty from moving outside the section
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
  header: {
    fontSize: '2rem',
    color: '#4CAF50',
    marginBottom: '10px',
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