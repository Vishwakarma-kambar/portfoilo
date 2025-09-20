import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Download } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-t from-secondary/30 to-background">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your next project
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
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

          <Card className="shadow-card hover-glow transition-smooth animate-fade-in text-center">
            <CardHeader>
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <CardTitle className="text-lg">Email</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">vishwakarmaplc@gmail.com</p>
            </CardContent>
          </Card>

          <Card className="shadow-card hover-glow transition-smooth animate-fade-in text-center">
            <CardHeader>
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <CardTitle className="text-lg">Location</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Madiwala, Bengaluru</p>
            </CardContent>
          </Card>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <Button 
            className="gradient-primary hover-glow transition-smooth"
            onClick={() => window.open('mailto:vishwakarmaplc@gmail.com')}
          >
            <Mail className="w-4 h-4 mr-2" />
            Send Email
          </Button>
          <Button 
            variant="secondary" 
            className="hover-glow transition-smooth"
          >
            <Download className="w-4 h-4 mr-2" />
            Download Resume
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;