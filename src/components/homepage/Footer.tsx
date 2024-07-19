import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer style={styles.footer}>
      <p>© 2024 편한가계부</p>
    </footer>
  );
};

const styles: { footer: React.CSSProperties } = {
  footer: {
    padding: '20px',
    textAlign: 'center' as 'center', // 명시적으로 'center' 타입으로 지정
    backgroundColor: '#f54b2a',
    color: '#fff',
  },
};

export default Footer;
