import { Hero } from "@/components/Hero";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Education } from "@/components/Education";
import { Certificates } from "@/components/Certificates";
import { Activities } from "@/components/Activities";

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Hero />
      <Skills />
      <Projects />
      <Education />
      <Certificates />
      <Activities />
      
      <footer className="py-8 text-center border-t border-primary/20">
        <p className="text-muted-foreground">
          © 2025 Nakul Sharma. All rights reserved.
        </p>
      </footer>
    </main>
  );
};

export default Index;
