import { Card } from "./ui/card";
import { Award, Download } from "lucide-react";
import { StaggeredChildren } from "./StaggeredChildren";

const certificates = [
  {
    title: "Cyber Security Fundamental",
    issuer: "IBM",
    date: "June 2024",
    certificateUrl: "/certificates/cybersecurity_fundamentals.pdf",
  },
  {
    title: "Created A Voice Assistant with AI And GPT-3",
    issuer: "IBM",
    date: "April 2023",
    certificateUrl: null,
  },
  {
    title: "Big Data 101",
    issuer: "IBM",
    date: "April 2023",
    certificateUrl: "/certificates/big_data_101.pdf",
  },
];

export const Certificates = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-muted/20" id="certificates">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Certifications
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <StaggeredChildren delay={150}>
            {certificates.map((cert, index) => {
              const CardWrapper = cert.certificateUrl ? 'a' : 'div';
              const cardProps = cert.certificateUrl 
                ? { 
                    href: cert.certificateUrl, 
                    target: "_blank", 
                    rel: "noopener noreferrer",
                    download: true 
                  }
                : {};

              return (
                <Card
                  key={index}
                  className="p-6 bg-gradient-card backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-glow group overflow-hidden relative"
                >
                  <CardWrapper {...cardProps} className={cert.certificateUrl ? "block" : ""}>
                    <div className="space-y-4">
                      <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors w-fit">
                        <Award className="h-8 w-8 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-2">{cert.title}</h3>
                        <p className="text-sm text-muted-foreground mb-1">{cert.issuer}</p>
                        <p className="text-xs text-primary">{cert.date}</p>
                      </div>
                      {cert.certificateUrl && (
                        <div className="flex items-center gap-2 text-sm text-primary/80 group-hover:text-primary transition-colors">
                          <Download className="h-4 w-4" />
                          <span>Download Certificate</span>
                        </div>
                      )}
                    </div>
                  </CardWrapper>
                </Card>
              );
            })}
          </StaggeredChildren>
        </div>
      </div>
    </section>
  );
};
