import React from 'react';

export default function Gallery({ items = [] }) {
  const data = items.length
    ? items
    : [
        {
          id: 1,
          title: 'Hackathon Winner',
          description: '1st place at DevCon Hackathon 2024',
          image:
            'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1600&auto=format&fit=crop',
        },
        {
          id: 2,
          title: 'Conference Speaker',
          description: 'Spoke about performance and DX',
          image:
            'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1600&auto=format&fit=crop',
        },
        {
          id: 3,
          title: 'Open Source',
          description: 'Maintainer of a popular UI library',
          image:
            'https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=1600&auto=format&fit=crop',
        },
        {
          id: 4,
          title: 'Award of Excellence',
          description: 'Recognized for innovation in UX',
          image:
            'https://images.unsplash.com/photo-1485217988980-11786ced9454?q=80&w=1600&auto=format&fit=crop',
        },
      ];

  return (
    <section id="gallery" className="bg-slate-50 py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">Achievements Gallery</h2>
            <p className="mt-2 text-slate-600">A snapshot of milestones I’m proud of.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {data.map((card) => (
            <figure
              key={card.id}
              className="group overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
              </div>
              <figcaption className="p-4">
                <h3 className="text-lg font-semibold text-slate-900">{card.title}</h3>
                <p className="mt-1 text-sm text-slate-600">{card.description}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
