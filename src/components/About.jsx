import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };
  

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.section 
      id="about"
      className="about-section"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="about-container">
        <motion.div className="about-header" variants={itemVariants}>
          <h2 className="section-title">💻 About Me</h2>
          <div className="title-underline"></div>
        </motion.div>

        <div className="about-content">
          <motion.div className="about-story" variants={itemVariants}>
            <motion.div 
              className="story-card"
              variants={cardVariants}
              whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
            >
              <div className="story-icon">🔧</div>
              <p>
                I'm <strong>André Silva</strong>, a full-stack developer who started out fixing Linux, Windows, and Mac machines, only to realize I enjoyed building things <em>inside</em> the machines a lot more.
              </p>
            </motion.div>

            <motion.div 
              className="story-card"
              variants={cardVariants}
              whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
            >
              <div className="story-icon">🚀</div>
              <p>
                Since 2018, I've gone from shipping Symfony websites during my internship (yes, <a href="https://pescamar.info" target="_blank" rel="noopener noreferrer" className="highlight-link">pescamar.info</a> is still alive 🐟) to tinkering with Next.js, React, Node.js, and Python projects that range from practical tools to the slightly over-engineered (a C firewall with a GTK UI, anyone?).
              </p>
            </motion.div>
          </motion.div>

          <motion.div className="about-personality" variants={itemVariants}>
            <h3>I like to think of myself as the kind of developer who:</h3>
            <div className="personality-grid">
              {[
                { icon: "📝", text: "Treats Git commits like diary entries (future me will thank me… hopefully)." },
                { icon: "🐛", text: "Can debug code and printers (though one of these is far more fun)." },
                { icon: "✨", text: "Believes a clean UI is just as important as a clean terminal." }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="personality-item"
                  variants={cardVariants}
                  whileHover={{ scale: 1.05, rotate: 1 }}
                >
                  <span className="personality-icon">{item.icon}</span>
                  <p>{item.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div className="about-skills-preview" variants={itemVariants}>
            <h3 className="skills-title">🔧 What I bring to the table:</h3>
            <div className="skills-grid">
              {[
                { category: "Backend", skills: "Symfony, Node.js, SQL", icon: "⚙️" },
                { category: "Frontend", skills: "React, Next.js, Tailwind", icon: "🎨" },
                { category: "Experience", skills: "Real-world IT background", icon: "💼" },
                { category: "Projects", skills: "Growing GitHub garden 🌱", icon: "🚀" }
              ].map((skill, index) => (
                <motion.div
                  key={index}
                  className="skill-card"
                  variants={cardVariants}
                  whileHover={{ y: -3, boxShadow: "0 15px 30px rgba(0,0,0,0.1)" }}
                >
                  <div className="skill-icon">{skill.icon}</div>
                  <h4>{skill.category}</h4>
                  <p>{skill.skills}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div className="about-goals" variants={itemVariants}>
            <motion.div 
              className="goals-card"
              variants={cardVariants}
              whileHover={{ scale: 1.02, boxShadow: "0 25px 50px rgba(0,0,0,0.1)" }}
            >
              <h3>⚡ What I'm looking for:</h3>
              <p>
                Junior-level <strong>Full-Stack</strong> or <strong>Back End</strong> roles where I can keep solving interesting problems, push code that ships, and work with a team that values both best practices and good humor.
              </p>
              <p className="fun-note">
                And if you're here just to peek at my projects: don't worry, I do the same when I'm recruiting people for co-op gaming squads. 🎮
              </p>
              
              <motion.a
                href="https://github.com/andreatsilva"
                target="_blank"
                rel="noopener noreferrer"
                className="github-button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>🔗</span>
                Check out my GitHub
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;