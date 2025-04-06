import React, { useState } from 'react';
import { assessInvestment } from '../api/api';
import Vesty from '../components/Vesty';

const Investment = () => {
  const [vestyMood, setVestyMood] = useState('happy'); // Vesty's mood
  const [vestyMessage, setVestyMessage] = useState('Hover over an investment to see how I feel!'); // Default message
  const [vestyExplanation, setVestyExplanation] = useState(''); // Default explanation
  const [isModalVisible, setIsModalVisible] = useState(false); // Modal visibility
  const [isExplanationExpanded, setIsExplanationExpanded] = useState(false); // Explanation visibility

  const opportunities = [
    {
      id: 1,
      name: 'DVDPlay',
      description: 'Automated DVD rental kiosks for convenience and accessibility.',
      returnRate: '7% annually',
      funding_total_usd: 20000000,
      funding_rounds: 1,
      market: 'Entertainment',
      founded_year: 1999,
    },
    {
      id: 2,
      name: 'Veracyte',
      description: 'Innovative diagnostic solutions in the healthcare industry.',
      returnRate: '12% annually',
      funding_total_usd: 1234,
      funding_rounds: 1,
      market: 'Health Care',
      founded_year: 2006,
    },
    {
      id: 3,
      name: 'Fox Networks',
      description: 'VR gaming platform with social integration features.',
      returnRate: '22% annually (potential)',
      funding_total_usd: 4912393,
      funding_rounds: 1,
      market: 'Advertising',
      founded_year: 2007,
    },
  ];

  const handleInvest = async (opportunity) => {
    try {
      const investmentData = {
        funding_total_usd: opportunity.funding_total_usd,
        funding_rounds: opportunity.funding_rounds,
        market: opportunity.market,
        founded_year: opportunity.founded_year,
      };

      console.log('Sending investment data:', investmentData);

      const result = await assessInvestment(investmentData);

      console.log('Received result:', result);

      if (result.risk_level === 'High Risk') {
        setVestyMood('shocked');
        setVestyMessage("Hey! I think we should investigate this further!");
        setVestyExplanation(
          `This investment is high risk because it has a low funding total of $${investmentData.funding_total_usd.toLocaleString()} and is in the ${investmentData.market} market, which may be volatile.`
        );
      } else if (result.risk_level === 'Moderate Risk') {
        setVestyMood('worried');
        setVestyMessage("Hmm, this might be worth a second look.");
        setVestyExplanation(
          `This investment is moderate risk due to its funding total of $${investmentData.funding_total_usd.toLocaleString()} and the ${investmentData.market} market, which has potential but also some uncertainties.`
        );
      } else {
        setVestyMood('happy');
        setVestyMessage("This looks like a great opportunity!");
        setVestyExplanation(
          `This investment is low risk because it has a strong funding total of $${investmentData.funding_total_usd.toLocaleString()} and is in the ${investmentData.market} market, which is stable and growing.`
        );
      }

      setIsModalVisible(true); // Show the modal
      setIsExplanationExpanded(false); // Reset explanation state
    } catch (error) {
      console.error('Error assessing investment:', error);
      setVestyMood('shocked');
      setVestyMessage("Oops! Something went wrong while assessing this investment.");
      setVestyExplanation("We couldn't analyze this investment due to an error. Please try again.");
      setIsModalVisible(true); // Show the modal
    }
  };

  const closeModal = () => {
    setIsModalVisible(false); // Hide the modal
  };

  const toggleExplanation = () => {
    setIsExplanationExpanded(!isExplanationExpanded); // Toggle explanation visibility
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Investment Opportunities</h1>
      <ul style={styles.list}>
        {opportunities.map((opportunity) => (
          <li key={opportunity.id} style={styles.listItem}>
            <h2 style={styles.title}>{opportunity.name}</h2>
            <p style={styles.description}>{opportunity.description}</p>
            <p style={styles.returnRate}>Expected Return: {opportunity.returnRate}</p>
            <button style={styles.button} onClick={() => handleInvest(opportunity)}>
              Invest
            </button>
          </li>
        ))}
      </ul>

      {isModalVisible && (
        <div style={styles.modalOverlay}>
          <div style={styles.modal}>
            <div onClick={toggleExplanation} style={{ cursor: 'pointer' }}>
              {/* Pass message and explanation to Vesty */}
              <Vesty
                mood={vestyMood}
                message={vestyMessage}
                explanation={isExplanationExpanded ? vestyExplanation : ''}
              />
            </div>
            <button style={styles.closeButton} onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
  },
  header: {
    textAlign: 'center',
    color: '#333',
  },
  list: {
    listStyleType: 'none',
    padding: 0,
  },
  listItem: {
    marginBottom: '20px',
    padding: '15px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  title: {
    fontSize: '1.5rem',
    color: '#4CAF50',
  },
  description: {
    fontSize: '1rem',
    color: '#555',
  },
  returnRate: {
    fontSize: '1rem',
    color: '#888',
  },
  button: {
    marginTop: '10px',
    padding: '10px 15px',
    fontSize: '1rem',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  modalOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '8px',
    textAlign: 'center',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  },
  closeButton: {
    marginTop: '10px',
    padding: '10px 15px',
    fontSize: '1rem',
    backgroundColor: '#f44336',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default Investment;