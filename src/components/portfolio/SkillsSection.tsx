import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const skills = {
  "Frontend Technologies": [
    { name: "React JS", level: 90 },
    { name: "Next.js", level: 85 },
    { name: "TypeScript", level: 80 },
    { name: "JavaScript", level: 95 },
    { name: "HTML", level: 95 },
    { name: "CSS", level: 90 },
    { name: "Tailwind CSS", level: 85 }
  ],
  "CMS & No-Code": [
    { name: "WordPress", level: 90 },
    { name: "Webflow", level: 85 },
    { name: "Technical SEO", level: 80 }
  ],
  "Backend & Tools": [
    { name: "Core Java", level: 75 },
    { name: "RESTful APIs", level: 80 },
    { name: "Git", level: 85 },
    { name: "Redux", level: 75 }
  ],
  "Testing & Other": [
    { name: "React Testing Library", level: 70 },
    { name: "OOPS", level: 80 },
    { name: "Automation Tools", level: 75 }
  ]
};

const languages = ["English", "Kannada", "Hindi"];

const SkillsSection = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Skills & <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technical proficiencies and language capabilities
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {Object.entries(skills).map(([category, skillList]) => (
            <Card key={category} className="shadow-card hover-glow transition-smooth animate-slide-in-left">
              <CardHeader>
                <CardTitle className="text-xl text-gradient">{category}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {skillList.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-xs text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="shadow-card hover-glow transition-smooth animate-fade-in">
          <CardHeader>
            <CardTitle className="text-xl text-gradient">Languages</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3">
              {languages.map((language) => (
                <Badge key={language} variant="secondary" className="px-4 py-2">
                  {language}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default SkillsSection;