
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const year = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-lg font-bold">Animesh Kumar Biswas</p>
            <p className="text-sm opacity-80">Machine Learning Researcher & Software Developer</p>
          </div>
          
          <div className="text-center mb-4 md:mb-0">
            <ul className="flex space-x-6">
              <li><a href="#home" className="hover:text-primary transition-colors text-sm">Home</a></li>
              <li><a href="#about" className="hover:text-primary transition-colors text-sm">About</a></li>
              <li><a href="#skills" className="hover:text-primary transition-colors text-sm">Skills</a></li>
              <li><a href="#experience" className="hover:text-primary transition-colors text-sm">Experience</a></li>
              <li><a href="#projects" className="hover:text-primary transition-colors text-sm">Projects</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors text-sm">Contact</a></li>
            </ul>
          </div>
          
          <button
            onClick={scrollToTop}
            className="bg-secondary-foreground text-secondary rounded-full p-2 hover:bg-opacity-90 transition-all"
            aria-label="Scroll to top"
          >
            <ArrowUp size={18} />
          </button>
        </div>
        
        <div className="border-t border-secondary-foreground/20 mt-6 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm opacity-80">© {year} Animesh Kumar Biswas. All rights reserved.</p>
          <div className="flex mt-2 md:mt-0 space-x-4">
            <a
              href="https://github.com/Animeshkbiswas"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary-foreground hover:text-primary transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/animesh"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary-foreground hover:text-primary transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="mailto:animeshkbiswas15122003@gmail.com"
              className="text-secondary-foreground hover:text-primary transition-colors"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
