import React from 'react'
import SubjectSection from '../components/section/SubjectSection'
import HeroSection from '../components/section/HeroSection'
import BannerLoop from '../components/section/BannerLoop'
import Faq from '../components/section/Faq'
import PricingSection from '../components/section/PricingSection'

function Home() {
  return (
    <section className='w-full h-full'>
          <HeroSection/>
          <BannerLoop/>
          <SubjectSection/>
          <PricingSection />
          <Faq/>

    </section>
  )
}

export default Home