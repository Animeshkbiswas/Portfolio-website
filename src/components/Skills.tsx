
import { Code, Database, Server, Layers, Cpu, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import SkillTree from './SkillTree';

const Skills = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'tree'>('grid');

  const skillCategories = [
    {
      title: "Languages",
      icon: <Code className="h-5 w-5" />,
      skills: ["C", "C++", "Python", "JavaScript", "TypeScript", "MATLAB"]
    },
    {
      title: "Machine Learning",
      icon: <Cpu className="h-5 w-5" />,
      skills: ["TensorFlow", "PyTorch", "OpenCV", "scikit-learn", "Hugging Face", "Vision Transformers", "NLP"]
    },
    {
      title: "Web Development",
      icon: <Globe className="h-5 w-5" />,
      skills: ["HTML", "CSS", "React", "Flask", "FastAPI", "JavaScript", "Node.js"]
    },
    {
      title: "Databases",
      icon: <Database className="h-5 w-5" />,
      skills: ["MySQL", "PostgreSQL", "MongoDB", "Redis"]
    },
    {
      title: "Developer Tools",
      icon: <Layers className="h-5 w-5" />,
      skills: ["Git", "GitHub", "VS Code", "Jupyter", "Docker", "Linux"]
    },
    {
      title: "Others",
      icon: <Server className="h-5 w-5" />,
      skills: ["RESTful APIs", "Data Analysis", "Time Series Analysis", "Computer Vision"]
    }
  ];

  return (
    <section id="skills" className="py-16 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent animate-pulse"></div>
      
      <div className="section-container relative z-10">
        <div className="flex items-center justify-between mb-8">
          <h2 className="section-title">Technical Skills</h2>
          <div className="flex gap-2">
            <Button
              variant={viewMode === 'grid' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setViewMode('grid')}
            >
              Grid View
            </Button>
            <Button
              variant={viewMode === 'tree' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setViewMode('tree')}
            >
              Skill Tree
            </Button>
          </div>
        </div>
        
        {viewMode === 'tree' ? (
          <div className="mb-8">
            <p className="text-muted-foreground mb-4 text-center">
              Click on any skill node to view details. Drag to explore the skill connections!
            </p>
            <SkillTree />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <div 
                key={category.title}
                className="bg-card rounded-lg p-6 shadow-sm border animate-fadeIn hover:shadow-lg transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <div className="bg-primary/10 rounded-full p-2">
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-semibold">{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map(skill => (
                    <span key={skill} className="skill-badge hover:bg-primary/20 transition-colors">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Skills;
