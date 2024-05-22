import React from "react";
import { Element } from "react-scroll";
import { Fade } from "react-reveal";
import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero.jsx";
import Features from "../components/Features.jsx";
import Info from "../components/Info.jsx";
import CTA from "../components/CTA.jsx";
import Footer from "../components/Footer.jsx";

import "../index.css";
import InfoKarta from "../components/InfoKarta.jsx";

function Home() {
  return (
    <>
      <Navbar />

      <Element name="home">
        <Fade>
          <Hero />
        </Fade>
      </Element>
      <Element name="features">
        <Fade>
          <Features />
        </Fade>
      </Element>
        <Element className="info">
            <Fade>
                <Info/>
            </Fade>
        </Element>
        <Element className="infokarta">
            <Fade>
                <InfoKarta/>
            </Fade>
        </Element>
      <Element name="cta">
        <Fade>
          <CTA />
        </Fade>
      </Element>
      <Element name="footer">
        <Fade>
          <Footer />
        </Fade>
      </Element>
    </>
  );
}

export default Home;
