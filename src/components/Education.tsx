import { Card } from "./ui/card";
import { GraduationCap } from "lucide-react";
import { StaggeredChildren } from "./StaggeredChildren";


const education = [
  {
    institution: "Lovely Professional University",
    location: "Punjab, India",
    degree: "Master of Computer Application",
    performance: "CGPA: --",
    period: "Since August 2025",
  },
  {
    institution: "Lovely Professional University",
    location: "Punjab, India",
    degree: "Bachelor of Computer Application",
    performance: "CGPA: 8.03",
    period: "August 2022 - April 2025",
  },
  {
    institution: "Maharishi Dayanand Saraswati University",
    location: "Rajasthan, India",
    degree: "Bachelor of Commerce",
    performance: "Percentage: 67%",
    period: "May 2019 - June 2022",
  },
  {
    institution: "Nobel Senior Secondary School",
    location: "Rajasthan, India",
    degree: "Matriculation",
    performance: "Percentage: 66%",
    period: "June 2018 - March 2019",
  },
];

export const Education = () => {
  return (
    <section className="py-20 px-4" id="education">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Education
        </h2>

        <div className="space-y-8">
          <StaggeredChildren delay={150}>
            {education.map((edu, index) => (
              <Card 
                key={index}
                className="p-6 bg-gradient-card backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-glow group"
              >
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <GraduationCap className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div className="space-y-2 flex-1">
                    <h3 className="text-xl font-bold text-foreground">{edu.institution}</h3>
                    <p className="text-sm text-muted-foreground">{edu.location}</p>
                    <p className="text-card-foreground font-medium">{edu.degree}</p>
                    <div className="flex flex-wrap gap-2 pt-2">
                      <span className="px-3 py-1 text-sm rounded-full bg-primary/10 border border-primary/20 text-primary">
                        {edu.performance}
                      </span>
                      <span className="px-3 py-1 text-sm rounded-full bg-muted/50 border border-primary/20 text-muted-foreground">
                        {edu.period}
                      </span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </StaggeredChildren>
        </div>
      </div>
    </section>
  );
};
