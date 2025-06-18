
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="md:w-3/5 space-y-6 animate-fadeIn">
            <p className="text-primary font-medium">Hi, my name is</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-secondary font-heading">
              Animesh Kumar Biswas
            </h1>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-muted-foreground">
              Machine Learning Research Intern & Software Developer
            </h2>
            <p className="text-lg max-w-2xl">
              Specialized in machine learning, computer vision, and web development. 
              Currently working on time series classification and deep learning projects at NIT Rourkela.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button asChild size="lg">
                <a href="#projects">View Projects</a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="#contact">Contact Me</a>
              </Button>
            </div>
            <div className="flex items-center gap-4 pt-4">
              <a 
                href="https://github.com/Animeshkbiswas" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a 
                href="hhttps://www.linkedin.com/in/animesh-kumar-biswas-584085280/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:animeshkbiswas15122004@gmail.com" 
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div className="md:w-2/5 flex justify-center animate-fadeIn delay-200">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-lg border-4 border-primary/20">
              <img 
                src="/lovable-uploads/20281ccd-415d-4182-9ece-17e6eb28ad99.png" 
                alt="Animesh Kumar Biswas"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:flex flex-col items-center animate-bounce">
          <p className="text-sm text-muted-foreground mb-2">Scroll Down</p>
          <ArrowDown size={20} className="text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
