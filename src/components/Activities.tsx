import { Card } from "./ui/card";
import { Heart, Shield } from "lucide-react";

const activities = [
  {
    title: "Community Development Project at Old Age Home",
    icon: Heart,
    date: "JULY 2023",
    description: "Actively participated in improving the quality of life for elderly residents.",
    highlights: [
      "Organized art therapy, fitness sessions, and educational programs",
      "Enhanced physical and mental well-being of residents",
      "Led various workshops focused on senior care",
    ],
  },
  {
    title: "Cyber Security Bootcamp Assistant",
    icon: Shield,
    date: "2023",
    description: "Volunteered to facilitate cybersecurity education and training.",
    highlights: [
      "Facilitated group discussions on cybersecurity topics",
      "Conducted troubleshooting sessions for security exercises",
      "Mentored participants in fundamental security concepts",
    ],
  },
];

export const Activities = () => {
  return (
    <section className="py-20 px-4" id="activities">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Extra-Curricular Activities
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {activities.map((activity, index) => (
            <Card
              key={index}
              className="p-6 md:p-8 bg-gradient-card backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-glow group"
            >
              <div className="flex gap-4 mb-4">
                <div className="flex-shrink-0">
                  <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <activity.icon className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground mb-2">{activity.title}</h3>
                  <p className="text-sm text-primary">{activity.date}</p>
                </div>
              </div>
              
              <p className="text-card-foreground mb-4">{activity.description}</p>
              
              <ul className="space-y-2">
                {activity.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                    <span className="text-primary mt-1.5">▸</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
