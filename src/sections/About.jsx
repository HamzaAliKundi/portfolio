import { portfolioData } from '../data/portfolioData';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
  const { personal, education } = portfolioData;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 0.6, 0.3]);

  return (
    <section id="about" ref={ref} className="relative py-32 pb-24 md:pb-32 px-6 lg:px-8 overflow-hidden bg-dark-bg">
      {/* Gradient Overlay for seamless transition */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-dark-bg to-transparent pointer-events-none z-20"></div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark-bg to-transparent pointer-events-none z-20"></div>
      
      {/* Animated Background - Floating Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          style={{ y: y1, opacity, top: '10%', left: '5%' }}
          className="absolute w-[300px] h-[300px] bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl"
        />
        <motion.div
          style={{ y: y2, opacity, bottom: '10%', right: '5%' }}
          className="absolute w-[250px] h-[250px] bg-gradient-to-br from-accent/20 to-primary/20 rounded-full blur-3xl"
        />
        <motion.div
          style={{ y: y1, opacity, top: '50%', right: '10%' }}
          className="absolute w-[200px] h-[200px] bg-gradient-to-br from-secondary/20 to-accent/20 rounded-full blur-3xl"
        />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-16 flex items-center gap-4"
        >
          <span className="text-primary/50 text-xl md:text-2xl font-mono">01.</span>
          <span className="gradient-text">About Me</span>
        </motion.h2>
        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg text-white/70 leading-relaxed">{personal.bio}</p>
            
            <div className="space-y-4 pt-6">
              <div className="flex items-center gap-4">
                <span className="text-white/50 min-w-[100px]">Location:</span>
                <span className="text-white">{personal.location}</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-white/50 min-w-[100px]">Email:</span>
                <a href={`mailto:${personal.email}`} className="text-primary hover:text-secondary transition-colors">
                  {personal.email}
                </a>
              </div>
              {personal.phone && (
                <div className="flex items-center gap-4">
                  <span className="text-white/50 min-w-[100px]">Phone:</span>
                  <a href={`tel:${personal.phone}`} className="text-primary hover:text-secondary transition-colors">
                    {personal.phone}
                  </a>
                </div>
              )}
            </div>
          </motion.div>

          {education.length > 0 && (
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-semibold mb-6">Education</h3>
              {education.map((edu, index) => (
                <motion.div
                  key={edu.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="glass-effect p-6 rounded-lg"
                >
                  <h4 className="text-xl font-semibold mb-2">{edu.degree}</h4>
                  <p className="text-primary mb-1">{edu.institution}</p>
                  <p className="text-white/60">{edu.duration}</p>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default About;
