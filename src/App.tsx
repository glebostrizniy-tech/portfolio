import Navbar from '@/components/Navbar';
import Hero from '@/sections/Hero';
import About from '@/sections/About';
import Skills from '@/sections/Skills';
import Cases from '@/sections/Cases';
import Experience from '@/sections/Experience';
import Contacts from '@/sections/Contacts';
import Footer from '@/sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Cases />
        <Experience />
        <Contacts />
      </main>
      <Footer />
    </div>
  );
}

export default App;
