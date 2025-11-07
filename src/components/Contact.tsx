import { useState } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Mail, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, { message: "Name is required" }).max(100, { message: "Name must be less than 100 characters" }),
  email: z.string().trim().email({ message: "Invalid email address" }).max(255, { message: "Email must be less than 255 characters" }),
  subject: z.string().trim().min(1, { message: "Subject is required" }).max(200, { message: "Subject must be less than 200 characters" }),
  message: z.string().trim().min(10, { message: "Message must be at least 10 characters" }).max(1000, { message: "Message must be less than 1000 characters" }),
});

type ContactForm = z.infer<typeof contactSchema>;

export const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<ContactForm>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactForm, string>>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof ContactForm]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form data
    const result = contactSchema.safeParse(formData);

    if (!result.success) {
      const fieldErrors: Partial<Record<keyof ContactForm, string>> = {};
      result.error.errors.forEach((error) => {
        if (error.path[0]) {
          fieldErrors[error.path[0] as keyof ContactForm] = error.message;
        }
      });
      setErrors(fieldErrors);
      toast({
        title: "Validation Error",
        description: "Please fix the errors in the form",
        variant: "destructive",
      });
      return;
    }

    // Create mailto link with properly encoded data
    const mailtoLink = `mailto:nakul88laata@gmail.com?subject=${encodeURIComponent(
      result.data.subject
    )}&body=${encodeURIComponent(
      `Name: ${result.data.name}\nEmail: ${result.data.email}\n\nMessage:\n${result.data.message}`
    )}`;

    // Open email client
    window.location.href = mailtoLink;

    toast({
      title: "Opening Email Client",
      description: "Your email client will open with the pre-filled message.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
    setErrors({});
  };

  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-muted-foreground">
            Have a question or want to work together? Send me a message!
          </p>
        </div>

        <Card className="p-8 bg-gradient-card backdrop-blur-sm border-primary/20">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-foreground">
                  Name <span className="text-destructive">*</span>
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  className={errors.name ? "border-destructive" : ""}
                />
                {errors.name && (
                  <p className="text-xs text-destructive">{errors.name}</p>
                )}
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-foreground">
                  Email <span className="text-destructive">*</span>
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  className={errors.email ? "border-destructive" : ""}
                />
                {errors.email && (
                  <p className="text-xs text-destructive">{errors.email}</p>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="subject" className="text-sm font-medium text-foreground">
                Subject <span className="text-destructive">*</span>
              </label>
              <Input
                id="subject"
                name="subject"
                type="text"
                placeholder="What is this about?"
                value={formData.subject}
                onChange={handleChange}
                className={errors.subject ? "border-destructive" : ""}
              />
              {errors.subject && (
                <p className="text-xs text-destructive">{errors.subject}</p>
              )}
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-foreground">
                Message <span className="text-destructive">*</span>
              </label>
              <Textarea
                id="message"
                name="message"
                placeholder="Your message here..."
                rows={6}
                value={formData.message}
                onChange={handleChange}
                className={errors.message ? "border-destructive" : ""}
              />
              {errors.message && (
                <p className="text-xs text-destructive">{errors.message}</p>
              )}
            </div>

            <div className="flex justify-center">
              <Button
                type="submit"
                size="lg"
                className="gap-2 bg-gradient-to-r from-primary to-accent hover:shadow-glow transition-all duration-300"
              >
                <Send className="h-4 w-4" />
                Send Message
              </Button>
            </div>
          </form>

          <div className="mt-8 pt-8 border-t border-primary/20 text-center">
            <p className="text-sm text-muted-foreground mb-4">Or reach out directly:</p>
            <div className="flex justify-center">
              <Button
                variant="outline"
                size="sm"
                className="gap-2"
                asChild
              >
                <a href="mailto:nakul88laata@gmail.com">
                  <Mail className="h-4 w-4" />
                  nakul88laata@gmail.com
                </a>
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};
