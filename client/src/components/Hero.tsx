
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
                <span className="text-primary font-semibold bg-primary/10 px-2 py-1 rounded-md"> machine learning</span>, 
                <span className="text-secondary font-semibold bg-secondary/10 px-2 py-1 rounded-md"> computer vision</span>, and 
                <span className="text-accent font-semibold bg-accent/10 px-2 py-1 rounded-md"> full-stack development</span>.
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
          
          {/* Profile & 3D Section */}
          <div className="flex flex-col items-center gap-8 animate-slideInRight">
            {/* Enhanced Profile Photo */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20 backdrop-blur-sm border-2 border-white/20">
                <img 
                  src="/lovable-uploads/20281ccd-415d-4182-9ece-17e6eb28ad99.png" 
                  alt="Animesh Kumar Biswas - ML Engineer & Developer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
            
            {/* 3D Interactive Section */}
            <div className="w-full max-w-md">
              <div className="glass-card rounded-xl p-2">
                <Hero3D />
              </div>
              <p className="text-center text-sm text-muted-foreground mt-2">
                Interactive 3D visualization - drag to explore!
              </p>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:flex flex-col items-center animate-bounce animate-fadeIn delay-700">
          <p className="text-sm text-muted-foreground mb-2">Discover More</p>
          <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
          </div>
          <ArrowDown size={16} className="text-primary mt-2" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
