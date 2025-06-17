
import React from 'react';
import Navigation from '../components/Navigation';
import ScrollProgress from '../components/ScrollProgress';
import HeroSection from '../components/HeroSection';
import BreakdownSection from '../components/BreakdownSection';
import EmergencySection from '../components/EmergencySection';
import DeclareSection from '../components/DeclareSection';
import DonateSection from '../components/DonateSection';
import LatestSection from '../components/LatestSection';
import ToolkitSection from '../components/ToolkitSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="bg-black min-h-screen">
      <ScrollProgress />
      <Navigation />
      <HeroSection />
      <BreakdownSection />
      <DonateSection />
      <EmergencySection />
      <DeclareSection />
      <LatestSection />
      <ToolkitSection />
      <Footer />
    </div>
  );
};

export default Index;
