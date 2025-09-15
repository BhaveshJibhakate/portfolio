import './App.css';
import Navbar from './components/Navbar'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <Navbar />
      <section id="about">
        <About />
      </section>
      <section id="skills">
        <Skills/>
      </section>

      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>

      <Footer />
    </div>
  );
}

export default App;
