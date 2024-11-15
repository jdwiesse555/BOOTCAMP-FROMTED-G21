import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Footer from "./components/Footer/Footer";
import Services from "./components/Services/Services";
import Banner from "./components/Banner/Banner";
import Banner2 from "./components/Banner/Banner2";
import Banner3 from "./components/Banner/Banner3";

const App = () => {
  return (
    <main className="overflow-x-hidden">
      <section id="navbar">
        <Navbar />
      </section>
      <section id="hero">
        <Hero />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="banner">
        <Banner />
      </section>
      <section id="banner2">
        <Banner2 />
      </section>
      <section id="banner3">
        <Banner3 />
      </section>
      <section id="footer">
        <Footer />
      </section>
    </main>
  );
};

export default App;
