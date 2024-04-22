import React from "react";
import Header from "../components/Header";
import About from "../components/about/About";
import Footer from "../components/Home/Footer";
import Newsletter from "../components/Home/Newsletter";

export default function AboutPage() {
  return (
    <>
      <Header />
      <About />
      <Newsletter />
      <Footer />
    </>
  );
}
