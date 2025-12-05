import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Projects from "../components/Projects";
import Automation from "../components/Automation";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto">
      <Hero />
      <About />
      <Services />
      <Projects />
      <Automation />
      <Contact />
    </div>
  );
}
