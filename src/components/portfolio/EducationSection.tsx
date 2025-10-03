import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar } from "lucide-react";

const education = [
  {
    degree: "Bachelor of Engineering",
    institution: "Acharya Institute of Technology, Bengaluru",
    period: "2018 - 2022",
    type: "Engineering",
  },
  {
    degree: "PUC",
    institution: "Govt. PU College For Boys, Vijayapur",
    period: "2016 - 2018",
    type: "Pre-University",
  },
];

const certification = {
  title: "Java Full Stack Developer",
  provider: "Besant Technology",
  type: "Professional Certification",
};

const EducationSection = () => {
  return (
    <section className="py-10 lg:py-20 px-6 bg-gradient-to-b from-secondary/20 to-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10 lg:mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Education & <span className="text-gradient">Certification</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Academic background and professional development
          </p>
        </div>

        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <GraduationCap className="w-6 h-6 text-primary" />
              Education
            </h3>
            <div className="grid gap-6">
              {education.map((edu, index) => (
                <Card
                  key={index}
                  className="shadow-card hover-glow transition-smooth animate-slide-in-left"
                >
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div>
                        <CardTitle className="text-xl text-gradient">
                          {edu.degree}
                        </CardTitle>
                        <p className="text-muted-foreground mt-1">
                          {edu.institution}
                        </p>
                      </div>
                      <div className="flex items-center gap-4">
                        <Badge variant="secondary">{edu.type}</Badge>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          <span>{edu.period}</span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Badge className="w-6 h-6 text-primary" />
              Certification
            </h3>
            <Card className="shadow-card hover-glow transition-smooth animate-fade-in">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl text-gradient">
                      {certification.title}
                    </CardTitle>
                    <p className="text-muted-foreground mt-1">
                      {certification.provider}
                    </p>
                  </div>
                  <Badge variant="secondary">{certification.type}</Badge>
                </div>
              </CardHeader>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
