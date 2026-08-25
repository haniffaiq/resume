import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import About from "@/components/About";
import AchievementMetrics from "@/components/AchievementMetrics";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Organisations from "@/components/Organization";
import StructuredData from "@/components/StructuredData";

const Index = () => {
  return (
    <div className="min-h-screen">
      <StructuredData />
      <Header />
      <main>
        <Hero />
        <About />
        <AchievementMetrics />
        <Skills />
        <Experience />
        <Projects />
        <Testimonials />
        <Organisations/>
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
