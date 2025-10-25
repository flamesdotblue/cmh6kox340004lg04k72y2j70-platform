import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HorizontalExperience from './components/HorizontalExperience';

export default function App() {
  useEffect(() => {
    // Improve rendering on mobile browsers
    document.documentElement.style.setProperty('overscroll-behavior', 'none');
  }, []);

  return (
    <div className="bg-black text-white min-h-screen selection:bg-fuchsia-500/40 selection:text-white">
      <Navbar />
      <main className="relative">
        <Hero />
        <HorizontalExperience />
      </main>
    </div>
  );
}
