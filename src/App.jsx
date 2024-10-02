import "./App.css";
import Header from "./component/Header";
import Footer from "./component/Footer";
import ContactBox from "./component/ContactBox";
import AboutBox from "./component/AboutBox";
import FeaturedBox from "./component/FeatureBox";
import Project from "./component/Project";
import Typed from "typed.js";
import React, { useEffect } from "react";

function App() {
  useEffect(() => {
    // type Effect
    const typingEffect = new Typed(".typedText", {
      strings: ["lecturer", "Developer", "Researcher"],
      loop: true,
      typSpeed: 100,
      backspeed: 80,
      backDelay: 2000,
    });
    return () => {
      typingEffect.destroy();
    };
  });
  return (
    <div>
      <div className="App">
        <Header />
        <main className="wrapper">
          <FeaturedBox />
          <AboutBox />
          <Project />
          <ContactBox />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
