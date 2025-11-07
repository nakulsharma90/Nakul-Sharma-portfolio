import { Card } from "./ui/card";
import { FileText, ExternalLink, Download } from "lucide-react";
import { Button } from "./ui/button";

const publications = [
  {
    title: "EvidenceX: A Comprehensive Digital Forensics Tool for Evidence Extraction",
    authors: "Nakul Sharma, Sumit Minhas, Karanjit Singh, Vipin, Suman Hait, Lakshyaraj Singh Rathore",
    institution: "School of Computer Application, Lovely Professional University, Phagwara, India",
    journal: "International Journal of Scientific Research in Computer Science, Engineering and Information Technology (IJSRCSEIT)",
    volume: "Volume 11, Issue 2",
    pages: "3828-3836",
    date: "March-April 2025",
    doi: "https://doi.org/10.32628/CSEIT25112859",
    abstract: "EvidenceX represents a state-of-the-art digital forensic utility that performs metadata extraction from multiple file types while automatically finding concealed content and analyzes both system logs and unusual behavior patterns simultaneously with steganography detection capabilities. The system enhances digital forensic procedures through improved accuracy, efficiency, and reliability aspects.",
    keywords: ["Digital Forensics", "Metadata Extraction", "Anomaly Detection", "Activity Log Analysis", "Privacy Protection"],
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
              <div className="flex flex-col gap-6">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="p-4 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors flex-shrink-0">
                    <FileText className="h-10 w-10 text-primary" />
                  </div>
                  
                  <div className="flex-1 space-y-4">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-2">{pub.title}</h3>
                      <p className="text-sm text-muted-foreground italic mb-3">{pub.authors}</p>
                      <p className="text-xs text-muted-foreground mb-1">{pub.institution}</p>
                    </div>

                    <div className="space-y-2">
                      <p className="text-sm font-medium text-foreground">{pub.journal}</p>
                      <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground">
                        <span>{pub.volume}</span>
                        <span>•</span>
                        <span>Pages: {pub.pages}</span>
                        <span>•</span>
                        <span className="text-primary">{pub.date}</span>
                      </div>
                      {pub.doi && (
                        <p className="text-xs text-muted-foreground">
                          DOI: <a href={pub.doi} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">{pub.doi}</a>
                        </p>
                      )}
                    </div>

                    {pub.abstract && (
                      <div className="pt-2">
                        <h4 className="text-sm font-semibold text-foreground mb-2">Abstract</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">{pub.abstract}</p>
                      </div>
                    )}

                    {pub.keywords && pub.keywords.length > 0 && (
                      <div className="pt-2">
                        <h4 className="text-sm font-semibold text-foreground mb-2">Keywords</h4>
                        <div className="flex flex-wrap gap-2">
                          {pub.keywords.map((keyword, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
                            >
                              {keyword}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    <div className="flex flex-wrap gap-3 pt-4">
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
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
