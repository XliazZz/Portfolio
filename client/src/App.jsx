import './App.css';
import Home from './componets/Home/Home';
import About from './componets/About/About';
import SideBar from './componets/SideBar/SideBar';
import Projects from './componets/Projects/Projects';
import Contact from './componets/Contact/Contact';
import { useEffect, useState } from 'react';
import ScrollTop from './componets/ScrollTop/ScrollTop';
import NavBar from './componets/NavBar/NavBar';

function App() {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('section1');
  const [isScrolling, setIsScrolling] = useState(false);

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
      setIsScrolling(true);
      section.scrollIntoView({ behavior: 'smooth' });

      setTimeout(() => {
        setActiveSection(sectionId);
        setIsScrolling(false); 
      }, 500);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (isScrolling) return;

      const sections = document.querySelectorAll("section");
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isScrolling]);

  return (
    <div className='App bg-neutral-100 dark:bg-neutral-950'>
      <NavBar/>
      <SideBar scrollToSection={scrollToSection} activeSection={activeSection}/>

      <section id='section1' className='pt-10'>
        <Home />
      </section>
      <ScrollTop />

      <section id='section2'>
        <About hasScrolled={hasScrolled} />
      </section>

      <section id='section3'>
        <Projects />
      </section>

      <section id='section4'>
        <Contact />
      </section>
    </div>
  );
}

export default App;
