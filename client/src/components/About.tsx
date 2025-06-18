
import { GraduationCap, BookOpen } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-16 bg-muted/30">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-4 animate-fadeIn">
            <p className="text-lg">
              I'm a Computer Science and Engineering student at the National Institute of Technology, Rourkela, 
              with a passion for machine learning, computer vision, and full-stack development.
            </p>
            <p>
              Currently, I'm working as a <span className="font-semibold">Machine Learning Research Intern</span> at NIT Rourkela,
              where I'm focused on time series data classification using advanced techniques, and leveraging Vision Transformers (ViT) for
              image classification.
            </p>
            <p>
              My journey in technology began with a strong foundation in mathematics and programming,
              and I've since expanded my skills across various technologies including TensorFlow, PyTorch,
              Flask, React, and more. I enjoy solving complex problems and building user-friendly applications
              that make a real impact.
            </p>
          </div>
          
          <div className="lg:col-span-1 space-y-6 animate-fadeIn delay-200">
            <h3 className="text-xl font-bold text-secondary border-b pb-2 border-border">Education</h3>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="mt-1 bg-primary/10 rounded-full p-2">
                  <GraduationCap size={18} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-bold">National Institute of Technology, Rourkela</h4>
                  <p className="text-sm text-muted-foreground">Bachelor of Technology in Computer Science and Engineering</p>
                  <p className="text-sm text-muted-foreground">August 2023 - Present • CGPA: 7.91</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="mt-1 bg-primary/10 rounded-full p-2">
                  <BookOpen size={18} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-bold">Mothers' Public School, Bhubaneswar</h4>
                  <p className="text-sm text-muted-foreground">AISSCE - CBSE Science (PCM)</p>
                  <p className="text-sm text-muted-foreground">May 2023 • Percentage: 94.6%</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="mt-1 bg-primary/10 rounded-full p-2">
                  <BookOpen size={18} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-bold">Mother's Public School, Bhubaneswar</h4>
                  <p className="text-sm text-muted-foreground">AISSE - CBSE (Primary)</p>
                  <p className="text-sm text-muted-foreground">May 2021 • Percentage: 95.4%</p>
                </div>
              </div>
            </div>
            
            <h3 className="text-xl font-bold text-secondary border-b pb-2 border-border pt-4">Coursework</h3>
            <div className="flex flex-wrap gap-2">
              <span className="skill-badge">Data Structures and Algorithms</span>
              <span className="skill-badge">Object Oriented Programming</span>
              <span className="skill-badge">Design and Analysis of Algorithms</span>
              <span className="skill-badge">Database Management</span>
              <span className="skill-badge">Machine Learning</span>
              <span className="skill-badge">Probability & Statistics</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
