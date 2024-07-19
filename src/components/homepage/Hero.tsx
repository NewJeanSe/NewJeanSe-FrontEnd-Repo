import React from 'react';

const Hero: React.FC = () => {
  return (
    <section style={styles.hero}>
      <div style={styles.textContainer}>
        <h1>가계부를 작성하는 가장 편한 방법</h1>
        <h2>편한가계부</h2>
        <div style={styles.buttons}>
          <a href="#" style={styles.button}>Google Play에서 다운로드</a>
          <a href="#" style={styles.button}>App Store에서 다운로드</a>
          <a href="#" style={styles.button}>PC가계부 다운로드 하기</a>
        </div>
      </div>
      <div style={styles.imageContainer}>
        <img src="/images/test1.png" alt="Test 1" style={styles.testImage} />
        <img src="/images/test2.png" alt="Test 2" style={styles.testImage} />
      </div>
    </section>
  );
};

const styles = {
  hero: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '50px',
    backgroundColor: '#ff6f4a',
    color: '#fff',
  },
  textContainer: {
    flex: 1,
  },
  buttons: {
    marginTop: '20px',
  },
  button: {
    display: 'inline-block',
    padding: '10px 20px',
    margin: '5px',
    backgroundColor: '#000',
    color: '#fff',
    textDecoration: 'none',
    borderRadius: '5px',
  },
  imageContainer: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  testImage: {
    width: '150px',
    margin: '0 10px',
  },
};

export default Hero;
