import React from "react";
import { Link } from "react-router-dom";
import Faq from "../components/section/Faq";

function Terms() {
  return (
    <div className="min-h-screen bg-[var(--color-bg)] py-12 px-4 sm:px-8 lg:px-16">
      <header className="mx-auto max-w-4xl">
        <div className="overflow-hidden rounded-2xl bg-gradient-to-r from-orange-50 via-white to-slate-50 p-6 shadow-sm">
          <div className="flex flex-col gap-3">
            
            <h1 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">Terms and Conditions</h1>
            <p className="text-sm text-slate-700">Welcome to GetMeTutor</p>
            <p className="text-base text-slate-600 max-w-2xl">
              GetMeTutor is a trusted online tutoring platform connecting students with qualified tutors for personalized, effective, and flexible learning.
            </p>
          </div>
        </div>
      </header>

      <main className="mx-auto mt-8 max-w-4xl space-y-8">
        <section className="overflow-hidden rounded-xl bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-900">Introduction</h2>
          <p className="mt-3 text-slate-600">Welcome to GetMeTutor, a trusted platform for personalized 1-on-1 online tutoring. By signing up for our services, booking a demo session, or enrolling in a course, you agree to follow the Terms and Conditions outlined below. Please read them carefully before proceeding.</p>
        </section>

        <section className="overflow-hidden rounded-xl bg-white p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-slate-900">Definitions</h3>
          <p className="mt-2 text-slate-600">“We,” “Our,” or “Us” refer to GetMeTutor, the online tutoring platform providing educational services. “You” refers to the student, parent, or guardian enrolling in or using GetMeTutor’s tutoring services. “Tutor” means the qualified instructor assigned to provide online tutoring sessions. “Advisor” refers to the representative assisting with enrollment and student support.</p>
        </section>

        <section className="overflow-hidden rounded-xl bg-white p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-slate-900">Quality of Service</h3>
          <p className="mt-2 text-slate-600">All tutors at GetMeTutor are qualified and verified educators. We ensure every session is conducted with professionalism, care, and attention to each student’s goals. Our aim is to provide high-quality, engaging online tutoring that helps every learner thrive.</p>
        </section>

        <section className="overflow-hidden rounded-xl bg-white p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-slate-900">Suspension or Termination of Services</h3>
          <p className="mt-2 text-slate-600">GetMeTutor may suspend or discontinue services if:</p>
          <ul className="mt-2 list-disc pl-5 text-slate-600">
            <li>Fees are not paid by the due date.</li>
            <li>The student is absent for two consecutive weeks without notice or approval.</li>
            <li>The student or parent violates these Terms or engages in inappropriate behavior.</li>
            <li>The student’s actions harm the reputation or smooth functioning of GetMeTutor.</li>
          </ul>
        </section>

        <section className="overflow-hidden rounded-xl bg-white p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-slate-900">Privacy and Data Protection</h3>
          <p className="mt-2 text-slate-600">Your privacy is extremely important to us. All personal data collected during registration or tutoring is handled in accordance with our <Link to="/privacy-policy" className="text-orange-600">Privacy Policy</Link>. By enrolling in our services, you confirm that you have read and agreed to the GetMeTutor Privacy Policy.</p>
        </section>

        <section className="overflow-hidden rounded-xl bg-white p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-slate-900">Discontinuation of Services by Student</h3>
          <p className="mt-2 text-slate-600">If you wish to cancel your tutoring program, please provide a 15-day written notice via email at <a href="mailto:support@getmetutor.com" className="text-orange-600">support@getmetutor.com</a>. We will process your request promptly and securely close your account.</p>
        </section>

        <section className="overflow-hidden rounded-xl bg-white p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-slate-900">Refund Policy</h3>
          <p className="mt-2 text-slate-600">We offer a 7-day money-back guarantee for new enrollments. If you’re unsatisfied during this period, you may request a refund for unused sessions. Missed sessions can be rescheduled with notice, but the original course end date will remain unchanged. For full details, please visit our Refund Policy page.</p>
        </section>

        <section className="overflow-hidden rounded-xl bg-white p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-slate-900">Tutoring Program & Enrollment</h3>
          <p className="mt-2 text-slate-600">Your program includes online lessons, learning tools, and one-on-one tutoring support through GetMeTutor’s secure learning platform. Our advisors guide students and parents to select the right program based on individual learning needs. Once enrolled, a qualified tutor will be assigned to conduct lessons and track progress throughout your learning journey.</p>
        </section>

        <section className="overflow-hidden rounded-xl bg-white p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-slate-900">Login Credentials & Tutor Assignment</h3>
          <p className="mt-2 text-slate-600">After registration, you’ll receive your username and password. You are responsible for keeping these credentials confidential. If you suspect unauthorized access to your account, contact us immediately at <a href="mailto:support@getmetutor.com" className="text-orange-600">support@getmetutor.com</a>. GetMeTutor ensures each student is matched with a suitable, qualified tutor. We reserve the right to change tutors if necessary due to scheduling, subject expertise, or operational reasons. For safety and privacy, students and parents must not share personal contact details with tutors outside the platform.</p>
        </section>

        <section className="overflow-hidden rounded-xl bg-white p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-slate-900">Limitation of Liability</h3>
          <p className="mt-2 text-slate-600">GetMeTutor is not liable for interruptions or delays caused by factors beyond our control, including but not limited to power or internet outages, technical issues or natural disasters. While we strive for consistent service quality, uninterrupted access cannot be guaranteed. Our maximum liability shall not exceed the total amount of fees paid by the student.</p>
        </section>

        <section className="overflow-hidden rounded-xl bg-white p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-slate-900">General Terms</h3>
          <p className="mt-2 text-slate-600">GetMeTutor reserves the right to update or modify these Terms at any time. We may withdraw or update parts of our website or services without prior notice. Continued use of our services implies acceptance of updated Terms. These Terms are governed by the applicable laws of your country of residence.</p>
        </section>

        {/* Add FAQ before footer as requested */}
        <div className="mt-8">
          <Faq />
        </div>

        <section className="rounded-xl bg-white p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-slate-900">Contact Us</h3>
          <p className="mt-2 text-slate-600">For questions, concerns, or clarification regarding these Terms, please reach out: <a href="mailto:support@getmetutor.com" className="text-orange-600">support@getmetutor.com</a> or visit <a href="https://www.getmetutor.com" target="_blank" rel="noreferrer" className="text-orange-600">https://www.getmetutor.com</a>.</p>
        </section>

      </main>
    </div>
  );
}

export default Terms;
