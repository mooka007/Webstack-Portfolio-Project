import React from "react";
import Header from "../Header/Header";
import Service from "./Service";
import Footer from "../Footer/Footer";
import Credibility from "./Credibility";

function About() {
  return (
    <div className=" About">
      <Header />
      <Service
        label="About Us"
        header="We Provide The Best Property For You"
        text="With our vast search tool, you can find yourr dream home from any location in the world. All we do is help you find the place, meet the agents, and seal the deal. There's no extra commission for our service."/>
      <br className=""></br>
      <Credibility header="Why Trust Us" text="We Guarantee Quality Delivery" />
      <Footer />
    </div>
  );
}

export default About;
