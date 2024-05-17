import React from "react";
import { Element } from "react-scroll";
import { Fade } from "react-reveal";
import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero.jsx";
import Features from "../components/Features.jsx";
import Packages from "../components/Packages.jsx";
import Info from "../components/Info.jsx";
import Testimonials from "../components/Testimonial.jsx";
import CTA from "../components/CTA.jsx";
import Footer from "../components/Footer.jsx";
import reviews from "../data.js";

import "../index.css";
import HeroTreker from "../components/HeroTreker.jsx";
import InfoTreker from "../components/InfoTreker.jsx";
import HeroAbout from "../components/HeroAbout.jsx";
import InfoFAQ from "../components/InfoFAQ.jsx";
import InfoFAQ2 from "../components/InfoFAQ2.jsx";

function App() {
    return (
        <>
            <Navbar />

            <Element name="home">
                <Fade>
                    <HeroAbout />
                </Fade>
            </Element>
            <Element name="about">
                <Fade>
                    <InfoFAQ />
                </Fade>
            </Element>
            <Element name="about">
                <Fade>
                    <InfoFAQ2 />
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

export default App;
