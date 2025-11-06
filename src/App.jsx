import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import EmbedInstructions from './components/EmbedInstructions';

function App() {
  return (
    <div className="min-h-screen bg-black text-white font-inter">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <EmbedInstructions />
      </main>
      <footer className="border-t border-white/10 bg-black text-white/60 text-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 flex items-center justify-between">
          <p>© {new Date().getFullYear()} CyberSpline. All rights reserved.</p>
          <a href="#" className="hover:text-white">Privacy</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
