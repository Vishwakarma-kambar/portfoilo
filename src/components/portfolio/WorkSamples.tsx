import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Code, Palette, Wrench } from "lucide-react";

const workSamples = {
  webflow: [
    {
      title: "CodeWalnut Website",
      description:
        "Developed a corporate website using custom JavaScript to enhance CMS functionality and create interactive elements for improved user engagement.",
      technologies: [
        "WebFlow",
        "Custom JavaScript",
        "CMS",
        "Animations",
        "Finsweet Attributes",
        "Client-First naming convention",
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
        "Built a company website with custom JavaScript, extending CMS capabilities and adding interactive features to boost user engagement.",
      technologies: [
        "WebFlow",
        "Custom JavaScript",
        "CMS",
        "Animations",
        "FinSweet Attributes",
        "Client-First naming convention",
        "SEO",
        "Google Search Console",
        "Google Analytics",
        "Clarity",
      ],
      category: "Corporate",
      url: "https://www.leadwalnut.com/",
    },
    {
      title: "Network Poppins Website",
      description:
        "Provided technical support for new feature implementation and content administration.",
      technologies: [
        "WebFlow",
        "CMS",
        "FinSweet Attributes",
        "Client-First naming convention",
      ],
      category: "Corporate",
      url: "https://www.networkpoppins.com/",
    },
    {
      title: "Sickick Website",
      description:
        "Provided technical support for implementing advanced functionality.",
      technologies: ["WebFlow", "Custom Javascript"],
      category: "Music",
      url: "https://www.sickick.com/",
    },
  ],
  wordpress: [
    {
      title: "Coacharya Website",
      description:
        "Migrated the website to a new theme, optimized performance and UI, and managed ongoing content.",
      technologies: [
        "WordPress",
        "Divi",
        "PHP",
        "HTML",
        "CSS",
        "JavaScript",
        "SEO",
      ],
      category: "Global Leadership Development Firm",
      url: "https://www.coacharya.com/",
    },
    {
      title: "FirstEigen Website",
      description:
        "Revamped pages, improved website performance, and handled content management.",
      technologies: [
        "WordPress",
        "Beaver Builder",
        "PHP",
        "HTML",
        "CSS",
        "JavaScript",
      ],
      category: "Corporate",
      url: "https://firsteigen.com/",
    },
    {
      title: "eFax Website",
      description: "Handled content administration tasks for the website.",
      technologies: ["WordPress", "Custom Theme", "CMS", "SEO"],
      category: "Telecommunications",
      url: "https://www.efax.com/",
    },
    {
      title: "Samarth Elder Care Website",
      description:
        "Managed content administration and implemented Advanced Custom Fields (ACF) customizations.",
      technologies: ["WordPress", "Elementor", "CMS", "SEO", "ACF"],
      category: "Elderly Care Services",
      url: "https://care.samarth.community/",
    },
    {
      title: "Plugin Development",
      description:
        "Developed custom plugins to extend site functionality and integrate third-party tools for enhanced analytics and tracking.",
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
  ],
  react: [
    {
      title: "Aviation Landing Page",
      description:
        "Built a fully functional landing page for an aviation service using vanilla JavaScript, featuring custom form validation and interactive elements.",
      technologies: ["HTML", "CSS", "Vanilla JavaScript", "Form Validation"],
      category: "Landing Page",
      url: "https://www.aeropt.in/",
    },
    {
      title: "NGO Project",
      description:
        "Developed and implemented several responsive pages for an NGO using React, employing a component-based architecture for maintainability and a clean UI.",
      technologies: ["React.js", "CSS", "Responsive Design"],
      category: "Non-Profit",
      url: "https://www.riseindiafoundation.in/",
    },
    {
      title: "B2B Project",
      description:
        "Built dynamic and static pages for a B2B project using Next.js, which included writing unit test cases and implementing a multi-featured calendar system.",
      technologies: ["Next.js", "TypeScript", "Testing", "Calendar API"],
      category: "Business",
    },
    {
      title: "Scholarship Portal",
      description:
        "Designed and developed a responsive scholarship application portal featuring over 12 reusable form components and ensuring cross-browser compatibility.",
      technologies: ["Next.js", "React Hook Form", "TypeScript"],
      category: "Education",
    },
  ],
  automation: [
    {
      title: "The LinkedIn URL to Landing Page Pipeline",
      description:
        "Utilized the Clay automation tool to create personalized landing pages in Webflow. By providing a LinkedIn URL, the system generates an entire page through a Clay, Webflow, and Make integration.",
      technologies: ["Webflow", "Clay", "Make", "JavaScript"],
      category: "Automation",
      url: "https://www.codewalnut.com/insights/linkedin-to-webflow-personalized-pages",
    },
  ],
};

const categoryIcons = {
  webflow: <Palette className="w-6 h-6" />,
  wordpress: <Wrench className="w-6 h-6" />,
  react: <Code className="w-6 h-6" />,
  automation: <ExternalLink className="w-6 h-6" />,
};

const categoryTitles = {
  webflow: "Webflow Projects",
  wordpress: "WordPress Development",
  react: "React & Next.js Applications",
  automation: "Automation Projects",
};

const WorkSamples = () => {
  return (
    <section
      id="work-samples"
      className="pb-10 lg:pb-20 px-6 bg-gradient-to-b from-background to-secondary/20"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-10 lg:gap-16">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">
            Work <span className="text-gradient">Samples</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Showcasing expertise across different technologies and platforms
          </p>
        </div>

        {Object.entries(workSamples).map(([category, projects]) => (
          <div key={category} className="flex flex-col">
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
                      {project.url && (
                        <Button
                          size="sm"
                          variant="ghost"
                          asChild
                          className="opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-smooth"
                        >
                          <a
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`View ${project.title} (opens in a new tab)`}
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        </Button>
                      )}
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
