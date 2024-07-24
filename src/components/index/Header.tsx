import React from 'react';
import TransparentButton from './TransparentButton';
import styles from '../../styles/index/Header.module.css';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src="/images/ElectricKo로고.svg" alt="Logo" />
        <span>ElectricKo!</span>
      </div>
      <nav className={styles.nav}>
        <TransparentButton className={styles.navButton}>로그인</TransparentButton>
        <TransparentButton className={styles.navButton}>홈</TransparentButton>
        <TransparentButton className={styles.navButton}>주요특징</TransparentButton>
        <TransparentButton className={styles.navButton}>미리 보기</TransparentButton>
      </nav>
    </header>
  );
};

export default Header;
