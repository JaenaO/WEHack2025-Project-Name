const Profile = () => {
  const user = {
    name: 'Jane Doe',
    email: 'janendoe@example.com',
    joined: 'January 1, 2025',
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Your Profile</h1>
      <div style={styles.profileCard}>
        <h2 style={styles.name}>{user.name}</h2>
        <p style={styles.info}><strong>Email:</strong> {user.email}</p>
        <p style={styles.info}><strong>Joined:</strong> {user.joined}</p>
      </div>
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
    color: '#4CAF50',
    marginBottom: '20px',
  },
  profileCard: {
    maxWidth: '400px',
    margin: '0 auto',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
  },
  name: {
    fontSize: '1.5rem',
    color: '#333',
    marginBottom: '10px',
  },
  info: {
    fontSize: '1rem',
    color: '#555',
    marginBottom: '5px',
  },
};

export default Profile;