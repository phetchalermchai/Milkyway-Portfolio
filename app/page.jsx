import Hero from "./Components/hero";
import About from "./Components/about";
import Skills from "./Components/skills";
import Portfolio from "./Components/portfolio";
import Contact from "./Components/contact";

export default function Home() {
  return (
    <div>
      <Hero/>
      <About/>
      <Skills/>
      <Portfolio/>
      <Contact/>
    </div>
  );
}
