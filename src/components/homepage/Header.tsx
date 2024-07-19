import React from 'react';

const Header: React.FC = () => {
  return (
    <header style={styles.header}>
      <div style={styles.logoContainer}>
        <img src="/logo.png" alt="Project Logo" style={styles.logoImage} />
        <div style={styles.logoText}>New JeanSe</div>
      </div>
      <nav style={styles.nav}>
        <a href="#home">홈</a>
        <a href="#login">로그인</a>
        <a href="#features">주요특징</a>
      </nav>
    </header>
  );
};

const styles = {
    
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px',
    backgroundColor: '#f2eceb',
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#f2eceb',
    padding: '5px', // 패딩 추가
  },
  logoImage: {
    width: '40px',
    height: '40px',
    marginRight: '10px',
  },
  logoText: {
    fontSize: '24px',
    color: '#fff',
    fontWeight: 'bold', // Bold 체로 변경
  },
  nav: {
    display: 'flex',
    gap: '20px',
  }
};

export default Header;
