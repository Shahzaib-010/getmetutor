import React from 'react'
import SubjectSection from '../components/section/SubjectSection'
import HeroSection from '../components/section/HeroSection'
import BannerLoop from '../components/section/BannerLoop'
import Faq from '../components/section/Faq'
import PricingSection from '../components/section/PricingSection'
import TestimonialsSection from '../components/section/TestimonialsSection'
import HowItWorksSection from '../components/section/HowItWorksSection'
import BlogsPreviewSection from '../components/section/BlogsPreviewSection'

function Home() {
  return (
    <section className='w-full h-full'>
          <HeroSection/>
          <BannerLoop/>
          <SubjectSection/>
          <HowItWorksSection />
          <TestimonialsSection />
          <PricingSection />
          <BlogsPreviewSection />
          <Faq/>

    </section>
  )
}

export default Home
