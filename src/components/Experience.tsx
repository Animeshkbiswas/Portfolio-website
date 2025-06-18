
import { CalendarIcon, MapPin } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const Experience = () => {
  const experiences = [
    {
      title: "Machine Learning Research Intern",
      company: "NIT Rourkela",
      location: "Rourkela, Odisha",
      period: "May 2025 - Present",
      description: [
        "Conducting time series classification by transforming multivariate time series data comprising 30 datasets into images via colormap techniques.",
        "Utilized Vision Transformers (ViT), originally designed for image classification, to analyze images generated from time series data. Employed transfer learning by fine-tuning pretrained ViT models (trained on ImageNet) on custom time series image datasets, reducing training time by 20%."
      ],
      skills: ["TensorFlow", "PyTorch", "Computer Vision", "Time Series Analysis"]
    },
    {
      title: "Vocational Trainee",
      company: "NALCO",
      location: "Angul, Odisha",
      period: "May 2024 - June 2024",
      description: [
        "Collaborated with cross-functional teams to develop a user-friendly web solution for Indian Railways, streamlining payment calculations and automating real-time monitoring of power regulation and equipment performance, leading to reduced processing time, improved efficiency, and cost savings."
      ],
      skills: ["Web Development", "JavaScript", "Python", "Data Analysis"]
    }
  ];

  return (
    <section id="experience" className="py-16 bg-muted/30">
      <div className="section-container">
        <h2 className="section-title">Work Experience</h2>
        
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div 
              key={`${exp.company}-${index}`} 
              className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 animate-fadeIn"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="lg:col-span-3 space-y-1">
                <h3 className="font-semibold text-lg">{exp.title}</h3>
                <p className="font-medium text-primary">{exp.company}</p>
                
                <div className="flex items-center text-sm text-muted-foreground gap-1">
                  <CalendarIcon className="h-4 w-4" />
                  <span>{exp.period}</span>
                </div>
                
                <div className="flex items-center text-sm text-muted-foreground gap-1">
                  <MapPin className="h-4 w-4" />
                  <span>{exp.location}</span>
                </div>
              </div>
              
              <div className="lg:col-span-9">
                <ul className="space-y-3 list-disc pl-5">
                  {exp.description.map((point, i) => (
                    <li key={i} className="text-foreground">{point}</li>
                  ))}
                </ul>
                
                <div className="flex flex-wrap gap-2 mt-4">
                  {exp.skills.map(skill => (
                    <Badge key={skill} variant="outline">{skill}</Badge>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
