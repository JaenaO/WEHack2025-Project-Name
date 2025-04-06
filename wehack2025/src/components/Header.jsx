const Header = () => {
  return (
    <header style={styles.header}>
      {/* Left Section: Logo and Project Name */}
      <div style={styles.leftSection}>
        <img src="/vestyExcited.jpeg" alt="Logo" style={styles.logo} />
        <h1 style={styles.projectName}>Vesty</h1>
      </div>

      {/* Right Section: Profile Picture and Login/Sign Up */}
      <div style={styles.rightSection}>
        <img src="/defaultpp.jpeg" alt="Profile" style={styles.profilePicture} />
        <button style={styles.authButton}>Login</button>
        <button style={styles.signUpButton}>Sign Up</button>
      </div>
    </header>
  );
};

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '12px 30px',
    backgroundColor: '#428550',
    backgroundImage: ' #428550',
    color: 'white',
    boxShadow: '0 3px 10px rgba(0, 0, 0, 0.15)',
    position: 'fixed',
    width: '100%',
    zIndex: 1000,
    top: 0,
    left: 0,
    boxSizing: 'border-box',
  },
  leftSection: {
    display: 'flex',
    alignItems: 'center',
  },
  logo: {
    width: '38px',
    height: '38px',
    marginRight: '12px',
    borderRadius: '6px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    background: 'white',
    padding: '2px',
  },
  projectName: {
    fontSize: '1.6rem',
    margin: 0,
    fontWeight: '600',
    letterSpacing: '0.5px',
    textShadow: '1px 1px 2px rgba(0, 0, 0, 0.1)',
  },
  rightSection: {
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
  },
  profilePicture: {
    width: '38px',
    height: '38px',
    borderRadius: '50%',
    objectFit: 'cover',
    border: '2px solid white',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
  },
  authButton: {
    backgroundColor: 'transparent',
    color: 'white',
    border: '1.5px solid white',
    borderRadius: '5px',
    padding: '8px 16px',
    cursor: 'pointer',
    fontWeight: 'bold',
    transition: 'all 0.2s ease',
    letterSpacing: '0.5px',
    fontSize: '0.9rem',
  },
  signUpButton: {
    backgroundColor: 'white',
    color: '#428550',
    border: 'none',
    borderRadius: '5px',
    padding: '9px 16px',
    cursor: 'pointer',
    fontWeight: 'bold',
    transition: 'all 0.2s ease',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    letterSpacing: '0.5px',
    fontSize: '0.9rem',
  }
};

export default Header;