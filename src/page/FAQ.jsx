import React from "react";
import { Element } from "react-scroll";
import { Fade } from "react-reveal";
import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero.jsx";
import Features from "../components/Features.jsx";
import Packages from "../components/Packages.jsx";
import About from "../components/About.jsx";
import Testimonials from "../components/Testimonial.jsx";
import CTA from "../components/CTA.jsx";
import Footer from "../components/Footer.jsx";
import reviews from "../data.js";

import "../index.css";

function App() {
    return (
        <>
            <Navbar />

            <Element className="home">
                <Fade>
                    <Hero />
                </Fade>
            </Element>
            <Element className="features">
                <Fade>
                    <Features />
                </Fade>
            </Element>
            <Element className="packages">
                <Fade>
                    <Packages />
                </Fade>
            </Element>
            <Element className="about">
                <Fade>
                    <About />
                </Fade>
            </Element>
            <Element className="testimonials">
                <Fade>
                    <Testimonials reviews={reviews} />
                </Fade>
            </Element>
            <Element className="cta">
                <Fade>
                    <CTA />
                </Fade>
            </Element>
            <Element className="footer">
                <Fade>
                    <Footer />
                </Fade>
            </Element>
        </>
    );
}

export default App;
