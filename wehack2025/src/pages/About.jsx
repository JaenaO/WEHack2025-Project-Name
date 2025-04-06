import React from 'react';

const About = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>About Vesty</h1>
      
      <div style={styles.section}>
        <h2 style={styles.subHeader}>Our Story</h2>
        <p style={styles.text}>
          Vesty was born at WEHackathon 2025, where our team of passionate developers and finance enthusiasts came together with a shared vision: to make investment education accessible, engaging, and fun for everyone.
        </p>
        <p style={styles.text}>
          Inspired by the nostalgic appeal of virtual pets and the growing need for financial literacy tools, we created Vesty the Investi-Gator: your personal investment companion who reacts to your financial decisions in real-time.
        </p>
      </div>

      <div style={styles.section}>
        <h2 style={styles.subHeader}>Our Mission</h2>
        <p style={styles.text}>
          We believe that understanding investments shouldn't be intimidating or boring. Our mission is to expand financial literacy by combining cutting-edge AI analysis with an engaging, interactive experience.
        </p>
        <p style={styles.text}>
          Whether you're a seasoned investor or just starting your financial journey, Vesty provides personalized insights and feedback, making the complex world of investments more approachable.
        </p>
      </div>

      <div style={styles.section}>
        <h2 style={styles.subHeader}>Meet Vesty</h2>
        <div style={styles.vestySection}>
          <img src="/vestyHappy.gif" alt="Vesty" style={styles.vestyImage} />
          <p style={styles.vestyText}>
            Vesty is your intelligent investment companion. With advanced sentiment analysis capabilities, Vesty reacts to your investment choices with genuine emotions—expressing excitement for promising opportunities, concern for risky ventures, and thoughtful analysis for everything in between.
          </p>
        </div>
        <p style={styles.text}>
          Beyond just being cute, Vesty leverages sophisticated algorithms to assess investment risks and opportunities, providing you with valuable insights in a friendly, accessible way.
        </p>
      </div>

      <div style={styles.section}>
        <h2 style={styles.subHeader}>Our Technology</h2>
        <p style={styles.text}>
          Vesty combines React for a responsive user interface with advanced AI models for investment analysis. Our platform evaluates factors such as funding history, market sector, and historical performance to provide informed recommendations.
        </p>
        <p style={styles.text}>
          Developed during an intensive 24-hour hackathon, our application expand how technology can transform financial education and decision-making.
        </p>
      </div>

      <div style={styles.footer}>
        <p style={styles.footerText}>
          Created with 💚 for WEHackathon 2025 by Team Investi-Gators
        </p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    maxWidth: '800px',
    margin: '0 auto',
    padding: '60px 20px',
    color: '#333',
    lineHeight: '1.6',
  },
  header: {
    textAlign: 'center',
    color: '#4CAF50',
    fontSize: '2.5rem',
    marginBottom: '30px',
  },
  section: {
    marginBottom: '40px',
  },
  subHeader: {
    color: '#2E7D32',
    fontSize: '1.8rem',
    marginBottom: '15px',
    borderBottom: '2px solid #E8F5E9',
    paddingBottom: '10px',
  },
  text: {
    fontSize: '1.1rem',
    marginBottom: '15px',
    textAlign: 'justify',
  },
  vestySection: {
    display: 'flex',
    alignItems: 'center',
    background: '#E8F5E9',
    borderRadius: '10px',
    padding: '20px',
    marginBottom: '20px',
  },
  vestyImage: {
    width: '100px',
    height: '100px',
    marginRight: '20px',
  },
  vestyText: {
    fontSize: '1.1rem',
    flex: 1,
  },
  footer: {
    marginTop: '60px',
    textAlign: 'center',
    borderTop: '1px solid #E8F5E9',
    paddingTop: '20px',
  },
  footerText: {
    fontSize: '0.9rem',
    color: '#757575',
  }
};

export default About;