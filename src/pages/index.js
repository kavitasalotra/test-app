import React from 'react';
import Layout from '../components/Layout';
import HomeHero from '../components/HomeHero';
import About from '../components/About';
import FeatureCard from '../components/FeatureCard';
import Team from '../components/Team';
import Blog from '../components/Blog';
import CallToAction from '../components/Invite';

export default function Home() {
  return (
    <Layout>
      <HomeHero />
      <About />
      <Team />
      <FeatureCard />
      <CallToAction />
      <Blog />
    </Layout>
  );
}
