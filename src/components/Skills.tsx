import { Card } from "./ui/card";
import { Shield, Code, Wrench, Users, Brain } from "lucide-react";
import { StaggeredChildren } from "./StaggeredChildren";

const skillCategories = [
  {
    title: "Languages",
    icon: Code,
    skills: ["C", "C++", "JavaScript", "Python", "Prolog", "MERN Stack"],
  },
  {
    title: "Security Frameworks",
    icon: Shield,
    skills: ["Metasploit", "Aircrack-ng", "Burp Suite"],
  },
  {
    title: "Tools & Platforms",
    icon: Wrench,
    skills: ["MySQL", "Wireshark", "Nmap", "Kali Linux"],
  },
  {
    title: "Technical Skills",
    icon: Brain,
    skills: ["Network Security", "Virtualization", "Linux", "IoT"],
  },
  {
    title: "Soft Skills",
    icon: Users,
    skills: ["Problem-Solving", "Team Player", "Project Management", "Adaptability"],
  },
];

export const Skills = () => {
  return (
    <section className="py-20 px-4" id="skills">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Skills & Expertise
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <StaggeredChildren delay={150}>
            {skillCategories.map((category, index) => (
              <Card
                key={index}
                className="p-6 bg-gradient-card backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-glow group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <category.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 text-sm rounded-full bg-muted/50 border border-primary/20 text-muted-foreground hover:border-primary/50 hover:text-foreground transition-all duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </StaggeredChildren>
        </div>
      </div>
    </section>
  );
};
