export default function EmbedInstructions() {
  const embedCode = `<!-- Hero 3D Spline Embed (Webflow-ready) -->\n<div style=\"position:relative;width:100%;height:80vh;background:#000;overflow:hidden\">\n  <script type=\"module\" src=\"https://unpkg.com/@splinetool/viewer@latest/build/spline-viewer.js\"></script>\n  <spline-viewer url=\"https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode\" style=\"position:absolute;inset:0;width:100%;height:100%\"></spline-viewer>\n</div>`;

  return (
    <section id="cta" className="relative py-20 bg-black text-white border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-semibold">Embed in Webflow</h2>
        <p className="mt-3 text-white/70 max-w-2xl">Copy the embed code below and paste it into an Embed element inside your Webflow hero section. It’s responsive and interactive out of the box.</p>

        <div className="mt-8 rounded-xl border border-white/10 bg-white/5 p-4">
          <pre className="overflow-x-auto text-sm leading-relaxed whitespace-pre-wrap break-words">{embedCode}</pre>
        </div>

        <ol className="mt-8 list-decimal list-inside text-white/80 space-y-2">
          <li>Add an Embed element to your hero section in Webflow.</li>
          <li>Paste the code above. Publish and test responsiveness.</li>
          <li>Optionally adjust height (80vh) to fit your layout.</li>
        </ol>
      </div>
    </section>
  );
}
