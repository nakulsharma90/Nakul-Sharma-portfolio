import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Education } from "@/components/Education";
import { Publications } from "@/components/Publications";
import { Certificates } from "@/components/Certificates";
import { Activities } from "@/components/Activities";
import { Contact } from "@/components/Contact";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const AnimatedSection = ({ id, children }: { id: string; children: React.ReactNode }) => {
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <div 
      id={id}
      ref={ref}
      className={`transition-all duration-700 ${
        isVisible 
          ? "opacity-100 translate-y-0" 
          : "opacity-0 translate-y-10"
      }`}
    >
      {children}
    </div>
  );
};

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation />
      <div id="home">
        <Hero />
      </div>
      <AnimatedSection id="about">
        <About />
      </AnimatedSection>
      <AnimatedSection id="skills">
        <Skills />
      </AnimatedSection>
      <AnimatedSection id="projects">
        <Projects />
      </AnimatedSection>
      <AnimatedSection id="education">
        <Education />
      </AnimatedSection>
      <AnimatedSection id="publications">
        <Publications />
      </AnimatedSection>
      <AnimatedSection id="certificates">
        <Certificates />
      </AnimatedSection>
      <AnimatedSection id="activities">
        <Activities />
      </AnimatedSection>
      <AnimatedSection id="contact">
        <Contact />
      </AnimatedSection>
      
      <footer className="py-8 text-center border-t border-primary/20">
        <p className="text-muted-foreground">
          © 2025 Nakul Sharma. All rights reserved.
        </p>
      </footer>
    </main>
  );
};

export default Index;
