import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-black text-white" aria-label="Hero">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/80" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-start justify-center min-h-[90vh]">
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight leading-tight">
          Futuristic, interactive 3D hero
        </h1>
        <p className="mt-4 max-w-xl text-white/80 text-base sm:text-lg">
          A dark cyberpunk scene with a retro astronaut interacting with iridescent ribbons. Perfect as an embedded hero for your Webflow site.
        </p>
        <div className="mt-8 flex items-center gap-3">
          <a
            href="#cta"
            className="inline-flex items-center rounded-md bg-white text-black px-5 py-2.5 text-sm font-medium hover:bg-white/90 transition-colors"
          >
            Get the Embed
          </a>
          <a
            href="#how"
            className="inline-flex items-center rounded-md bg-white/10 px-5 py-2.5 text-sm font-medium text-white hover:bg-white/20 transition-colors"
          >
            Learn more
          </a>
        </div>
      </div>
    </section>
  );
}
