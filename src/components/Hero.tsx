import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { Button } from "./ui/button";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(220_20%_15%_/_0.1)_1px,transparent_1px),linear-gradient(to_bottom,hsl(220_20%_15%_/_0.1)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      
      <div className="relative z-10 max-w-5xl w-full animate-fade-in">
        <div className="text-center space-y-8">
          {/* Name with glow effect */}
          <div className="space-y-4">
            <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-primary via-cyber-cyan to-secondary bg-clip-text text-transparent animate-slide-up">
              Nakul Sharma
            </h1>
            <div className="h-1 w-32 mx-auto bg-gradient-to-r from-transparent via-primary to-transparent" />
          </div>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Cybersecurity Specialist & Digital Forensics Expert
          </p>

          {/* Contact buttons */}
          <div className="flex flex-wrap gap-4 justify-center pt-8">
            <Button
              variant="outline"
              size="lg"
              className="group border-primary/50 hover:border-primary hover:bg-primary/10 transition-all duration-300"
              asChild
            >
              <a href="mailto:nakul88laata@gmail.com">
                <Mail className="mr-2 h-5 w-5 group-hover:text-primary transition-colors" />
                Email
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="group border-primary/50 hover:border-primary hover:bg-primary/10 transition-all duration-300"
              asChild
            >
              <a href="https://www.linkedin.com/in/nakul-sharma90" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-5 w-5 group-hover:text-primary transition-colors" />
                LinkedIn
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="group border-primary/50 hover:border-primary hover:bg-primary/10 transition-all duration-300"
              asChild
            >
              <a href="https://github.com/nakulsharma90" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-5 w-5 group-hover:text-primary transition-colors" />
                GitHub
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="group border-primary/50 hover:border-primary hover:bg-primary/10 transition-all duration-300"
              asChild
            >
              <a href="tel:+919024456755">
                <Phone className="mr-2 h-5 w-5 group-hover:text-primary transition-colors" />
                +91 9024456755
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
