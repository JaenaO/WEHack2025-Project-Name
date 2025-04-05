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
    e.target.style.backgroundColor = 'rgba(0, 0, 0, 0.2)';
    e.target.style.borderRadius = '20px';
    e.target.style.padding = '5px 15px';
  } else {
    e.target.style.fontWeight = 'normal';
    e.target.style.backgroundColor = 'transparent';
    e.target.style.borderRadius = '0';
    e.target.style.padding = '0';
  }
};

// Styles
const navbarStyle = {
  position: 'fixed',
  bottom: 0,
  width: '100%',
  backgroundColor: '#4CAF50',
  padding: '10px 0',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  boxShadow: '0 -2px 4px rgba(0, 0, 0, 0.1)',
};

const linkContainerStyle = {
  display: 'flex',
  gap: '100px',
};

const linkStyle = {
  color: 'white',
  textDecoration: 'none',
  fontSize: '1.2rem',
  transition: 'all 0.3s ease',
};