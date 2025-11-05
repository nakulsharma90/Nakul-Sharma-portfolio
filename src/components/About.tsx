import { Shield, Code, Lock, Database } from "lucide-react";
import { Card } from "./ui/card";

export const About = () => {
  const highlights = [
    {
      icon: Shield,
      title: "Security First",
      description: "Specialized in protecting digital assets and identifying vulnerabilities"
    },
    {
      icon: Code,
      title: "Technical Expertise",
      description: "Proficient in security tools, programming, and system architecture"
    },
    {
      icon: Lock,
      title: "Digital Forensics",
      description: "Expert in investigating cyber incidents and recovering digital evidence"
    },
    {
      icon: Database,
      title: "Data Protection",
      description: "Committed to securing sensitive information and ensuring compliance"
    }
  ];

  return (
    <section className="py-20 px-4 relative">
      <div className="absolute inset-0 bg-gradient-cyber opacity-50" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-cyber-cyan bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="h-1 w-20 mx-auto bg-gradient-to-r from-primary to-cyber-cyan" />
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="p-8 bg-card/60 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 animate-fade-in">
            <h3 className="text-2xl font-semibold mb-4 text-primary">Professional Journey</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              I'm a passionate Cybersecurity Specialist and Digital Forensics Expert with a strong foundation in computer applications. 
              Currently pursuing my Master's degree, I combine academic knowledge with practical experience to tackle modern security challenges.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              My expertise spans across penetration testing, network security, and digital forensics, with a commitment to staying ahead 
              of emerging threats and technologies in the cybersecurity landscape.
            </p>
          </Card>

          <Card className="p-8 bg-card/60 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 animate-fade-in">
            <h3 className="text-2xl font-semibold mb-4 text-primary">Mission & Values</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              I believe in creating a safer digital world through proactive security measures and continuous learning. 
              My approach combines technical excellence with ethical practices to protect organizations and individuals from cyber threats.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Dedicated to sharing knowledge and contributing to the security community, I strive to make cybersecurity accessible 
              and understandable for everyone.
            </p>
          </Card>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <Card 
              key={index}
              className="p-6 bg-card/40 backdrop-blur-sm border-primary/20 hover:border-primary/40 hover:shadow-glow transition-all duration-300 animate-fade-in text-center group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex p-3 rounded-lg bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-semibold mb-2 text-foreground">{item.title}</h4>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
