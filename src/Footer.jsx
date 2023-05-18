import React from 'react';

const Footer = () => {
  const footerStyle = {
    backgroundColor: '#f2f2f2',
    padding: '20px',
    textAlign: 'center'
  };

  return (
    <footer style={footerStyle}>
      <p>&copy; Docker GUI Applicaton</p>
    </footer>
  );
}

export default Footer;