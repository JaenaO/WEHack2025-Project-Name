const Header = () => {
  return (
    <header style={styles.header}>
      {/* Left Section: Logo and Project Name */}
      <div style={styles.leftSection}>
        <img src="/logo.png" alt="Logo" style={styles.logo} />
        <h1 style={styles.projectName}>TempProjectName</h1>
      </div>

      {/* Right Section: Profile Picture and Login/Sign Up */}
      <div style={styles.rightSection}>
        <img src="/defaultpp.jpeg" alt="Profile" style={styles.profilePicture} />
        <button style={styles.authButton}>Login</button>
        <button style={styles.authButton}>Sign Up</button>
      </div>
    </header>
  );
};

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: '#4CAF50',
    color: 'white',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    position: 'fixed',
    width: '100%', // Ensure it spans the full width
    zIndex: 1000, // Ensure it stays above other elements
    top: 0,
    left: 0,
  },
  leftSection: {
    display: 'flex',
    alignItems: 'center',
  },
  logo: {
    width: '40px',
    height: '40px',
    marginRight: '10px',
  },
  projectName: {
    fontSize: '1.5rem',
    margin: 0,
  },
  rightSection: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  profilePicture: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    objectFit: 'cover',
  },
  authButton: {
    backgroundColor: 'white',
    color: '#4CAF50',
    border: 'none',
    borderRadius: '5px',
    padding: '5px 10px',
    cursor: 'pointer',
    fontWeight: 'bold',
    transition: 'background-color 0.3s ease',
  },
};

export default Header;