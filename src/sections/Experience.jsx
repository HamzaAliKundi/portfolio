import { portfolioData } from '../data/portfolioData';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Experience = () => {
  const { experience } = portfolioData;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.25, 0.5, 0.25]);

  return (
    <section id="experience" ref={ref} className="relative py-32 pb-24 md:pb-32 px-6 lg:px-8 overflow-hidden bg-dark-bg">
      {/* Gradient Overlay for seamless transition */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-dark-bg to-transparent pointer-events-none z-20"></div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark-bg to-transparent pointer-events-none z-20"></div>
      
      {/* Animated Background - Timeline Style */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          style={{ y: y1, opacity, top: '0%', left: '10%' }}
          className="absolute w-[350px] h-[350px] bg-gradient-to-br from-primary/15 to-secondary/15 rounded-full blur-3xl"
        />
        <motion.div
          style={{ y: y2, opacity, bottom: '0%', right: '10%' }}
          className="absolute w-[300px] h-[300px] bg-gradient-to-br from-secondary/15 to-accent/15 rounded-full blur-3xl"
        />
        <motion.div
          style={{ y: y1, opacity, top: '30%', right: '30%' }}
          className="absolute w-[250px] h-[250px] bg-gradient-to-br from-accent/15 to-primary/15 rounded-full blur-3xl"
        />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-16 flex items-center gap-4"
        >
          <span className="text-primary/50 text-xl md:text-2xl font-mono">04.</span>
          <span className="gradient-text">Experience</span>
        </motion.h2>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent" />
          
          <div className="space-y-12">
            {experience.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative pl-20"
              >
                <div className="absolute left-6 w-4 h-4 rounded-full bg-primary border-4 border-dark-bg" />
                
                <div className="glass-effect p-6 rounded-xl hover:border-primary/50 transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-semibold mb-1">{exp.position}</h3>
                      <p className="text-primary text-lg">{exp.company}</p>
                    </div>
                    <div className="text-white/60 mt-2 md:mt-0">
                      <p>{exp.duration}</p>
                      <p className="text-sm">{exp.location}</p>
                    </div>
                  </div>
                  <p className="text-white/70 leading-relaxed">{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

