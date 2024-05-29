import React from "react";
import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import Footer from "../Footer/Footer";
import ContactDetails from "./ContactDetails";
import ContactFormSection from "./ContactFormSection";
import GoogleMap from "./GoogleMap";



function Contact() {
  return (
    <div className="Contact">
      <Header />
      <Hero
        header="Got Some Questions To Ask?"
        text="We would like to know how we can serve you better. We respond within 2 hours."
      />
      
      <ContactDetails />
      <GoogleMap />

      <ContactFormSection />
      <Footer />
    </div>
  );
}

export default Contact;
