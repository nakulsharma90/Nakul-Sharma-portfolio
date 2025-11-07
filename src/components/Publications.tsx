import { Card } from "./ui/card";
import { FileText, ExternalLink, Download } from "lucide-react";
import { Button } from "./ui/button";

const publications = [
  {
    title: "Research Paper Publication",
    journal: "International Journal of Scientific Research in Computer Science, Engineering and Information Technology (IJSRCSEIT)",
    date: "2025",
    publishedUrl: "https://ijsrcseit.com/index.php/home/article/view/CSEIT25112859",
    pdfUrl: "/publications/research_paper.pdf",
  },
];

export const Publications = () => {
  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
          Publications
        </h2>

        <div className="grid grid-cols-1 gap-6">
          {publications.map((pub, index) => (
            <Card
              key={index}
              className="p-8 bg-gradient-card backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-glow group"
            >
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="p-4 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <FileText className="h-10 w-10 text-primary" />
                </div>
                
                <div className="flex-1 space-y-3">
                  <h3 className="text-xl font-semibold text-foreground">{pub.title}</h3>
                  <p className="text-sm text-muted-foreground">{pub.journal}</p>
                  <p className="text-xs text-primary">{pub.date}</p>
                  
                  <div className="flex flex-wrap gap-3 pt-2">
                    <Button
                      asChild
                      variant="default"
                      size="sm"
                      className="gap-2"
                    >
                      <a
                        href={pub.publishedUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        View Publication
                      </a>
                    </Button>
                    
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="gap-2"
                    >
                      <a
                        href={pub.pdfUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        download
                      >
                        <Download className="h-4 w-4" />
                        Download PDF
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
