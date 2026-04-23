import React from "react";
import { Link } from "react-router-dom";
import BannerLoop from "../components/section/BannerLoop";
import Faq from "../components/section/Faq";
import Button from "../components/ui/Button";
import PricingSection from "../components/section/PricingSection";

function About() {
  return (
    <div className="min-h-screen bg-[var(--color-bg)]">
      <header className="mx-auto max-w-6xl px-6 py-12">
        <div className="overflow-hidden rounded-2xl bg-gradient-to-r from-white to-orange-50 p-8 shadow-sm">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-3xl">
              <h1 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">About GetMeTutor</h1>
              <p className="mt-3 text-lg text-slate-700">
                GetMeTutor is a trusted online tutoring platform connecting students with qualified tutors for personalized, effective, and flexible learning. We help every learner build confidence and achieve academic success.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Button href="/demo" text="Book a Free Demo" className="bg-orange-500" />
               
              </div>
            </div>

            <div className="mt-6 lg:mt-0 flex w-full max-w-xs flex-col gap-3 rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
              <h4 className="text-sm font-semibold text-slate-900">Why Choose GetMeTutor</h4>
              <ul className="mt-2 space-y-2 text-sm text-slate-600">
                <li>Verified, experienced tutors</li>
                <li>Personalised lesson plans</li>
                <li>Flexible scheduling to suit your routine</li>
                <li>Secure, easy-to-use online platform</li>
              </ul>
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 pb-12">
        <section className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-slate-900">Who We Are</h2>
            <p className="text-slate-600">GetMeTutor connects qualified tutors with students seeking high-quality, personalised education. We’re committed to making learning accessible, reliable, and results-driven. Through verified educators, customised lesson plans, and structured guidance, we help every student improve academically and enjoy learning.</p>

            <h3 className="text-lg font-semibold text-slate-900">Our Mission</h3>
            <p className="text-slate-600">Our mission is to make quality education accessible for every learner by connecting students with passionate tutors who provide personalised guidance and engaging lessons.</p>

            <h3 className="text-lg font-semibold text-slate-900">How It Works</h3>
            <ol className="mt-3 list-decimal pl-5 text-slate-600 space-y-3">
              <li>
                <strong>Book a Free Demo</strong> — Start by booking a free demo session at your preferred time to experience our teaching approach.
              </li>
              <li>
                <strong>Attend the Demo</strong> — Join a live demo with your child and see how our tutors guide and motivate students.
              </li>
              <li>
                <strong>Choose Your Package</strong> — Select a plan that fits your goals and schedule.
              </li>
              <li>
                <strong>Check Availability</strong> — We'll confirm tutor availability and finalise times.
              </li>
              <li>
                <strong>Complete Enrollment</strong> — Secure your plan with a quick payment.
              </li>
              <li>
                <strong>Begin Regular Sessions</strong> — Start consistent, interactive lessons with your assigned tutor.
              </li>
            </ol>
          </div>

          <aside className="space-y-6">
            <div className="overflow-hidden rounded-xl bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">Our Values</h3>
              <ul className="mt-3 space-y-2 text-slate-600">
                <li>Verified Tutors</li>
                <li>Personalised Learning</li>
                <li>Flexible Scheduling</li>
                <li>Secure Platform</li>
                <li>Progress Tracking</li>
                <li>24x7 Support</li>
              </ul>
            </div>

            <div className="overflow-hidden rounded-xl bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">Some Numbers</h3>
              <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-2">
                <div className="rounded-lg border border-slate-200 bg-white p-4 text-center">
                  <div className="text-2xl font-bold text-slate-900">999+</div>
                  <div className="text-sm text-slate-600">Students Tutored</div>
                </div>
                <div className="rounded-lg border border-slate-200 bg-white p-4 text-center">
                  <div className="text-2xl font-bold text-slate-900">350+</div>
                  <div className="text-sm text-slate-600">Successful Courses</div>
                </div>
                <div className="rounded-lg border border-slate-200 bg-white p-4 text-center">
                  <div className="text-2xl font-bold text-slate-900">50+</div>
                  <div className="text-sm text-slate-600">Experienced Tutors</div>
                </div>
                <div className="rounded-lg border border-slate-200 bg-white p-4 text-center">
                  <div className="text-2xl font-bold text-slate-900">98%</div>
                  <div className="text-sm text-slate-600">Student Satisfaction</div>
                </div>
              </div>
            </div>

            <div className="rounded-xl bg-gradient-to-r from-orange-50 to-white p-6 text-center shadow-sm">
              <h4 className="text-lg font-semibold text-slate-900">Ready to Begin?</h4>
              <p className="mt-2 text-slate-600">Join hundreds of students already improving their grades with personalised tutoring.</p>
              <div className="mt-4 flex justify-center">
                <Button href="/demo" text="Book Free Demo" className="bg-orange-500" />
              </div>
            </div>
          </aside>
        </section>


        <section className="mt-12">
          
          <div className="mt-4">
            <PricingSection />
          </div>
        </section>

        <section className="mt-12">
          <Faq />
        </section>
      </main>
    </div>
  );
}

export default About;
