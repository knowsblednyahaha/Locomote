import Header from "./components/Header";
import Homehero from "./components/Homehero";
import AboutSection from "./components/AboutSection";
import Destination from "./components/Destination";
import Blogs from "./components/Blogs";

export default function Home() {
  return (
    <main>
      <Header />
      <Homehero />
      <AboutSection />
      <Destination />
      <Blogs />
    </main>
  );
}