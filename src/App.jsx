import Navbar from "./components/layout/Navbar";
import ScrollProgress from "./components/ui/ScrollProgress";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Academics from "./components/sections/Academics";
import Campus from "./components/sections/Campus";
import Testimonials from "./components/sections/Testimonials";
import Admissions from "./components/sections/Admissions";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <>
      <ScrollProgress />
      <Navbar />

      <main>
        <Hero />
        <About/>
        <Academics/>
        <Campus/>
        <Testimonials/>
        <Admissions/>
      </main>
      <Footer/>

    </>
  );
}

export default App;