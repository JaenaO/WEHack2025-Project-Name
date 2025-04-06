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
      riskLevel: 'Low-Medium',
      fundingTotal: 20000000,
      fundingRounds: 1,
      market: 'Entertainment',
      foundedYear: 1999,
      funding_total_usd: 20000000,
      funding_rounds: 1,
      founded_year: 1999,
    },
    {
      id: 2,
      name: 'Veracyte',
      description: 'Innovative diagnostic solutions in the healthcare industry.',
      returnRate: '12% annually',
      riskLevel: 'High',
      fundingTotal: 1234,
      fundingRounds: 1,
      market: 'Health Care',
      foundedYear: 2006,
      funding_total_usd: 1234,
      funding_rounds: 1,
      founded_year: 2006,
    },
    {
      id: 3,
      name: 'Fox Networks',
      description: 'VR gaming platform with social integration features.',
      returnRate: '22% annually (potential)',
      riskLevel: 'Medium',
      fundingTotal: 4912393,
      fundingRounds: 1,
      market: 'Advertising',
      foundedYear: 2007,
      funding_total_usd: 4912393,
      funding_rounds: 1,
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

  const getRiskColor = (riskLevel) => {
    if (riskLevel === 'Low' || riskLevel === 'Low-Medium') return '#4CAF50';
    if (riskLevel === 'Medium') return '#FF9800';
    return '#F44336';
  };

  return (
    <div style={styles.container}>
      <div style={styles.pageHeader}>
        <h1 style={styles.header}>Investment Opportunities</h1>
        <p style={styles.subHeader}>Explore potential investments for your portfolio</p>
      </div>

      <div style={styles.listContainer}>
        {opportunities.map((opportunity) => (
          <div key={opportunity.id} style={styles.listItem}>
            <div style={styles.cardHeader}>
              <h2 style={styles.title}>{opportunity.name}</h2>
              <div style={{
                ...styles.riskBadge,
                backgroundColor: getRiskColor(opportunity.riskLevel)
              }}>
                {opportunity.riskLevel} Risk
              </div>
            </div>
            
            <p style={styles.description}>{opportunity.description}</p>
            
            <div style={styles.detailsGrid}>
              <div style={styles.detailItem}>
                <span style={styles.detailLabel}>Founded</span>
                <span style={styles.detailValue}>{opportunity.foundedYear}</span>
              </div>
              <div style={styles.detailItem}>
                <span style={styles.detailLabel}>Market</span>
                <span style={styles.detailValue}>{opportunity.market}</span>
              </div>
              <div style={styles.detailItem}>
                <span style={styles.detailLabel}>Funding</span>
                <span style={styles.detailValue}>${(opportunity.fundingTotal).toLocaleString()}</span>
              </div>
              <div style={styles.detailItem}>
                <span style={styles.detailLabel}>Rounds</span>
                <span style={styles.detailValue}>{opportunity.fundingRounds}</span>
              </div>
            </div>
            
            <div style={styles.cardFooter}>
              <div style={styles.returnRateContainer}>
                <span style={styles.returnRateLabel}>Expected Return:</span>
                <span style={styles.returnRateValue}>{opportunity.returnRate}</span>
              </div>
              <button style={styles.button} onClick={() => handleInvest(opportunity)}>
                Analyze Investment
              </button>
            </div>
          </div>
        ))}
      </div>

      {isModalVisible && (
        <div style={styles.modalOverlay}>
          <div style={styles.modal}>
            <div style={styles.modalHeader}>
              <h3 style={styles.modalTitle}>Vesty's Analysis</h3>
              <button style={styles.modalCloseX} onClick={closeModal}>×</button>
            </div>
            <div style={styles.modalContent}>
              <Vesty
                mood={vestyMood}
                message={vestyMessage}
                explanation={vestyExplanation}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'Roboto, Arial, sans-serif',
    padding: '80px 20px 20px',
    maxWidth: '1200px',
    margin: '0 auto',
    backgroundColor: '#f9f9f9',
    minHeight: '100vh',
  },
  pageHeader: {
    textAlign: 'center',
    marginBottom: '40px',
  },
  header: {
    color: '#2E7D32',
    fontSize: '2.5rem',
    marginBottom: '10px',
    fontWeight: '700',
  },
  subHeader: {
    color: '#666',
    fontSize: '1.2rem',
    maxWidth: '600px',
    margin: '0 auto',
  },
  listContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
    gap: '25px',
    marginBottom: '30px',
  },
  listItem: {
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    boxShadow: '0 6px 16px rgba(0, 0, 0, 0.08)',
    overflow: 'hidden',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    border: '1px solid #e0e0e0',
    '&:hover': {
      transform: 'translateY(-5px)',
      boxShadow: '0 12px 24px rgba(0, 0, 0, 0.12)',
    }
  },
  cardHeader: {
    padding: '20px 20px 15px',
    borderBottom: '1px solid #f0f0f0',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: '1.5rem',
    color: '#333',
    margin: 0,
    fontWeight: '600',
  },
  riskBadge: {
    fontSize: '0.8rem',
    color: 'white',
    padding: '4px 10px',
    borderRadius: '20px',
    fontWeight: '500',
  },
  description: {
    fontSize: '1rem',
    color: '#555',
    padding: '15px 20px',
    margin: 0,
    lineHeight: '1.5',
    flex: 1,
  },
  detailsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '10px',
    padding: '0 20px 15px',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    margin: '0 20px 15px',
  },
  detailItem: {
    padding: '10px',
    display: 'flex',
    flexDirection: 'column',
  },
  detailLabel: {
    fontSize: '0.8rem',
    color: '#777',
    marginBottom: '4px',
  },
  detailValue: {
    fontSize: '1rem',
    color: '#333',
    fontWeight: '500',
  },
  cardFooter: {
    padding: '15px 20px',
    borderTop: '1px solid #f0f0f0',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fafafa',
  },
  returnRateContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  returnRateLabel: {
    fontSize: '0.8rem',
    color: '#777',
  },
  returnRateValue: {
    fontSize: '1.2rem',
    color: '#2E7D32',
    fontWeight: '600',
  },
  button: {
    padding: '10px 18px',
    fontSize: '0.95rem',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontWeight: '500',
    transition: 'background-color 0.2s ease',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    '&:hover': {
      backgroundColor: '#3d8b40',
    }
  },
  modalOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
    backdropFilter: 'blur(3px)',
  },
  modal: {
    backgroundColor: 'white',
    borderRadius: '12px',
    width: '90%',
    maxWidth: '500px',
    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)',
    display: 'flex',
    flexDirection: 'column',
    maxHeight: '90vh',
    animation: 'fadeIn 0.3s ease-out',
    overflow: 'hidden',
  },
  modalHeader: {
    padding: '15px 20px',
    borderBottom: '1px solid #eee',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
  },
  modalTitle: {
    margin: 0,
    fontSize: '1.3rem',
    color: '#333',
  },
  modalCloseX: {
    background: 'none',
    border: 'none',
    fontSize: '1.5rem',
    cursor: 'pointer',
    color: '#777',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '30px',
    height: '30px',
    borderRadius: '50%',
    '&:hover': {
      backgroundColor: '#f0f0f0',
    }
  },
  modalContent: {
    padding: '20px',
    overflowY: 'auto',
  },
  modalFooter: {
    padding: '15px 20px',
    borderTop: '1px solid #eee',
    display: 'flex',
    justifyContent: 'center',
  },
  toggleButton: {
    background: 'none',
    border: 'none',
    color: '#4CAF50',
    cursor: 'pointer',
    padding: '8px 12px',
    fontSize: '0.9rem',
    marginTop: '10px',
    fontWeight: '500',
    borderRadius: '4px',
    '&:hover': {
      backgroundColor: '#f0f0f0',
    }
  },
  closeButton: {
    padding: '10px 20px',
    fontSize: '1rem',
    backgroundColor: '#f0f0f0',
    color: '#333',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontWeight: '500',
    transition: 'background-color 0.2s ease',
    '&:hover': {
      backgroundColor: '#e0e0e0',
    }
  },
};

export default Investment;