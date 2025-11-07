import React, { useState } from 'react';
import Hero from './components/Hero';
import CVSection from './components/CVSection';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

export default function App() {
  const [cv, setCv] = useState({
    url: '',
    name: 'Your Name',
    role: 'Product Engineer',
    summary:
      'I craft performant and delightful digital products with a focus on usability, aesthetics, and technical excellence.',
    skills: ['React', 'TypeScript', 'FastAPI', 'MongoDB', 'TailwindCSS'],
  });

  const [items, setItems] = useState([]);

  const handleAddSampleContent = () => {
    if (!cv.url) {
      // As an example, use a data URL placeholder for the CV if none provided
      setCv((prev) => ({ ...prev, url: 'https://example.com/your-cv.pdf' }));
    }

    if (items.length === 0) {
      setItems([
        {
          id: 101,
          title: 'Prototype Launch',
          description: 'Shipped an interactive 3D homepage.',
          image:
            'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1600&auto=format&fit=crop',
        },
        {
          id: 102,
          title: 'Team Leadership',
          description: 'Led a cross-functional squad to deliver a design system.',
          image:
            'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1600&auto=format&fit=crop',
        },
        {
          id: 103,
          title: 'OSS Contributor',
          description: 'Contributed to popular open-source tools.',
          image:
            'https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=1600&auto=format&fit=crop',
        },
      ]);
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Hero onAddSampleContent={handleAddSampleContent} />
      <CVSection
        cvUrl={cv.url}
        name={cv.name}
        role={cv.role}
        summary={cv.summary}
        skills={cv.skills}
      />
      <Gallery items={items} />
      <Footer />
    </div>
  );
}
