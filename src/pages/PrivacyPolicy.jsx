import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/ui/Button";

function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[var(--color-bg)] py-12 px-4 sm:px-8 lg:px-16">
      <header className="mx-auto max-w-4xl">
        <div className="overflow-hidden rounded-2xl bg-gradient-to-r from-orange-50 via-white to-slate-50 p-6 shadow-sm">
          <div className="flex flex-col gap-3">
            
            <h1 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">Privacy Policy</h1>
            <p className="text-sm text-slate-700">Last updated: <strong>October 10, 2025</strong></p>
            <p className="text-base text-slate-600 max-w-2xl">
              At GetMeTutor we take your privacy seriously. Below we explain what information we collect, how we use it and the choices you have.
            </p>
          </div>
        </div>
      </header>

      <main className="mx-auto mt-8 max-w-4xl">
        <article className="space-y-8">
          <section className="overflow-hidden rounded-xl bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-900">How We Use Your Information</h2>
            <p className="mt-3 text-slate-600">
              GetMeTutor is committed to protecting your privacy and being transparent about how we collect and use your personal information. This policy outlines our data protection practices, your rights, and how we ensure your information remains safe and confidential.
            </p>
          </section>

          <section className="overflow-hidden rounded-xl bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">Who We Are</h3>
            <p className="mt-2 text-slate-600">GetMeTutor operates an online tutoring platform that provides personalised 1-on-1 tutoring sessions for students worldwide. This privacy policy applies to all our services and website interactions.</p>

            <h4 className="mt-4 font-semibold text-slate-800">Data Collection from Free Trial Form</h4>
            <p className="mt-2 text-slate-600">When you book a free trial session, we collect limited information to process your request and communicate effectively:</p>
            <ul className="mt-2 list-disc pl-5 text-slate-600">
              <li>Your full name</li>
              <li>Email address (to send booking confirmations)</li>
              <li>Contact number (for confirmation calls or messages)</li>
              <li>Student’s name, age, grade, subjects of interest, and learning goals</li>
            </ul>
            <p className="mt-2 text-slate-600">This data helps us schedule your session and match you with a suitable tutor.</p>
          </section>

          <section className="overflow-hidden rounded-xl bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">Enrollment and Membership Data</h3>
            <p className="mt-2 text-slate-600">When you enroll as a student or parent, we may collect additional information such as:</p>
            <ul className="mt-2 list-disc pl-5 text-slate-600">
              <li>Parent/Guardian’s name, address, email, and contact number</li>
              <li>Student’s name, age, grade level, and school information</li>
              <li>Learning preferences or educational needs</li>
              <li>Emergency contact details</li>
            </ul>
            <p className="mt-2 text-slate-600">You are responsible for keeping this information accurate and up to date.</p>
          </section>

          <section className="overflow-hidden rounded-xl bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">How We Use Your Data</h3>
            <ul className="mt-3 list-disc pl-5 text-slate-600">
              <li>To schedule and manage tutoring sessions</li>
              <li>To provide progress updates and communicate learning results</li>
              <li>To personalise your child’s learning experience</li>
              <li>To comply with applicable laws and regulations</li>
            </ul>
            <p className="mt-3 text-slate-600">We only process your personal data when necessary for legitimate business purposes and in accordance with data protection laws.</p>
          </section>

          <section className="overflow-hidden rounded-xl bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">Opt-Out & Data Sharing</h3>
            <p className="mt-2 text-slate-600">You have full control over your data. You may withdraw consent for promotional communications at any time and decline the use of photos or testimonials for marketing materials. We never sell or rent your personal data. Your information may only be shared with trusted service providers that comply with strong data protection standards or when required by law.</p>
          </section>

          <section className="overflow-hidden rounded-xl bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">Data Retention</h3>
            <p className="mt-2 text-slate-600">After your membership or subscription ends, we retain your data for a minimum of 2 years and a maximum of 3 years following cancellation. Attendance or activity records may be retained longer if legally required. After this period, your data will be securely and permanently deleted.</p>
          </section>

          <section className="overflow-hidden rounded-xl bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">Cookies Policy</h3>
            <p className="mt-2 text-slate-600">Cookies are small files stored on your device when you visit our website. They help us understand how visitors use our site and enhance your browsing experience. We use cookies to analyze site traffic, improve communication and performance, and display relevant advertising through trusted third parties. You can manage or disable cookies anytime in your browser settings.</p>
          </section>

          <section className="overflow-hidden rounded-xl bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">Your Rights</h3>
            <p className="mt-2 text-slate-600">You have the right to access, update, or delete your personal data, withdraw consent for marketing communications, and request a copy of the data we hold about you. To exercise these rights contact us using the details below.</p>
          </section>

          <section className="overflow-hidden rounded-xl bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">Policy Updates</h3>
            <p className="mt-2 text-slate-600">We may update this Privacy Policy periodically to reflect new legal or operational requirements. The latest version will always be available on our website.</p>
          </section>

          <section className="rounded-xl bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">Contact Us</h3>
            <div className="mt-3 grid gap-[4rem] md:gap-[10rem] sm:grid-cols-2">
              <div>
                <p className="text-slate-600">If you have questions about this Privacy Policy or how your data is handled, please contact us:</p>
                <ul className="mt-3 list-none text-slate-600">
                  <li>📧 <a href="mailto:support@getmetutor.com" className="text-orange-600">support@getmetutor.com</a></li>
                  <li>📞 +1 089461 55123</li>
                  <li>🌐 <a href="https://www.getmetutor.com" target="_blank" rel="noreferrer" className="text-orange-600">https://www.getmetutor.com</a></li>
                </ul>
              </div>

              <div className="flex">
                <div>
                  <p className="text-sm text-slate-700">Ready to start your learning journey with us?</p>
                  <Button to="/demo" text="Book Free Demo" className="mt-2" />
                </div>
              </div>
            </div>
          </section>
        </article>
      </main>
    </div>
  );
}

export default PrivacyPolicy;
