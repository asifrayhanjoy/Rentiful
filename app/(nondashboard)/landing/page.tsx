import React from 'react'
import HeroSection from './HeroSection'
import FeaturesSection from './FeaturesSection'
import Discover from './Discover'
import HowItWorksSection from './HowItWorksSection'
import CallToActionSection from './CallToActionSection'
import FooterSection from './FooterSection'


const Landing = () => {

  return (
    <div>
      <HeroSection />
      <FeaturesSection />
      <Discover />
      <HowItWorksSection />
      <CallToActionSection></CallToActionSection>
      <FooterSection></FooterSection>
    </div>
  )
}

export default Landing;
