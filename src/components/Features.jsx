import { Sparkles, Monitor, MousePointer2, Globe2 } from 'lucide-react';

const features = [
  {
    icon: Sparkles,
    title: 'Cyberpunk Aesthetic',
    desc: 'Dark, futuristic look with glowing wireframes and iridescent highlights.'
  },
  {
    icon: Monitor,
    title: 'Webflow-ready',
    desc: 'Drop-in embed for your hero section. Works great across devices.'
  },
  {
    icon: MousePointer2,
    title: 'Interactive',
    desc: 'Users can click and orbit around the 3D scene for extra engagement.'
  },
  {
    icon: Globe2,
    title: 'Lightweight',
    desc: 'Powered by Spline’s optimized runtime for smooth performance.'
  }
];

export default function Features() {
  return (
    <section id="features" className="relative py-20 bg-black text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-semibold">Why this works</h2>
        <p className="mt-3 text-white/70 max-w-2xl">A focused, high-contrast hero that feels alive and on-brand for modern tech websites.</p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div key={f.title} className="rounded-xl border border-white/10 bg-white/5 p-6">
              <f.icon className="w-6 h-6 text-white" />
              <h3 className="mt-4 text-lg font-medium">{f.title}</h3>
              <p className="mt-2 text-sm text-white/70">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
