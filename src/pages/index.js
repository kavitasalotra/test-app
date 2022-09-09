import React from 'react';
import Layout from '../components/Layout';
import HomeHero from '../components/HomeHero';
import About from '../components/About';
import FeatureCard from '../components/FeatureCard';

export default function Home() {
  return (
    <Layout>
      <HomeHero />
      <About />
      <FeatureCard />
    </Layout>
  );
}
