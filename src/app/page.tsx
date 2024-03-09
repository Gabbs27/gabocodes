import React from 'react';
import Head from 'next/head';
import Layout from './layout'; // Adjust the import path if necessary
import Hero from './hero'; // Adjust the import path if necessary
import About from './about'; // Adjust the import path if necessary
import Skills from './skills'; // Adjust the import path if necessary
import Portfolio from './portfolio'; // Adjust the import path if necessary
import Testimonials from './testimonials'; // Adjust the import path if necessary
import Contact from './contact'; // Adjust the import path if necessary


const HomePage = () => {
  return (
    <Layout>
      <Head>
        <title>Full Stack Developer | Your Name</title>
        <meta name="description" content="Full Stack Developer with expertise in React and modern web technologies." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      {/* Here you can start adding the sections */}
      <Hero />
      <About />
      <Skills />
      <Portfolio />
      <Testimonials />
      <Contact />
      
      {/* No need to include Footer if it's part of the Layout */}
    </Layout>
  );
};

export default HomePage;
