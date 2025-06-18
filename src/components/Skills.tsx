
import { Code, Database, Server, Layers, Cpu, Globe } from 'lucide-react';

const Skills = () => {
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
    <section id="skills" className="py-16">
      <div className="section-container">
        <h2 className="section-title">Technical Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div 
              key={category.title}
              className="bg-card rounded-lg p-6 shadow-sm border animate-fadeIn"
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
                  <span key={skill} className="skill-badge">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
