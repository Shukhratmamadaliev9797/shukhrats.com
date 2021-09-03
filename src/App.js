import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import NavigationBar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Projects from "./components/Projects";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style/app.scss";
import "aos/dist/aos.css";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Setting from "./components/Setting";

export default function App() {
  return (
    <Router>
      <div>
        <NavigationBar />
        <Header />
        <About />
        <Skills />
        <Services />
        <Projects />
        <Contact />
        <Footer />
        <Setting />
      </div>
    </Router>
  );
}
