import { portfolioData } from '../data/portfolioData';
import { motion } from 'framer-motion';
import Scene3D from '../components/Scene3D';
import TypingText from '../components/TypingText';

const Hero = () => {
  const { personal, social } = portfolioData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20 pb-12 md:pb-16 bg-dark-bg">
      {/* 3D Background Scene */}
      <div className="absolute inset-0 opacity-30">
        <Scene3D />
      </div>

      {/* Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-[500px] h-[500px] bg-gradient-to-br from-primary/30 to-secondary/30 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{ top: '-200px', left: '-200px' }}
        />
        <motion.div
          className="absolute w-[400px] h-[400px] bg-gradient-to-br from-secondary/30 to-accent/30 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
          }}
          style={{ bottom: '-150px', right: '-150px' }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center"
        >
          <div className="text-center lg:text-left">
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg md:text-xl text-white/70 mb-2"
            >
              Hello, I'm
            </motion.p>
            <motion.h1
              variants={itemVariants}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-3 sm:mb-4"
            >
              <span className="gradient-text">
                <TypingText text={personal.name} speed={150} />
              </span>
            </motion.h1>
            <motion.h2
              variants={itemVariants}
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/60 mb-4 sm:mb-6 font-light"
            >
              {personal.jobTitle}
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-sm sm:text-base md:text-lg text-white/70 mb-6 sm:mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed px-2 sm:px-0"
            >
              {personal.bio}
            </motion.p>
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start mb-6 sm:mb-8"
            >
              <motion.a
                href="#projects"
                className="px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base bg-gradient-to-r from-primary to-secondary rounded-lg font-semibold text-white shadow-lg shadow-primary/50 hover:shadow-primary/70 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                View My Work
              </motion.a>
              <motion.a
                href="https://easybidder.site"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base border-2 border-primary rounded-lg font-semibold text-white hover:bg-primary/10 transition-all duration-300 relative group"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  EasyBidder
                  <span className="text-[10px] sm:text-xs bg-accent/20 text-accent px-1.5 sm:px-2 py-0.5 rounded-full border border-accent/50">
                    My Product
                  </span>
                </span>
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-accent rounded-full animate-pulse"></span>
              </motion.a>
              <motion.a
                href="#contact"
                className="px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base border-2 border-primary rounded-lg font-semibold text-white hover:bg-primary/10 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </motion.a>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="flex gap-4 sm:gap-6 justify-center lg:justify-start"
            >
              {social.github && (
                <motion.a
                  href={social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-white/5 backdrop-blur-sm flex items-center justify-center text-white hover:bg-primary/20 transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label="GitHub"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </motion.a>
              )}
              {social.linkedin && (
                <motion.a
                  href={social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-white/5 backdrop-blur-sm flex items-center justify-center text-white hover:bg-primary/20 transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label="LinkedIn"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </motion.a>
              )}
            </motion.div>
          </div>

          <motion.div
            variants={itemVariants}
            className="flex justify-center lg:justify-end"
          >
            <motion.div
              className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 group"
              style={{ rotate: 0 }}
              whileHover={{ 
                scale: 1.08,
                y: -5,
              }}
              transition={{
                duration: 0.3,
                ease: 'easeOut',
              }}
            >
              <div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-secondary to-accent p-1"
                style={{ transform: 'rotate(0deg)' }}
              >
                <div className="w-full h-full rounded-full bg-dark-bg flex items-center justify-center overflow-hidden">
                  {personal.avatar ? (
                    <img 
                      src={personal.avatar} 
                      alt={personal.name} 
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      style={{ transform: 'rotate(0deg)' }}
                    />
                  ) : (
                    <div className="text-6xl font-bold gradient-text">
                      {personal.name.split(' ').map(n => n[0]).join('')}
                    </div>
                  )}
                </div>
              </div>
              <div
                className="absolute inset-0 rounded-full border-4 border-primary/20 transition-all duration-300 group-hover:scale-110 group-hover:opacity-60"
                style={{ transform: 'rotate(0deg)' }}
              />
              <div
                className="absolute inset-0 rounded-full border-2 border-secondary/30 transition-all duration-300 group-hover:scale-105 group-hover:opacity-50"
                style={{ transform: 'rotate(0deg)' }}
              />
              <div
                className="absolute inset-0 rounded-full transition-all duration-300 group-hover:shadow-[0_0_50px_rgba(99,102,241,0.8),0_0_80px_rgba(139,92,246,0.6)]"
                style={{ transform: 'rotate(0deg)' }}
              />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Stats Section - Integrated into content flow */}
        <motion.div
          variants={itemVariants}
          className="mt-12 md:mt-16 lg:mt-20 w-full"
        >
          <div className="flex flex-wrap sm:flex-nowrap gap-3 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-12 items-center justify-center glass-effect px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 py-3 sm:py-4 md:py-5 lg:py-6 rounded-lg sm:rounded-xl md:rounded-2xl backdrop-blur-md border border-white/10 max-w-4xl mx-auto">
            <motion.div
              className="text-center flex-1 sm:flex-none min-w-[70px] sm:min-w-[80px] md:min-w-[100px]"
              whileHover={{ scale: 1.05, y: -2 }}
              transition={{ duration: 0.2 }}
            >
              <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold gradient-text leading-none">3+</div>
              <div className="text-[10px] sm:text-xs md:text-sm lg:text-base text-white/60 mt-0.5 sm:mt-1 md:mt-2 leading-tight">Years Experience</div>
            </motion.div>
            <div className="w-px h-6 sm:h-8 md:h-10 lg:h-12 bg-white/20 hidden sm:block"></div>
            <motion.div
              className="text-center flex-1 sm:flex-none min-w-[70px] sm:min-w-[80px] md:min-w-[100px]"
              whileHover={{ scale: 1.05, y: -2 }}
              transition={{ duration: 0.2 }}
            >
              <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold gradient-text leading-none">20+</div>
              <div className="text-[10px] sm:text-xs md:text-sm lg:text-base text-white/60 mt-0.5 sm:mt-1 md:mt-2 leading-tight">Projects Done</div>
            </motion.div>
            <div className="w-px h-6 sm:h-8 md:h-10 lg:h-12 bg-white/20 hidden sm:block"></div>
            <motion.div
              className="text-center flex-1 sm:flex-none min-w-[70px] sm:min-w-[80px] md:min-w-[100px]"
              whileHover={{ scale: 1.05, y: -2 }}
              transition={{ duration: 0.2 }}
            >
              <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold gradient-text leading-none">100%</div>
              <div className="text-[10px] sm:text-xs md:text-sm lg:text-base text-white/60 mt-0.5 sm:mt-1 md:mt-2 leading-tight">Client Satisfaction</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
