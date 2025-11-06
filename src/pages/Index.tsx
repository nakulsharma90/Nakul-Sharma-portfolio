import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Education } from "@/components/Education";
import { Certificates } from "@/components/Certificates";
import { Activities } from "@/components/Activities";

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation />
      <div id="home">
        <Hero />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="education">
        <Education />
      </div>
      <div id="certificates">
        <Certificates />
      </div>
      <div id="activities">
        <Activities />
      </div>
      
      <footer className="py-8 text-center border-t border-primary/20">
        <p className="text-muted-foreground">
          © 2025 Nakul Sharma. All rights reserved.
        </p>
      </footer>
    </main>
  );
};

export default Index;
