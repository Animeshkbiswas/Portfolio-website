
import { ArrowDown, Github, Linkedin, Mail, Download, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Hero3D from './Hero3D';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = [
    "Machine Learning Research Intern",
    "Software Developer",
    "AI Enthusiast",
    "Full-Stack Developer"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Animesh_Kumar_Biswas_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/Animeshkbiswas',
      icon: Github,
      color: 'hover:text-gray-900 dark:hover:text-gray-100'
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/animesh-kumar-biswas-584085280/',
      icon: Linkedin,
      color: 'hover:text-blue-600'
    },
    {
      name: 'Email',
      href: 'mailto:animeshkbiswas15122004@gmail.com',
      icon: Mail,
      color: 'hover:text-red-500'
    }
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.1),transparent_50%)]"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-secondary/10 rounded-full blur-xl animate-float delay-500"></div>
      
      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-slideInLeft">
            <div className="space-y-4">
              <p className="text-primary font-medium text-lg animate-fadeIn">
                👋 Hi, my name is
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground font-heading animate-fadeIn delay-100">
                <span className="gradient-text">Animesh Kumar</span>
                <br />
                <span className="text-secondary">Biswas</span>
              </h1>
              <div className="h-16">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-muted-foreground animate-fadeIn delay-200">
                  <span className="inline-block min-w-0">
                    {roles[currentRole]}
                  </span>
                  <span className="animate-pulse">|</span>
                </h2>
              </div>
            </div>
            
            <div className="space-y-4">
              <p className="text-xl max-w-2xl text-muted-foreground leading-relaxed animate-fadeIn delay-300">
                Passionate about transforming ideas into intelligent solutions through 
                <span className="text-primary font-semibold bg-primary/10 px-2 py-1 rounded-md mx-1"> machine learning</span>, 
                <span className="text-primary font-semibold bg-primary/10 px-2 py-1 rounded-md mx-1"> computer vision</span>, and 
                <span className="text-primary font-semibold bg-primary/10 px-2 py-1 rounded-md mx-1"> full-stack development</span>.
              </p>
              <p className="text-lg text-muted-foreground animate-fadeIn delay-400">
                Currently researching <span className="font-semibold text-foreground">time series classification</span> at <span className="font-semibold text-primary">NIT Rourkela</span>.
              </p>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4 animate-fadeIn delay-400">
              <Button asChild size="lg" className="group hover:scale-105 transition-all">
                <a href="#projects">
                  View My Work
                  <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={handleDownloadResume}
                className="group hover:scale-105 transition-all"
              >
                <Download className="mr-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
                Download Resume
              </Button>
              <Button asChild variant="ghost" size="lg" className="hover:scale-105 transition-all">
                <a href="#contact">
                  Contact Me
                </a>
              </Button>
            </div>
            
            {/* Social Links */}
            <div className="flex items-center gap-6 pt-4 animate-fadeIn delay-500">
              <span className="text-sm text-muted-foreground">Connect with me:</span>
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 rounded-full bg-muted hover:bg-primary/10 transition-all duration-200 hover:scale-110 ${social.color}`}
                  aria-label={social.name}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>
          
          {/* Enhanced Visual Section */}
          <div className="relative flex justify-center lg:justify-end animate-slideInRight">
            <div className="relative w-full max-w-lg">
              {/* Profile Card */}
              <div className="bg-gradient-to-br from-card via-card/90 to-card/70 backdrop-blur-sm border border-border/50 rounded-2xl p-6 shadow-xl">
                {/* Profile Image Placeholder */}
                <div className="w-40 h-40 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 border-4 border-white/20 shadow-lg flex items-center justify-center">
                  <div className="text-4xl font-bold text-primary">AB</div>
                </div>
                
                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="text-center p-3 bg-primary/5 rounded-lg border border-primary/20">
                    <div className="text-xl font-bold text-primary">15+</div>
                    <div className="text-xs text-muted-foreground">Projects</div>
                  </div>
                  <div className="text-center p-3 bg-secondary/5 rounded-lg border border-secondary/20">
                    <div className="text-xl font-bold text-secondary">3+</div>
                    <div className="text-xs text-muted-foreground">Years Coding</div>
                  </div>
                </div>
                
                {/* Current Status */}
                <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/20 rounded-lg p-4 mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium text-green-700 dark:text-green-400">Currently Available</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Open to new opportunities and collaborations</p>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-primary/30 to-transparent rounded-full blur-xl animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-tr from-secondary/30 to-transparent rounded-full blur-xl animate-pulse delay-300"></div>
              <div className="absolute top-1/2 -left-8 w-16 h-16 bg-accent/20 rounded-full blur-lg animate-float"></div>
            </div>
          </div>
        </div>
        
        {/* Achievement Highlights */}
        <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 flex flex-wrap justify-center gap-4 md:gap-6 animate-fadeIn delay-700 max-w-md">
          <div className="bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-lg px-3 py-2 text-center min-w-[100px]">
            <div className="text-lg font-bold text-primary">3+</div>
            <div className="text-xs text-muted-foreground whitespace-nowrap">Years Experience</div>
          </div>
          <div className="bg-secondary/10 backdrop-blur-sm border border-secondary/20 rounded-lg px-3 py-2 text-center min-w-[100px]">
            <div className="text-lg font-bold text-secondary">15+</div>
            <div className="text-xs text-muted-foreground whitespace-nowrap">Projects Built</div>
          </div>
          <div className="bg-accent/10 backdrop-blur-sm border border-accent/20 rounded-lg px-3 py-2 text-center min-w-[100px]">
            <div className="text-lg font-bold text-accent">ML</div>
            <div className="text-xs text-muted-foreground whitespace-nowrap">Research Focus</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
