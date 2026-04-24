import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Story from "./components/Story";
import Features from "./components/Features";
import Trailer from "./components/Trailer";
import Tiers from "./components/Tiers";
import Stretch from "./components/Stretch";
import Faq from "./components/Faq";
import CtaNewsletter from "./components/CtaNewsletter";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Story />
        <Features />
        <Trailer />
        <Tiers />
        <Stretch />
        <Faq />
        <CtaNewsletter />
      </main>
      <Footer />
    </>
  );
}
