import Navbar from "../components/Navbar";

const About = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>About Us</h1>
      <p style={styles.text}>
        Welcome to TempProjectName! Our mission is to provide users with a fun and interactive way to manage their investments while engaging with their virtual mascot.
      </p>
      <p style={styles.text}>
        We believe that financial literacy should be accessible to everyone, and our platform is designed to make learning about investments both easy and enjoyable.
      </p>
      <p style={styles.text}>
        Thank you for choosing Tamagotchi as your trusted companion on your financial journey!
      </p>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    lineHeight: '1.6',
  },
  header: {
    textAlign: 'center',
    color: '#4CAF50',
  },
  text: {
    fontSize: '1rem',
    color: '#333',
    marginBottom: '15px',
  },
};

export default About;