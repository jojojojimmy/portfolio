import React, { useState, useEffect } from "react";
// import Navbar from "./sections/navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Experiences from "./sections/Experiences";
import Footer from "./sections/Footer";
import Loading from "./components/Loading";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Wait for all resources to load (images, fonts, etc.)
    const handleLoadComplete = () => {
      // Wait 2 more seconds after all resources load before hiding spinner
      setTimeout(() => setIsLoading(false), 3000);
    };

    if (document.readyState === "complete") {
      handleLoadComplete();
    } else {
      window.addEventListener("load", handleLoadComplete);
      return () => window.removeEventListener("load", handleLoadComplete);
    }
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="container mx-auto max-w-7xl">
      {/* <Navbar /> */}
      <Hero />
      <About />
      <Projects />
      <Experiences />
      <section className="h-35" />
      <Footer />
    </div>
  );
};

export default App;
