import React from 'react';

export default function CVSection({ cvUrl, name, role, summary, skills }) {
  return (
    <section id="cv" className="relative isolate bg-white py-16 text-slate-900">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Curriculum Vitae</h2>
            <p className="mt-2 text-slate-600">Download a full copy or skim the highlights below.</p>
          </div>
          {cvUrl && (
            <a
              href={cvUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-md bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-700"
            >
              Download PDF
            </a>
          )}
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="md:col-span-2 space-y-6">
            <div className="rounded-xl border border-slate-200 p-6 shadow-sm">
              <h3 className="text-xl font-semibold">Profile</h3>
              <p className="mt-2 text-slate-700">
                <span className="font-medium">{name || 'Your Name'}</span> — {role || 'Product Engineer'}
              </p>
              <p className="mt-3 text-slate-700">{summary || 'I craft performant and delightful digital products with a focus on usability, aesthetics, and technical excellence.'}</p>
            </div>

            <div className="rounded-xl border border-slate-200 p-6 shadow-sm">
              <h3 className="text-xl font-semibold">Experience</h3>
              <ul className="mt-3 space-y-3 text-slate-700">
                <li>
                  <p className="font-medium">Senior Frontend Developer — Acme Inc.</p>
                  <p className="text-sm text-slate-600">2022 — Present</p>
                  <p className="mt-1">Leading UI efforts for a multi-tenant SaaS platform, introducing design systems and performance improvements.</p>
                </li>
                <li>
                  <p className="font-medium">Full-Stack Engineer — Beta Labs</p>
                  <p className="text-sm text-slate-600">2020 — 2022</p>
                  <p className="mt-1">Built data-rich dashboards and APIs, collaborating closely with designers and stakeholders.</p>
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-xl border border-slate-200 p-6 shadow-sm">
              <h3 className="text-xl font-semibold">Core Skills</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {(skills && skills.length ? skills : ['React', 'TypeScript', 'Node.js', 'FastAPI', 'MongoDB', 'TailwindCSS']).map((s) => (
                  <span key={s} className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-800">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-slate-200 p-6 shadow-sm">
              <h3 className="text-xl font-semibold">Education</h3>
              <ul className="mt-3 space-y-3 text-slate-700">
                <li>
                  <p className="font-medium">B.Sc. in Computer Science</p>
                  <p className="text-sm text-slate-600">University of Somewhere — 2016 — 2020</p>
                </li>
                <li>
                  <p className="font-medium">Design Systems & Accessibility</p>
                  <p className="text-sm text-slate-600">Certification — 2021</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
