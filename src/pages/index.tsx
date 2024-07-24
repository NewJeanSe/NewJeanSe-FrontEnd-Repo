import React from 'react';
import Header from '@/components/index/Header';
import Body from '@/components/index/Body';

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <Body />
      <div style={{ paddingTop: '60px' }}>
        <p style={{ marginTop: '200vh' }}>Scroll down to see the fixed header</p>
      </div>
    </div>
  );
};

export default Home;
