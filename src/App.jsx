import Services from "./components/Services";
import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import Teams from "./components/Teams";
import Cta from "./components/Cta";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="pt-[4.75rem] lg-pt[5.75rem] overflow-hidden">
        <Header />
        <Hero />
        <Services />
        <AboutUs />
        <Teams />
        <Cta />
        <Footer />
      </div>
    </>
  );
}

export default App;
