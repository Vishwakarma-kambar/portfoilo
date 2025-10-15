import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactSection = () => {
  const resumeUrl =
    "https://drive.google.com/file/d/1eLXe84Nd-wzgHGMe7_vKLPBqB0LtPAHw/view?usp=sharing";

  return (
    <section className="pb-10 lg:pb-20 px-6 bg-gradient-to-t from-secondary/30 to-background">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-10 lg:mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your next project
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <a href="tel:+918970139581" rel="noopener noreferrer">
            <Card className="shadow-card hover-glow transition-smooth animate-fade-in text-center">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Phone</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">8970139581</p>
              </CardContent>
            </Card>
          </a>

          <a href="mailto:vishwakarmaplc@gmail.com" rel="noopener noreferrer">
            <Card className="shadow-card hover-glow transition-smooth animate-fade-in text-center">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Email</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  vishwakarmaplc@gmail.com
                </p>
              </CardContent>
            </Card>
          </a>

          <a
            href="https://www.google.com/maps/place/Kengeri+Upanagar,+Bengaluru"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Card className="shadow-card hover-glow transition-smooth animate-fade-in text-center">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Location</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Kengeri Upanagar, Bengaluru
                </p>
              </CardContent>
            </Card>
          </a>
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
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
