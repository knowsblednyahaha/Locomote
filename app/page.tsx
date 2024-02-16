import Header from "./components/Home/Header";
import Homehero from "./components/Home/Homehero";
import AboutSection from "./components/Home/AboutSection";
import Destination from "./components/Home/Destination";
import Blogs from "./components/Home/Blogs";
import Newsletter from "./components/Home/Newsletter";
import Footer from "./components/Home/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Homehero />
      <AboutSection />
      <Destination />
      <Blogs />
      <Newsletter />
      <Footer />
    </main>
  );
}
