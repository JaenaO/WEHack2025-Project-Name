const Navbar = () => {
  return (
    <nav style={navbarStyle}>
      <div style={linkContainerStyle}>
        <a href="/" style={linkStyle} onMouseOver={(e) => hoverEffect(e, true)} onMouseOut={(e) => hoverEffect(e, false)}>
          Vesty
        </a>
        <a href="/investment" style={linkStyle} onMouseOver={(e) => hoverEffect(e, true)} onMouseOut={(e) => hoverEffect(e, false)}>
          Invest
        </a>
        <a href="/profile" style={linkStyle} onMouseOver={(e) => hoverEffect(e, true)} onMouseOut={(e) => hoverEffect(e, false)}>
          Profile
        </a>
        <a href="/about" style={linkStyle} onMouseOver={(e) => hoverEffect(e, true)} onMouseOut={(e) => hoverEffect(e, false)}>
          About
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

// Hover effect function
const hoverEffect = (e, isHovering) => {
  if (isHovering) {
    e.target.style.fontWeight = 'bold';
    e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
    e.target.style.borderRadius = '20px';
    e.target.style.padding = '8px 20px';
    e.target.style.transform = 'translateY(-3px)';
    e.target.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
  } else {
    e.target.style.fontWeight = 'normal';
    e.target.style.backgroundColor = 'transparent';
    e.target.style.borderRadius = '0';
    e.target.style.padding = '8px 10px';
    e.target.style.transform = 'translateY(0)';
    e.target.style.boxShadow = 'none';
  }
};

// Styles
const navbarStyle = {
  position: 'fixed',
  bottom: 0,
  left: 0,
  width: '100%',
  backgroundColor: '#4CAF50',
  backgroundImage: ' #4CAF50',
  padding: '15px 0',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  boxShadow: '0 -4px 10px rgba(0, 0, 0, 0.1)',
  zIndex: 1000,
};

const linkContainerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  width: '80%',
  maxWidth: '800px',
  margin: '0 auto',
};

const linkStyle = {
  color: 'white',
  textDecoration: 'none',
  fontSize: '1.1rem',
  transition: 'all 0.3s ease',
  padding: '8px 10px',
  fontWeight: 'normal',
  letterSpacing: '0.5px',
  textShadow: '1px 1px 2px rgba(0, 0, 0, 0.1)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
};