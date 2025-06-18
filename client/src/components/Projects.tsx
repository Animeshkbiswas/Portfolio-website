
import { ExternalLink, Github, Calendar } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      title: "Emotion Recognition for Student Learning Analytics",
      period: "May 2025 - June 2025",
      description: "Developed and deployed a real-time emotion detection system using AlexNet/ViT-Facial-Expression-Recognition to classify student emotions (Boredom, Confusion, Frustration, Engagement) from video and audio data, fine-tuned on a student classroom dataset with 7000+ images.",
      achievements: [
        "Achieved 98% train accuracy and 92% validation accuracy, integrating the solution into a user-facing application for feedback and enhanced learning analytics."
      ],
      technologies: ["Python", "PyTorch", "OpenCV", "Hugging Face"],
      github: "https://github.com/Animeshkbiswas/Emotion_detector",
      liveLink: "",
    },
    {
      title: "Resume Analyzer",
      period: "June 2025",
      description: "Developed an AI-powered Resume Analyzer that leverages NLP (SpaCy) and machine learning to extract skills, experiences, and match them to job descriptions, providing a relevance score for each application.",
      achievements: [
        "Designed and implemented a fully responsive web interface using HTML, CSS, and JavaScript with a Flask backend to handle resume uploads, processing, and real-time results display, reducing manual screening time by 80%."
      ],
      technologies: ["Python", "Flask", "HTML/CSS", "JavaScript", "NLP", "SpaCy"],
      github: "https://github.com/Animeshkbiswas/Resume-Analyzer",
      liveLink: "",
    }
  ];

  return (
    <section id="projects" className="py-16">
      <div className="section-container">
        <h2 className="section-title">Projects</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className="project-card animate-fadeIn"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="p-6 space-y-4">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <div className="flex gap-2">
                    {project.github && (
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                        aria-label="GitHub Repository"
                      >
                        <Github size={20} />
                      </a>
                    )}
                    {project.liveLink && (
                      <a 
                        href={project.liveLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                        aria-label="Live Project"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>
                
                <div className="flex items-center text-sm text-muted-foreground gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>{project.period}</span>
                </div>
                
                <p className="text-muted-foreground">{project.description}</p>
                
                {project.achievements && project.achievements.length > 0 && (
                  <div>
                    <h4 className="font-semibold">Key achievements:</h4>
                    <ul className="list-disc pl-5 space-y-1 mt-2">
                      {project.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                )}
                
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.technologies.map(tech => (
                    <Badge key={tech} variant="secondary">{tech}</Badge>
                  ))}
                </div>
                
                <div className="flex gap-3 pt-2">
                  {project.github && (
                    <Button asChild variant="outline" size="sm">
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        View Code
                      </a>
                    </Button>
                  )}
                  {project.liveLink && (
                    <Button asChild size="sm">
                      <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Button asChild size="lg">
            <a href="https://github.com/Animeshkbiswas" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2" />
              View More on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
