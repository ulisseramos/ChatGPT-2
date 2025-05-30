
import React from 'react';
import AnimatedBackground from '@/components/AnimatedBackground';
import HeroSection from '@/components/HeroSection';
import ProblemsSection from '@/components/ProblemsSection';
import FeaturesSection from '@/components/FeaturesSection';
import SocialProofSection from '@/components/SocialProofSection';
import PricingSection from '@/components/PricingSection';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-x-hidden">
      <AnimatedBackground />
      
      <main className="relative z-10">
        <HeroSection />
        <ProblemsSection />
        <FeaturesSection />
        <SocialProofSection />
        <PricingSection />
        <FAQSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
