import React from "react";
import {Element} from "react-scroll";
import {Fade} from "react-reveal";
import Navbar from "../components/Navbar.jsx";
import HeroAbout from "../components/HeroAbout.jsx";
import Features from "../components/Features.jsx";
import Packages from "../components/Packages.jsx";
import Info from "../components/Info.jsx";
import Testimonials from "../components/Testimonial.jsx";
import CTA from "../components/CTA.jsx";
import Footer from "../components/Footer.jsx";
import reviews from "../data.js";

import "../index.css";

function AboutUs() {
    return (
        <>
            <Navbar/>

            <Element className="home">
                <Fade>
                    <HeroAbout/>
                </Fade>
            </Element>
            <Element className="features">
                <Fade>
                    <Features/>
                </Fade>
            </Element>
            <Element className="info">
                <Fade>
                    <Info/>
                </Fade>
            </Element>
            <Element className="testimonials">
                <Fade>
                    <Testimonials reviews={reviews}/>
                </Fade>
            </Element>
            <Element className="footer">
                <Fade>
                    <Footer/>
                </Fade>
            </Element>
        </>
    );
}

export default AboutUs;
