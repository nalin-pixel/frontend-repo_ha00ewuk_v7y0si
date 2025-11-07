import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero({ onAddSampleContent }) {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/40 to-slate-950/90" />

      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-start justify-center px-6">
        <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-slate-200 ring-1 ring-white/20 backdrop-blur">
          <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" />
          Available for opportunities
        </p>
        <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl">
          Hi, I’m <span className="text-emerald-400">Your Name</span>
          <br /> I build modern, playful, interactive experiences.
        </h1>
        <p className="mt-4 max-w-2xl text-slate-300">
          Explore my work, view my CV, and browse a gallery of achievements. The 3D scene is interactive—drag to look around!
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href="#cv"
            className="inline-flex items-center justify-center rounded-md bg-emerald-500 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-400 hover:shadow lg:text-base"
          >
            View CV
          </a>
          <a
            href="#gallery"
            className="inline-flex items-center justify-center rounded-md border border-white/20 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10 lg:text-base"
          >
            View Achievements
          </a>
          <button
            onClick={onAddSampleContent}
            className="inline-flex items-center justify-center rounded-md border border-white/20 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10 lg:text-base"
          >
            Add Sample Content
          </button>
        </div>
      </div>
    </section>
  );
}
