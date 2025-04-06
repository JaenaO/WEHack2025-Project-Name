import React, { useState } from 'react';
import Vesty from '../components/Vesty';

const Profile = () => {
  const [activeTab, setActiveTab] = useState('overview');
  
  const user = {
    name: 'Jane Doe',
    email: 'jane.doe@example.com',
    joined: 'January 1, 2025',
    profilePicture: '/defaultpp.jpeg',
    investmentSummary: {
      totalInvested: 25000,
      currentValue: 28750,
      returns: 15,
      riskProfile: 'Moderate'
    },
    recentActivity: [
      { id: 1, date: 'March 28, 2025', action: 'Invested in Tech Startup', amount: '$5,000' },
      { id: 2, date: 'March 15, 2025', action: 'Portfolio Analysis', amount: '-' },
      { id: 3, date: 'February 22, 2025', action: 'Invested in Real Estate Fund', amount: '$10,000' }
    ],
    investmentPreferences: {
      riskTolerance: 'Moderate',
      sectors: ['Technology', 'Real Estate', 'Green Energy'],
      investmentGoals: ['Retirement', 'Long-term Growth']
    }
  };

  const renderTabContent = () => {
    switch(activeTab) {
      case 'overview':
        return (
          <div style={styles.tabContent}>
            <div style={styles.summaryCards}>
              <div style={styles.summaryCard}>
                <h3 style={styles.cardTitle}>Total Invested</h3>
                <p style={styles.cardValue}>${user.investmentSummary.totalInvested.toLocaleString()}</p>
              </div>
              <div style={styles.summaryCard}>
                <h3 style={styles.cardTitle}>Current Value</h3>
                <p style={styles.cardValue}>${user.investmentSummary.currentValue.toLocaleString()}</p>
              </div>
              <div style={styles.summaryCard}>
                <h3 style={styles.cardTitle}>Returns</h3>
                <p style={{...styles.cardValue, color: user.investmentSummary.returns > 0 ? '#4CAF50' : '#f44336'}}>
                  {user.investmentSummary.returns}%
                </p>
              </div>
            </div>
            
            <div style={styles.vestyAdvice}>
              <Vesty mood="excited" message="Great job with your investments!" explanation="Your portfolio is performing above market average. Keep up the good work!" />
            </div>
          </div>
        );
      
      case 'activity':
        return (
          <div style={styles.tabContent}>
            <h3 style={styles.sectionTitle}>Recent Activity</h3>
            <ul style={styles.activityList}>
              {user.recentActivity.map(activity => (
                <li key={activity.id} style={styles.activityItem}>
                  <div style={styles.activityDate}>{activity.date}</div>
                  <div style={styles.activityDetails}>
                    <p style={styles.activityAction}>{activity.action}</p>
                    <p style={styles.activityAmount}>{activity.amount}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        );
      
      case 'preferences':
        return (
          <div style={styles.tabContent}>
            <h3 style={styles.sectionTitle}>Investment Preferences</h3>
            
            <div style={styles.preferenceSection}>
              <h4 style={styles.preferenceTitle}>Risk Tolerance</h4>
              <p style={styles.preferenceValue}>{user.investmentPreferences.riskTolerance}</p>
            </div>
            
            <div style={styles.preferenceSection}>
              <h4 style={styles.preferenceTitle}>Preferred Sectors</h4>
              <div style={styles.tagContainer}>
                {user.investmentPreferences.sectors.map((sector, index) => (
                  <span key={index} style={styles.tag}>{sector}</span>
                ))}
              </div>
            </div>
            
            <div style={styles.preferenceSection}>
              <h4 style={styles.preferenceTitle}>Investment Goals</h4>
              <div style={styles.tagContainer}>
                {user.investmentPreferences.investmentGoals.map((goal, index) => (
                  <span key={index} style={styles.tag}>{goal}</span>
                ))}
              </div>
            </div>
          </div>
        );
      
      case 'settings':
        return (
          <div style={styles.tabContent}>
            <h3 style={styles.sectionTitle}>Account Settings</h3>
            <form style={styles.form}>
              <div style={styles.formGroup}>
                <label style={styles.label}>Name</label>
                <input type="text" defaultValue={user.name} style={styles.input} />
              </div>
              
              <div style={styles.formGroup}>
                <label style={styles.label}>Email</label>
                <input type="email" defaultValue={user.email} style={styles.input} />
              </div>
              
              <div style={styles.formGroup}>
                <label style={styles.label}>Password</label>
                <input type="password" defaultValue="********" style={styles.input} />
              </div>
              
              <button style={styles.button}>Save Changes</button>
            </form>
          </div>
        );
      
      default:
        return <div>Select a tab</div>;
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Your Profile</h1>
      
      <div style={styles.profileSection}>
        <div style={styles.profileHeader}>
          <img src={user.profilePicture} alt="Profile" style={styles.profilePicture} />
          <div style={styles.profileInfo}>
            <h2 style={styles.name}>{user.name}</h2>
            <p style={styles.info}><strong>Email:</strong> {user.email}</p>
            <p style={styles.info}><strong>Member since:</strong> {user.joined}</p>
            <p style={styles.riskProfile}>
              <strong>Risk Profile:</strong> 
              <span style={styles.riskBadge}>{user.investmentSummary.riskProfile}</span>
            </p>
          </div>
        </div>
        
        <div style={styles.tabContainer}>
          <div style={styles.tabs}>
            <button 
              style={{...styles.tab, ...(activeTab === 'overview' ? styles.activeTab : {})}} 
              onClick={() => setActiveTab('overview')}>
              Overview
            </button>
            <button 
              style={{...styles.tab, ...(activeTab === 'activity' ? styles.activeTab : {})}} 
              onClick={() => setActiveTab('activity')}>
              Activity
            </button>
            <button 
              style={{...styles.tab, ...(activeTab === 'preferences' ? styles.activeTab : {})}} 
              onClick={() => setActiveTab('preferences')}>
              Preferences
            </button>
            <button 
              style={{...styles.tab, ...(activeTab === 'settings' ? styles.activeTab : {})}} 
              onClick={() => setActiveTab('settings')}>
              Settings
            </button>
          </div>
          
          {renderTabContent()}
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    padding: '60px',
    maxWidth: '1000px',
    margin: '0 auto',
  },
  header: {
    textAlign: 'center',
    color: '#4CAF50',
    marginBottom: '30px',
  },
  profileSection: {
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
  },
  profileHeader: {
    display: 'flex',
    padding: '30px',
    borderBottom: '1px solid #eee',
    backgroundColor: '#f9f9f9',
  },
  profilePicture: {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    objectFit: 'cover',
    border: '3px solid #4CAF50',
  },
  profileInfo: {
    marginLeft: '20px',
    flex: 1,
  },
  name: {
    fontSize: '1.8rem',
    color: '#333',
    marginTop: 0,
    marginBottom: '10px',
  },
  info: {
    fontSize: '1rem',
    color: '#555',
    margin: '5px 0',
  },
  riskProfile: {
    fontSize: '1rem',
    margin: '10px 0 0',
  },
  riskBadge: {
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '3px 10px',
    borderRadius: '15px',
    fontSize: '0.9rem',
    marginLeft: '5px',
  },
  tabContainer: {
    padding: '0 0 20px 0',
  },
  tabs: {
    display: 'flex',
    borderBottom: '1px solid #ddd',
  },
  tab: {
    padding: '15px 20px',
    border: 'none',
    background: 'none',
    cursor: 'pointer',
    fontSize: '1rem',
    color: '#555',
    outline: 'none',
    flex: 1,
    transition: 'all 0.3s ease',
  },
  activeTab: {
    borderBottom: '2px solid #4CAF50',
    color: '#4CAF50',
    fontWeight: 'bold',
  },
  tabContent: {
    padding: '30px',
  },
  summaryCards: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '30px',
    flexWrap: 'wrap',
  },
  summaryCard: {
    flex: '1 0 28%',
    minWidth: '200px',
    backgroundColor: '#f9f9f9',
    padding: '20px',
    borderRadius: '8px',
    textAlign: 'center',
    margin: '0 10px 10px 0',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.05)',
  },
  cardTitle: {
    color: '#555',
    fontSize: '1rem',
    marginTop: 0,
    marginBottom: '10px',
  },
  cardValue: {
    color: '#333',
    fontSize: '1.8rem',
    fontWeight: 'bold',
    margin: 0,
  },
  vestyAdvice: {
    backgroundColor: '#e8f5e9',
    padding: '20px',
    borderRadius: '8px',
    marginTop: '20px',
  },
  sectionTitle: {
    color: '#333',
    fontSize: '1.3rem',
    marginTop: 0,
    marginBottom: '20px',
  },
  activityList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  activityItem: {
    display: 'flex',
    padding: '15px 0',
    borderBottom: '1px solid #eee',
  },
  activityDate: {
    width: '120px',
    color: '#777',
    fontSize: '0.9rem',
  },
  activityDetails: {
    flex: 1,
    display: 'flex',
    justifyContent: 'space-between',
  },
  activityAction: {
    margin: 0,
    fontWeight: '500',
  },
  activityAmount: {
    margin: 0,
    color: '#4CAF50',
    fontWeight: 'bold',
  },
  preferenceSection: {
    marginBottom: '25px',
  },
  preferenceTitle: {
    fontSize: '1.1rem',
    color: '#555',
    marginBottom: '10px',
    marginTop: 0,
  },
  preferenceValue: {
    margin: '5px 0',
    fontSize: '1rem',
  },
  tagContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '10px',
  },
  tag: {
    backgroundColor: '#e8f5e9',
    color: '#2E7D32',
    padding: '5px 15px',
    borderRadius: '15px',
    fontSize: '0.9rem',
  },
  form: {
    maxWidth: '500px',
  },
  formGroup: {
    marginBottom: '20px',
  },
  label: {
    display: 'block',
    marginBottom: '5px',
    color: '#555',
    fontSize: '0.9rem',
  },
  input: {
    width: '100%',
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ddd',
    fontSize: '1rem',
  },
  button: {
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
    fontSize: '1rem',
    cursor: 'pointer',
    marginTop: '10px',
  },
};

export default Profile;