import './App.css';
import Home from './componets/Home/Home';
import About from './componets/About/About';
import SideBar from './componets/SideBar/SideBar';
import Projects from './componets/Projects/Projects';
import Contact from './componets/Contact/Contact';
import { useEffect, useState } from 'react';
import ScrollTop from './componets/ScrollTop/ScrollTop';

function App() {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section1 = document.getElementById('section1');
      const section2 = document.getElementById('section2');

      if (section1 && section2 && !hasScrolled) {
        const rect = section1.getBoundingClientRect();
        if (rect.bottom <= window.innerHeight) {
          setHasScrolled(true);
          section2.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasScrolled]);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='App bg-neutral-100 dark:bg-neutral-950'>
      <SideBar scrollToSection={scrollToSection} />

      <div id='section1'>
        <Home />
      </div>
      <ScrollTop />

      <div id='section2'>
        <About hasScrolled={hasScrolled} />
      </div>

      <div id='section3'>
        <Projects />
      </div>

      <div id='section4'>
        <Contact />
      </div>
    </div>
  );
}

export default App;
