import React from 'react';
import styles from '../../styles/index/RightBody.module.css';
import TransparentButton from './TransparentButton';

const RightBody: React.FC = () => {
  return (
    <div className={styles.rightBody}>
      <div className={styles.header}>
        <img src="/images/전기 로고.svg" alt="Electric Logo" className={styles.headerLogo} />
        <h1>ElectricKo!</h1>
      </div>
      <p className={styles.description}>
        당신이 알고 싶은<br />
        대한민국 <span className={styles.highlight}>전력</span> 에너지의 모든 것.
      </p>
      <div className={styles.buttonWrapper}>
        <TransparentButton className={styles.button}>
          <img src="/images/전기 로고.svg" alt="Electric Logo" className={styles.logo} />
          나만의 데이터 찾으러 가기
        </TransparentButton>
      </div>
    </div>
  );
};

export default RightBody;
