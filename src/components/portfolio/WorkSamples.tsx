import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Code, Palette, Wrench } from "lucide-react";

const workSamples = {
  webflow: [
    {
      title: "CodeWalnut Website",
      description:
        "Created company websites with custom JavaScript to extend CMS functionality and add interactive elements for better user engagement.",
      technologies: [
        "WebFlow",
        "Custom JavaScript",
        "CMS",
        "Animations",
        "FinSweet Attributes",
        "FinSweet Class Naming Conventions",
        "SEO",
        "Google Search Console",
        "Google Analytics",
        "Clarity",
      ],
      category: "Corporate",
      url: "https://www.codewalnut.com/",
    },
    {
      title: "LeadWalnut Website",
      description:
        "Created company websites with custom JavaScript to extend CMS functionality and add interactive elements for better user engagement.",
      technologies: [
        "WebFlow",
        "Custom JavaScript",
        "CMS",
        "Animations",
        "FinSweet Attributes",
        "FinSweet Class Naming Conventions",
        "SEO",
        "Google Search Console",
        "Google Analytics",
        "Clarity",
      ],
      category: "Corporate",
      url: "https://www.leadwalnut.com/",
    },
    {
      title: "NetWork Poppiens Website",
      description:
        "Given Tech support for new Feature and content administration",
      technologies: [
        "WebFlow",
        "CMS",
        "FinSweet Attributes",
        "FinSweet Class Naming Conventions",
      ],
      category: "Corporate",
      url: "https://www.leadwalnut.com/",
    },
    {
      title: "SickKick Website",
      description: "Given Tech support for Advance Functionality",
      technologies: ["WebFlow", "CMS", "Custom Javascript"],
      category: "Music  ",
      url: "https://www.leadwalnut.com/",
    },
  ],
  wordpress: [
    {
      title: "Coacharya Website",
      description:
        "Migrated to different theme, optimized website performance & UI and managed content",
      technologies: [
        "WordPress",
        "PHP",
        "HTML",
        "CSS",
        "JavaScript",
        "Divi",
        "SEO",
      ],
      category: "Theme Migration",
    },
    {
      title: "Plugin Development",
      description:
        "Created custom plugins to extend site functionality and integrate third-party tools for better analytics and tracking.",
      technologies: [
        "WordPress",
        "PHP",
        "HTML",
        "CSS",
        "JavaScript",
        "SQL",
        "Plugin Development",
      ],
      category: "Plugin Development",
    },
    {
      title: "FirstEigen Website",
      description:
        "Page revamp, Improved website performance, Content management, ",
      technologies: [
        "Beaver Builder",
        "WordPress",
        "PHP",
        "HTML",
        "CSS",
        "JavaScript",
      ],
      category: "Corporate",
    },
  ],
  react: [
    {
      title: "NGO Project",
      description:
        "Developed and implemented 4-5 responsive pages using React with component-based architecture for maintainability and clean UI.",
      technologies: ["React.js", "CSS", "Responsive Design"],
      category: "Non-Profit",
    },
    {
      title: "B2B Project",
      description:
        "Built multiple dynamic and static pages with Next.js, including unit test cases and multi-featured calendar system for scheduling.",
      technologies: ["Next.js", "TypeScript", "Testing", "Calendar API"],
      category: "Business",
    },
    {
      title: "Scholarship Portal",
      description:
        "Designed and developed responsive scholarship application portal with 12+ reusable form components and cross-browser compatibility.",
      technologies: ["Next.js", "React Hook Form", "TypeScript"],
      category: "Education",
    },
    {
      title: "Aviation Landing Page",
      description:
        "Built a fully functional landing page for aviation service using vanilla JavaScript with custom form validation and interactive elements.",
      technologies: ["HTML", "CSS", "Vanilla JavaScript", "Form Validation"],
      category: "Landing Page",
    },
  ],
  Automation: [
    {
      title: "The LinkedIn URL to Landing Page Pipeline",
      description:
        "Used Clay automation tool to create personalized landing pages in Webflow. By providing a LinkedIn URL, generates an entire page using Clay × Webflow × Make integration.",
      technologies: ["Webflow", "Clay", "Make", "JavaScript"],
      category: "Automation",
    },
  ],
};

const categoryIcons = {
  webflow: <Palette className="w-6 h-6" />,
  wordpress: <Wrench className="w-6 h-6" />,
  react: <Code className="w-6 h-6" />,
  Automation: <ExternalLink className="w-6 h-6" />,
};

const categoryTitles = {
  webflow: "Webflow Projects",
  wordpress: "WordPress Development",
  react: "React & Next.js Applications",
  Automation: "Automation Projects",
};

const WorkSamples = () => {
  return (
    <section
      id="work-samples"
      className="py-20 px-6 bg-gradient-to-b from-background to-secondary/20"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Work <span className="text-gradient">Samples</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Showcasing expertise across different technologies and platforms
          </p>
        </div>

        {Object.entries(workSamples).map(([category, projects]) => (
          <div key={category} className="mb-20">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 rounded-lg bg-primary/10 text-primary">
                {categoryIcons[category as keyof typeof categoryIcons]}
              </div>
              <h3 className="text-2xl font-semibold text-gradient">
                {categoryTitles[category as keyof typeof categoryTitles]}
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <Card
                  key={index}
                  className="shadow-card hover-glow transition-smooth group animate-fade-in"
                >
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-lg group-hover:text-primary transition-smooth">
                          {project.title}
                        </CardTitle>
                        <Badge variant="secondary" className="mt-2">
                          {project.category}
                        </Badge>
                      </div>
                      <Button
                        size="sm"
                        variant="ghost"
                        className="opacity-0 group-hover:opacity-100 transition-smooth"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkSamples;
