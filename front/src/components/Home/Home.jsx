import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function Home() {
    return (
    <div className="Home">
        <Header />

        <section className="bg-black  text-center pt-16">
            <h3 className="text-purple-700 text-2xl ">Have a Question?</h3>
            <p className="mb-20 text-white">Let us help you.</p>
            <Footer />
        </section>
    </div>
    );
}

export default Home;