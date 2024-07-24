import React from 'react';
import styles from '../../styles/index/Body.module.css';
import RightBody from './RightBody';

const Body: React.FC = () => {
  return (
    <main className={styles.body}>
      <div className={styles.leftImageWrapper}>
        <img src="/images/index/게시용 한국 지도.png" alt="Korean Map" className={styles.mapImage} />
      </div>
      <div className={styles.rightBodyWrapper}>
        <RightBody />
      </div>
    </main>
  );
};

export default Body;
