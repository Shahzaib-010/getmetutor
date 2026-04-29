import React from "react";
import Button from "../components/ui/Button";

const holidayBreaks = [
  {
    title: "Eid-ul-Fitr Break",
    date: "Friday, 20 March 2026 – Monday, 23 March 2026",
    note: "A short break to celebrate with family and return refreshed for the next learning cycle.",
  },
  {
    title: "Eid-ul-Adha Break",
    date: "Wednesday, 27 May 2026 – Sunday, 31 May 2026",
    note: "Planned in advance so families can observe the holiday comfortably without missing important updates.",
  },
  {
    title: "Christmas Holiday Break",
    date: "Thursday, 25 December 2025 – Sunday, 4 January 2026",
    note: "A festive year-end pause for celebration, rest, and time with loved ones.",
  },
];

const reminderPoints = [
  "These holidays are pre-scheduled and shared with parents through the Parent Guide Manual, routine invoices, and policies.",
  "Regular sessions resume immediately after each holiday break.",
  "No make-up or refund is applicable for the official holidays listed on this page.",
];

function Holiday() {
  return (
    <div className="min-h-screen bg-(--color-bg) py-12 px-4 sm:px-8 lg:px-16">
      <header className="mx-auto max-w-5xl">
        <div className="overflow-hidden rounded-2xl bg-linear-to-r from-orange-50 via-white to-slate-50 p-6 shadow-sm sm:p-8 lg:p-10">
          <div className="max-w-3xl space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-orange-500">
              Official Holiday Calendar
            </p>
            <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Official Holiday Calendar 2025
            </h1>
            <p className="text-base leading-8 text-slate-600 sm:text-lg">
              At Get Tutors Online, we value both education and the importance of family and cultural celebrations.
            </p>
          </div>
        </div>
      </header>

      <main className="mx-auto mt-8 max-w-5xl">
        <article className="space-y-8">
          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <div className="flex flex-col gap-3 border-b border-slate-100 pb-5">
              <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                🎉 Official Holidays & Breaks 🎉
              </h2>
              <p className="text-slate-600">
                These breaks are planned in advance so families can celebrate while learning remains organized.
              </p>
            </div>

            <div className="mt-6 grid gap-5 lg:grid-cols-3">
              {holidayBreaks.map((holiday) => (
                <div
                  key={holiday.title}
                  className="rounded-3xl border border-slate-200 bg-slate-50 p-5 transition-transform duration-300 hover:-translate-y-1 hover:shadow-md"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-orange-500">
                    Holiday Break
                  </p>
                  <h3 className="mt-3 text-xl font-semibold text-slate-900">{holiday.title}</h3>
                  <p className="mt-3 text-sm font-medium text-slate-700">{holiday.date}</p>
                  <p className="mt-4 text-sm leading-7 text-slate-600">{holiday.note}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-3xl border border-orange-100 bg-linear-to-r from-orange-50 to-white p-6 shadow-sm sm:p-8">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
              🚨 Important Reminder
            </h2>
            <div className="mt-5 space-y-4">
              {reminderPoints.map((point) => (
                <div key={point} className="flex gap-3 text-slate-600">
                  <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-orange-400" />
                  <p className="text-sm leading-7 sm:text-base">{point}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-3xl bg-slate-950 p-6 text-white shadow-[0_24px_80px_-48px_rgba(15,23,42,0.85)] sm:p-8">
            <div className="max-w-3xl">
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                We appreciate your cooperation
              </h2>
              <p className="mt-3 text-sm leading-7 text-slate-300 sm:text-base">
                Thank you for planning ahead with us. We wish you happy celebrations and quality time with your loved ones.
              </p>
            </div>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-orange-500">
                    Ready to book?
                  </p>
                  <h2 className="mt-2 text-xl font-semibold text-slate-900">
                    Start a free trial after checking our holiday schedule.
                  </h2>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    Move straight to the demo page to choose a time for your child’s first session.
                  </p>
                </div>

                <Button href="/demo" text="Book Free Trial" />
            </div>
          </section>
        </article>
      </main>
    </div>
  );
}

export default Holiday;