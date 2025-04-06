

const Investment = () => {
  const opportunities = [
    { id: 1, name: 'Real Estate Fund', description: 'Invest in premium real estate properties.', returnRate: '8% annually' },
    { id: 2, name: 'Tech Startup', description: 'Support an innovative tech startup.', returnRate: '15% annually' },
    { id: 3, name: 'Green Energy', description: 'Invest in renewable energy projects.', returnRate: '10% annually' },
  ];

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Investment Opportunities</h1>
      <ul style={styles.list}>
        {opportunities.map((opportunity) => (
          <li key={opportunity.id} style={styles.listItem}>
            <h2 style={styles.title}>{opportunity.name}</h2>
            <p style={styles.description}>{opportunity.description}</p>
            <p style={styles.returnRate}>Expected Return: {opportunity.returnRate}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    height: '100vh',
    padding: '60px',
    overflow: 'hidden', // Prevent scrolling on the entire page
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
};

export default Investment;