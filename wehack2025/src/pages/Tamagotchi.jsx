import Navbar from '../components/Navbar';

const Tamagotchi = () => {
  const latestInvestments = [
    { id: 1, name: 'Real Estate Fund', returnRate: '8% annually' },
    { id: 2, name: 'Tech Startup', returnRate: '15% annually' },
    { id: 3, name: 'Green Energy', returnRate: '10% annually' },
  ];

  return (
    <div style={styles.container}>
      {/* Vesty Section */}
      <section style={styles.section}>
        <h1 style={styles.header}>Let's Investigate Together!</h1>
        <img src="/vestyTest.jpeg" alt="Vesty" style={styles.image} />
      </section>

      {/* Latest Investments Section */}
      <section style={styles.section}>
        <h2 style={styles.subHeader}>Latest Investments</h2>
        <ul style={styles.investmentList}>
          {latestInvestments.map((investment) => (
            <li key={investment.id} style={styles.investmentItem}>
              <strong>{investment.name}</strong> - {investment.returnRate}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  section: {
    marginBottom: '20px',
    textAlign: 'center',
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
  },
  image: {
    width: '200px',
    height: '200px',
    objectFit: 'contain',
  },
  investmentList: {
    listStyleType: 'none',
    padding: 0,
  },
  investmentItem: {
    fontSize: '1rem',
    color: '#555',
    marginBottom: '10px',
  },
};

export default Tamagotchi;