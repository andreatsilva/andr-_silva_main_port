import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.section 
      id="hero"
      className="hero"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="hero-content">
        <motion.div className="hero-text" variants={itemVariants}>
          <motion.h1 
            className="hero-title"
            variants={itemVariants}
          >
            Hi, I'm <span className="highlight">André Silva</span>
          </motion.h1>
          
          <motion.h2 
            className="hero-subtitle"
            variants={itemVariants}
          >
            Full-Stack Developer
          </motion.h2>
          
          <motion.p 
            className="hero-description"
            variants={itemVariants}
          >
            From fixing machines to building digital experiences.
            <br />
            I create clean, functional solutions with a touch of creativity.
          </motion.p>
          
          <motion.div 
            className="hero-buttons"
            variants={itemVariants}
          >
            <motion.button
              className="cta-button primary"
              onClick={scrollToAbout}
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0,0,0,0.2)" }}
              whileTap={{ scale: 0.95 }}
            >
              Explore My Work
            </motion.button>
            
            <motion.a
              href="https://github.com/andreatsilva"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View GitHub
            </motion.a>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="hero-visual"
          variants={itemVariants}
        >
          <motion.div 
            className="code-block"
            variants={floatingVariants}
            animate="animate"
          >
            <div className="code-header">
              <div className="code-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <span className="code-title">andre.js</span>
            </div>
            <div className="code-content">
              <div className="code-line">
                <span className="code-keyword">const</span> 
                <span className="code-variable"> developer</span> 
                <span className="code-operator"> = </span>
                <span className="code-string">{`{`}</span>
              </div>
              <div className="code-line indent">
                <span className="code-property">name:</span> 
                <span className="code-string">'André Silva'</span>,
              </div>
              <div className="code-line indent">
                <span className="code-property">skills:</span> 
                <span className="code-string">['React', 'Node.js', 'Python']</span>,
              </div>
              <div className="code-line indent">
                <span className="code-property">passion:</span> 
                <span className="code-string">'Building cool stuff'</span>,
              </div>
              <div className="code-line indent">
                <span className="code-property">coffee:</span> 
                <span className="code-boolean">true</span>
              </div>
              <div className="code-line">
                <span className="code-string">{`};`}</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="floating-elements"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            {['💻', '🚀', '⚡', '🎮', '🌱'].map((emoji, index) => (
              <motion.span
                key={index}
                className={`floating-emoji emoji-${index}`}
                animate={{
                  y: [-20, 20, -20],
                  x: [-10, 10, -10],
                  rotate: [-5, 5, -5]
                }}
                transition={{
                  duration: 3 + index * 0.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.2
                }}
              >
                {emoji}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </div>
      
      <motion.div 
        className="scroll-indicator"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span>Scroll to explore</span>
        <div className="scroll-arrow">↓</div>
      </motion.div>
    </motion.section>
  );
};

export default Hero;