
import { ArrowDown, GitHub, Linkedin, Mail } from 'lucide-react';
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
              Currently working on time series classification and deep learning projects at IIT Roorkela.
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
                <GitHub size={20} />
              </a>
              <a 
                href="https://linkedin.com/in/animesh" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:animeshkbiswas15122003@gmail.com" 
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div className="md:w-2/5 flex justify-center animate-fadeIn delay-200">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-tr from-primary to-secondary/30 flex items-center justify-center shadow-lg">
              <div className="w-60 h-60 md:w-76 md:h-76 rounded-full bg-background flex items-center justify-center text-center text-xl font-bold">
                <div className="p-6">
                  <span className="text-primary">ML Researcher</span>
                  <span className="block my-3">&</span>
                  <span className="text-secondary">Software Developer</span>
                </div>
              </div>
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
