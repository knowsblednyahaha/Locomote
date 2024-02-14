import Header from "./components/Header";
import Homehero from "./components/Homehero";
import AboutSection from "./components/AboutSection";
import Destination from "./components/Destination";
import Blogs from "./components/Blogs";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="cursor-default">
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
