import { Card } from "./ui/card";
import { GraduationCap } from "lucide-react";


const education = [
  {
    institution: "Lovely Professional University",
    location: "Punjab, India",
    degree: "Bachelor of Computer Application",
    performance: "CGPA: 8.00",
    period: "Since August 2022",
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

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-transparent" />

          <div className="space-y-12">
            {education.map((edu, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } gap-8`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background shadow-glow" />

                <div className="w-full md:w-1/2" />

                <Card className="w-full md:w-1/2 p-6 bg-gradient-card backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-glow group ml-12 md:ml-0">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <GraduationCap className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <div className="space-y-2">
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
