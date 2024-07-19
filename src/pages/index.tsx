import React from 'react';
import Head from 'next/head';
import Header from '@/components/homepage/Header';
import Hero from '@/components/homepage/Hero';
import Footer from '@/components/homepage/Footer';

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>편한가계부</title>
        <meta name="description" content="가계부를 작성하는 가장 편한 방법" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main>
        <Hero />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
