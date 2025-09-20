import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Code, Palette, Wrench } from "lucide-react";

const workSamples = {
  webflow: [
    {
      title: "Automation Tools Integration",
      description:
        "Used Clay automation tool to create personalized landing pages in Webflow. By providing a LinkedIn URL, generates an entire page using Clay × Webflow × Make integration.",
      technologies: ["Webflow", "Clay", "Make", "JavaScript"],
      category: "Automation",
    },
    {
      title: "Corporate Website",
      description:
        "Created company websites with custom JavaScript to extend CMS functionality and add interactive elements for better user engagement.",
      technologies: ["Webflow", "Custom JavaScript", "CMS"],
      category: "Corporate",
      url: "https://www.codewalnut.com/",
    },
    {
      title: "Design System Implementation",
      description:
        "Created and maintained a comprehensive design system for consistent UI/UX across multiple projects and templates.",
      technologies: ["Webflow", "Design System", "UI/UX"],
      category: "Design System",
    },
  ],
  wordpress: [
    {
      title: "Custom Theme Development",
      description:
        "Developed and customized WordPress themes to meet specific business requirements with focus on performance and SEO.",
      technologies: ["WordPress", "PHP", "CSS", "JavaScript"],
      category: "Theme Development",
    },
    {
      title: "Plugin Development",
      description:
        "Created custom plugins to extend site functionality and integrate third-party tools for better analytics and tracking.",
      technologies: ["WordPress", "PHP", "MySQL", "APIs"],
      category: "Plugin Development",
    },
    {
      title: "Page Builder Expertise",
      description:
        "Worked extensively with Divi, Elementor and Beaver Builder WordPress themes for rapid development and customization.",
      technologies: ["Divi", "Elementor", "Beaver Builder", "WordPress"],
      category: "Page Builders",
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
};

const categoryIcons = {
  webflow: <Palette className="w-6 h-6" />,
  wordpress: <Wrench className="w-6 h-6" />,
  react: <Code className="w-6 h-6" />,
};

const categoryTitles = {
  webflow: "Webflow Projects",
  wordpress: "WordPress Development",
  react: "React & Next.js Applications",
};

const WorkSamples = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-background to-secondary/20">
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
