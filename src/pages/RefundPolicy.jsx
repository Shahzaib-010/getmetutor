import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/ui/Button";

function RefundPolicy() {
  return (
    <div className="min-h-screen bg-[var(--color-bg)] py-12 px-4 sm:px-8 lg:px-16">
      <header className="mx-auto max-w-4xl">
        <div className="overflow-hidden rounded-2xl bg-gradient-to-r from-orange-50 via-white to-slate-50 p-6 shadow-sm">
          <div className="flex flex-col gap-3">
            <h1 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">Refund Policy</h1>
            <p className="text-sm text-slate-700">Last updated: <strong>October 10, 2025</strong></p>
            <p className="text-base text-slate-600 max-w-2xl">
              We stand behind our tutoring services with a commitment to your satisfaction. Learn about our refund guarantee and cancellation policies.
            </p>
          </div>
        </div>
      </header>

      <main className="mx-auto mt-8 max-w-4xl">
        <article className="space-y-8">
          {/* Welcome Section */}
          <section className="overflow-hidden rounded-xl bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-900">Welcome to GetMeTutor</h2>
            <p className="mt-3 text-slate-600">
              GetMeTutor is a trusted online tutoring platform connecting students with qualified tutors for personalized, effective, and flexible learning, helping every learner achieve academic success with confidence.
            </p>
          </section>

          {/* 7-Day Money-Back Guarantee */}
          <section className="overflow-hidden rounded-xl bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-900">7-Day Money-Back Guarantee</h2>
            <p className="mt-3 text-slate-600">
              We offer a 7-day money-back guarantee for all new enrollments. If you are not fully satisfied after your first paid session, simply contact us at <strong>info@getmetutor.online</strong> within 7 days of your first session to request a full refund for any unused sessions.
            </p>
            <p className="mt-3 text-slate-600">
              Refunds will be processed using the original payment method within 5–10 business days of approval.
            </p>
          </section>

          {/* Program Cancellations */}
          <section className="overflow-hidden rounded-xl bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-900">Program Cancellations</h2>
            <p className="mt-3 text-slate-600">
              You may cancel your program anytime by providing at least 15 days' written notice via email. Our team will assist in closing your account smoothly and ensure all pending sessions or payments are settled fairly.
            </p>
          </section>

          {/* Missed or Rescheduled Sessions */}
          <section className="overflow-hidden rounded-xl bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-900">Missed or Rescheduled Sessions</h2>
            <ul className="mt-4 space-y-3">
              <li className="flex gap-3 text-slate-600">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-orange-400" />
                <span>Sessions can be rescheduled with a minimum of 12 hours' notice.</span>
              </li>
              <li className="flex gap-3 text-slate-600">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-orange-400" />
                <span>If a session is missed without prior notice, it will be marked as completed and not eligible for a refund or reschedule.</span>
              </li>
              <li className="flex gap-3 text-slate-600">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-orange-400" />
                <span>Repeated missed sessions may affect scheduling flexibility in the future.</span>
              </li>
            </ul>
          </section>

          {/* Managing Cookies */}
          <section className="overflow-hidden rounded-xl bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-900">Managing Cookies</h2>
            <p className="mt-3 text-slate-600">
              You can manage or disable cookies anytime in your browser settings under Options, Preferences, or Help.
            </p>
          </section>

          {/* Policy Updates */}
          <section className="overflow-hidden rounded-xl bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-900">Policy Updates</h2>
            <p className="mt-3 text-slate-600">
              We may update this Refund Policy occasionally to ensure clarity and compliance with business and legal requirements. The date of the last update is shown at the top of this page.
            </p>
          </section>

          {/* Contact for Refunds or Changes */}
          <section className="overflow-hidden rounded-xl bg-gradient-to-r from-orange-50 to-slate-50 p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-900">Contact for Refunds or Changes</h2>
            <p className="mt-3 text-slate-600 mb-4">
              For any refund, cancellation, or rescheduling requests, please contact our support team at:
            </p>
            <div className="flex items-center gap-2 text-slate-700">
              <span className="text-xl">📧</span>
              <a href="mailto:info@getmetutor.online" className="font-semibold text-orange-600 hover:text-orange-700 underline">
                info@getmetutor.online
              </a>
            </div>
          </section>
        </article>

        {/* Navigation Links */}
        <div className="mt-12 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Link to="/terms">
            <Button variant="secondary">Read Our Terms</Button>
          </Link>
          <Link to="/privacy-policy">
            <Button variant="secondary">Privacy Policy</Button>
          </Link>
          <Link to="/">
            <Button>Back to Home</Button>
          </Link>
        </div>
      </main>
    </div>
  );
}

export default RefundPolicy;
