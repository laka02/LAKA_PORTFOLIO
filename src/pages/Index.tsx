import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Lakshika Viduranga | Full Stack Developer</title>
        <meta
          name="description"
          content="IT Undergraduate at SLIIT specializing in MERN Stack and Spring Boot. Building beautiful, performant web applications with modern technologies."
        />
        <meta name="keywords" content="Full Stack Developer, MERN Stack, React, Node.js, Spring Boot, Web Development, Portfolio, SLIIT" />
        <meta property="og:title" content="Lakshika Viduranga | Full Stack Developer" />
        <meta
          property="og:description"
          content="IT Undergraduate at SLIIT specializing in MERN Stack and Spring Boot. Building beautiful, performant web applications."
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://lakshikaviduranga.dev" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <ExperienceSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
