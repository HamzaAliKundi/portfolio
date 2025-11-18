import { portfolioData } from '../data/portfolioData';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  FaReact,
  FaNode,
  FaPython,
  FaGitAlt,
  FaServer,
  FaCodeBranch,
  FaLinux,
} from 'react-icons/fa';
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiStripe,
  SiClerk,
  SiGithubactions,
  SiNginx,
  SiSelenium,
  SiCloudinary,
  SiSendgrid,
  SiTensorflow,
} from 'react-icons/si';

// Icon mapping
const iconMap = {
  FaReact,
  FaNode,
  FaPython,
  FaGitAlt,
  FaServer,
  FaCodeBranch,
  FaLinux,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiStripe,
  SiClerk,
  SiGithubactions,
  SiNginx,
  SiSelenium,
  SiCloudinary,
  SiSendgrid,
  SiTensorflow,
};

const Skills = () => {
  const { skills } = portfolioData;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const getIcon = (iconName) => {
    const IconComponent = iconMap[iconName];
    return IconComponent || null;
  };

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const x1 = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const x2 = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.2, 0.5, 0.2]);

  return (
    <section id="skills" ref={ref} className="relative py-32 pb-24 md:pb-32 px-6 lg:px-8 overflow-hidden bg-dark-bg">
      {/* Gradient Overlay for seamless transition */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-dark-bg to-transparent pointer-events-none z-20"></div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark-bg to-transparent pointer-events-none z-20"></div>
      
      {/* Animated Background - Grid Pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          style={{ x: x1, opacity, top: '20%', left: '-10%' }}
          className="absolute w-[400px] h-[400px] bg-gradient-to-br from-primary/15 to-transparent rounded-full blur-3xl"
        />
        <motion.div
          style={{ x: x2, opacity, bottom: '20%', right: '-10%' }}
          className="absolute w-[350px] h-[350px] bg-gradient-to-br from-secondary/15 to-transparent rounded-full blur-3xl"
        />
        <motion.div
          style={{ x: x1, opacity, top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
          className="absolute w-[300px] h-[300px] bg-gradient-to-br from-accent/15 to-transparent rounded-full blur-3xl"
        />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-16 flex items-center gap-4"
        >
          <span className="text-primary/50 text-xl md:text-2xl font-mono">02.</span>
          <span className="gradient-text">Skills</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="glass-effect p-8 rounded-xl hover:border-primary/50 transition-all duration-300"
            >
              <h3 className="text-2xl font-semibold mb-6 text-primary">{category.category}</h3>
              <div className="flex flex-wrap gap-3">
                {category.items.map((skill, skillIndex) => {
                  const skillName = typeof skill === 'string' ? skill : skill.name;
                  const skillIcon = typeof skill === 'object' ? skill.icon : null;
                  const IconComponent = skillIcon ? getIcon(skillIcon) : null;

                  return (
                    <motion.div
                      key={skillName}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.3, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="px-4 py-2 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg text-sm font-medium border border-primary/30 hover:border-primary/60 transition-all flex items-center gap-2"
                    >
                      {IconComponent && <IconComponent className="text-lg" />}
                      <span>{skillName}</span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
