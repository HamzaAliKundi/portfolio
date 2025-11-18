import { useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';
import { motion } from 'framer-motion';
import { FaUser, FaLaptopCode, FaRocket, FaBriefcase, FaEnvelope } from 'react-icons/fa';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Don't update active section if we're programmatically scrolling
      if (isScrolling) return;
      
      // Update active section based on scroll position
      const sections = ['hero', 'about', 'skills', 'projects', 'experience', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isScrolling]);

  const scrollToSection = (sectionId) => {
    // Immediately update active section for smooth button transition
    setActiveSection(sectionId);
    setIsScrolling(true);
    
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      
      // Re-enable scroll handler after scroll completes
      setTimeout(() => {
        setIsScrolling(false);
      }, 1000);
    }
  };

  const navItems = [
    { id: 'about', label: 'About', icon: FaUser },
    { id: 'skills', label: 'Skills', icon: FaLaptopCode },
    { id: 'projects', label: 'Projects', icon: FaRocket },
    { id: 'experience', label: 'Exp', icon: FaBriefcase },
    { id: 'contact', label: 'Contact', icon: FaEnvelope },
  ];

  return (
    <>
      {/* Desktop Navbar - Top */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`hidden md:block fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-dark-surface/95 backdrop-blur-md shadow-lg shadow-primary/10' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="text-2xl font-bold gradient-text cursor-pointer"
              onClick={() => scrollToSection('hero')}
            >
              {portfolioData.personal.name.split(' ').map(n => n[0]).join('')}
            </motion.div>
            
            <div className="flex gap-8 items-center">
              {navItems.map((item) => (
                <motion.a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => { e.preventDefault(); scrollToSection(item.id); }}
                  className={`transition-colors relative group ${
                    activeSection === item.id ? 'text-primary' : 'text-white/80 hover:text-primary'
                  }`}
                  whileHover={{ y: -2 }}
                >
                  {item.label}
                  <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary to-secondary transition-all duration-300 ${
                    activeSection === item.id ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></span>
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navbar - Bottom */}
      <motion.nav
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="md:hidden fixed bottom-0 left-0 right-0 z-50"
      >
        <div className="bg-gradient-to-b from-dark-surface/95 to-dark-surface/98 backdrop-blur-md border-t border-white/10 shadow-lg shadow-primary/10 rounded-tl-3xl rounded-bl-3xl overflow-visible">
          <div className="flex justify-around items-end h-20 px-2 pb-3 relative">
            {navItems.map((item, index) => {
              if (activeSection === item.id) {
                return (
                  <motion.div
                    key={item.id}
                    layoutId="activeNavItem"
                    className="relative z-20 flex flex-col items-center justify-center mb-2"
                    style={{ transform: 'translateY(-28px)' }}
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  >
                    {/* Large circular active button with border only */}
                    <motion.button
                      onClick={() => scrollToSection(item.id)}
                      className="relative flex items-center justify-center w-16 h-16 rounded-full bg-dark-surface/95 backdrop-blur-md border-[3px] border-primary text-white shadow-lg shadow-primary/30 transition-all"
                      whileTap={{ scale: 0.95 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <item.icon className="text-2xl relative z-10" />
                    </motion.button>
                  </motion.div>
                );
              }
              
              return (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="flex flex-col items-center justify-center gap-1 px-2 py-2 transition-all relative flex-1 max-w-[80px]"
                  whileTap={{ scale: 0.9 }}
                >
                  <item.icon className="text-xl text-white/70" />
                  <span className="text-[10px] font-medium text-white/70 leading-tight whitespace-nowrap">{item.label}</span>
                </motion.button>
              );
            })}
          </div>
        </div>
      </motion.nav>
    </>
  );
};

export default Navbar;
