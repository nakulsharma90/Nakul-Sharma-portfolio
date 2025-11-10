import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Search, Lock, Car } from "lucide-react";
import { StaggeredChildren } from "./StaggeredChildren";

const projects = [
  {
    title: "TraceX - Digital Forensics Tool",
    date: "APR '25",
    icon: Search,
    domain: "Cybersecurity / Digital Forensics",
    description: "Comprehensive digital forensic analysis tool for data extraction and anomaly detection.",
    highlights: [
      "Metadata extraction and anomaly detection",
      "File activity analysis and steganography detection",
      "De-forensics module for permanent metadata removal",
      "Advanced analysis with Exif Tool, hashlib, Stegodetect, and SleuthKit",
      "Supports NTFS, Btrfs, and XFS file systems",
      "Customizable forensic reports in PDF, TXT, and CSV formats",
    ],
  },
  {
    title: "Diano - Password Manager",
    date: "OCT '24",
    icon: Lock,
    domain: "Security & Encryption",
    description: "Secure password management system with robust encryption for credential storage.",
    highlights: [
      "Master password authentication mechanism",
      "Advanced encryption algorithms for data protection",
      "Intuitive frontend with password editing and re-encryption",
      "Ensures confidentiality and integrity",
      "User-friendly design without exposing sensitive data",
    ],
  },
  {
    title: "Vehicle Accident Alert System V2",
    date: "MAY '24",
    icon: Car,
    domain: "Internet of Things",
    description: "Automated vehicle accident detection and alert system with real-time GPS tracking.",
    highlights: [
      "Real-time GPS tracking for precise location identification",
      "Machine learning algorithms for accurate accident detection",
      "Automated emergency contact alerts",
      "Minimized false alarms for enhanced reliability",
      "Built with MicroPython",
    ],
  },
];

export const Projects = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-muted/20" id="projects">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Featured Projects
        </h2>

        <div className="space-y-8">
          <StaggeredChildren delay={200}>
            {projects.map((project, index) => (
              <Card
                key={index}
                className="p-6 md:p-8 bg-gradient-card backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-glow group"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="p-4 rounded-2xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <project.icon className="h-10 w-10 text-primary" />
                    </div>
                  </div>

                  <div className="flex-1 space-y-4">
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div>
                        <h3 className="text-2xl font-bold text-foreground mb-2">{project.title}</h3>
                        <Badge variant="secondary" className="mb-2">
                          {project.date}
                        </Badge>
                        <p className="text-sm text-muted-foreground italic">{project.domain}</p>
                      </div>
                    </div>

                    <p className="text-card-foreground leading-relaxed">{project.description}</p>

                    <div className="space-y-2">
                      <h4 className="font-semibold text-foreground">Key Features:</h4>
                      <ul className="space-y-2">
                        {project.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                            <span className="text-primary mt-1.5">▸</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
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
