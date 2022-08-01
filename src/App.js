import React from "react";

// import components
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Divider from "./components/Divider";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <Portfolio />
      <Divider
        title={"Skills"}
        id={"skills"}
      />
      <Skills />
      <Divider
        title={"Contact Me"}
        id={"contact"}
      />

      <Contact />
      <Footer />
    </>
  );
};

export default App;
