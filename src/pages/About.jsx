import React from "react";
import { Link } from "react-router-dom";
import BannerLoop from "../components/section/BannerLoop";
import Faq from "../components/section/Faq";
import Button from "../components/ui/Button";
import PricingSection from "../components/section/PricingSection";
import HowItWorksSection from "../components/section/HowItWorksSection";

function About() {
  return (
    <div className="min-h-screen bg-[var(--color-bg)]">
      <header className="mx-auto max-w-6xl px-6 py-12">
        <div className="overflow-hidden rounded-2xl bg-gradient-to-r from-white to-orange-50 p-8 shadow-sm">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-3xl">
              <h1 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">About GetMeTutor</h1>
              <p className="mt-3 text-lg text-slate-700">
                 GetMeTutor is a trusted online tutoring platform helping students across the UK, USA and Canada achieve better academic results. We connect learners with experienced tutors for personalised one to one sessions in Maths, English Science and more.
                 <br />
                 <br/>
                 Our approach focuses on clear explanations, structured learning and building confidence so every student can succeed in school exams and beyond.

              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Button href="/demo" text="Book Free Trial" className="bg-orange-500" />
               
              </div>
            </div>

            <div className="mt-6 lg:mt-0 flex w-full max-w-xs flex-col gap-3 rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
              <h4 className="text-sm font-semibold text-slate-900">Why Choose GetMeTutor</h4>
              <ul className="mt-2 space-y-2 text-sm text-slate-600">
                <li>Experienced and verified tutors</li>
                <li>1-to-1 personalised sessions</li>
                <li>Support for GCSE A Level and K12</li>
                <li>Flexible scheduling to suit your routine</li>
                <li>Interactive and easy to use online platform</li>
              </ul>
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 pb-12">
        <section className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-slate-900">Who We Are</h2>
            <p className="text-slate-600">GetMeTutor is a trusted online tutoring platform supporting students across the UK, USA and Canada. We connect learners with experienced tutors for one to one personalised sessions in Maths, English Science and more.
            <br/>
              Our focus is on clear explanations, structured learning and building confidence so every student can improve academically and perform better in exams such as GCSE A Levels and K12 assessments.
</p>

            <h3 className="text-lg font-semibold text-slate-900">Our Mission</h3>
            <p className="text-slate-600">Our mission is to make high quality education accessible to every student through personalised support expert tutors and flexible online learning. We aim to help every learner build confidence, improve results and reach their full potential.</p>

           
          </div>

          <aside className="space-y-6">
            <div className="overflow-hidden rounded-xl bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">Our Approach</h3>
              <ul className="mt-3 space-y-2 text-slate-600">
                <li>Experienced and verified tutors</li>
                <li>One to one personalised learning</li>
                <li>Support for GCSE A Levels and K12</li>
                <li>Flexible scheduling that fits your routine</li>
                <li>Secure and easy to use online platform</li>
                <li>Regular progress tracking and feedback</li>
              </ul>
            </div>

            

            <div className="rounded-xl bg-gradient-to-r from-orange-50 to-white p-6 text-center shadow-sm">
              <h4 className="text-lg font-semibold text-slate-900">Ready to Begin?</h4>
              <p className="mt-2 text-slate-600">Join hundreds of students already improving their grades with personalised tutoring.</p>
              <div className="mt-4 flex justify-center">
                <Button href="/demo" text="Book Free Trial" className="bg-orange-500" />
              </div>
            </div>
          </aside>
        </section>


        
      </main>
      <section className="mt-12 w-full">

        <div>
          <BannerLoop />
        </div>

          <div className="w-full">
            <HowItWorksSection />
          </div>
          
          <div className="mt-4">
            <PricingSection />
          </div>
        </section>

        <section className="mt-12">
          <Faq />
        </section>
    </div>
  );
}

export default About;
