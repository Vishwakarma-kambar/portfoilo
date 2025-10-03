import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const skills = {
  "Frontend Technologies": [
    "React JS",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "HTML",
    "CSS",
    "Tailwind CSS",
    "Redux",
    "React Testing Library",
    "Automation Tools",
    "Technical SEO",
  ],
  "CMS , No-Code & Automation Tools": [
    "WordPress",
    "Webflow",
    "Zapier",
    "Make",
    "Clay",
    "n8n",
  ],
  "Backend & Tools": ["Core Java", "RESTful APIs", "Git", "OOPS"],
  languages: ["English", "Kannada", "Hindi"],
};

const SkillsSection = () => {
  return (
    <section className="py-10 lg:py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10 lg:mb-16 ">
          <h2 className="text-4xl font-bold mb-4">
            Skills & <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technical proficiencies and language capabilities
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {Object.entries(skills).map(([category, skillList]) => (
            <Card
              key={category}
              className="shadow-card hover-glow transition-smooth animate-slide-in-left"
            >
              <CardHeader>
                <CardTitle className="text-xl text-gradient">
                  {category}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-3">
                  {skillList.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="px-3 py-1"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
