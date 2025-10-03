import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { LinkedinIcon, Mail, MapPin, Phone } from "lucide-react";

const HeroSection = () => {
  const resumeUrl =
    "https://drive.google.com/file/d/1BAr8NrS1DHqHPj_KD8IFaDizyBivp2rF/view?usp=drive_link";

  return (
    <section className="relative min-h-scree px-6 py-10 lg:py-20 bg-gradient-to-br from-background via-secondary/30 to-background">
      <div className="absolute inset-0 gradient-accent opacity-50"></div>

      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
        <div className="space-y-4">
          <Badge
            variant="secondary"
            className="px-4 py-2 text-sm animate-float"
          >
            Available for opportunities
          </Badge>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            <span className="text-gradient">Vishwakarma</span>
            <br />
            <span className="text-foreground">Kambar</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Software Developer specializing in React, Next.js, WordPress, and
            Webflow
          </p>

          <div className="text-lg text-muted-foreground">
            2+ years of experience building scalable web applications
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-primary" />
            <a
              href="tel:+918970139581"
              target="_blank"
              rel="noopener noreferrer"
            >
              8970139581
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-primary" />
            <a href="mailto:vishwakarmaplc@gmail.com" rel="noopener noreferrer">
              vishwakarmaplc@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-primary" />
            <a
              href="https://www.google.com/maps/place/Kengeri+Upanagar,+Bengaluru,+Karnataka/@12.9253036,77.5188233,15z/data=!3m1!4b1!4m5!3m4!1s0x3bae3f2f7f4f4d6d:0x8e8b8e8b8e8b8e8b!8m2!3d12.9253036!4d77.5273687"
              target="_blank"
              rel="noopener noreferrer"
            >
              Kengeri Upanagar, Bengaluru
            </a>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <LinkedinIcon className="w-4 h-4 text-primary" />
            <a
              href="https://www.linkedin.com/in/vishwakarma-kambar/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.linkedin.com/in/vishwakarma-kambar/
            </a>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            download="Vishwakarma_Kambar_Resume.pdf"
          >
            <Button className="gradient-primary hover-glow transition-smooth">
              Download Resume
            </Button>
          </a>
          <Button
            variant="secondary"
            className="hover-glow transition-smooth"
            onClick={() => {
              document
                .getElementById("work-samples")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            View Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
