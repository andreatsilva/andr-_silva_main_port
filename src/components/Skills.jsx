import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const skillCategories = [
    {
      title: "Frontend",
      icon: "🎨",
      color: "#61DAFB",
      skills: [
        { name: "React", level: 85, icon: "⚛️" },
        { name: "Next.js", level: 80, icon: "▲" },
        { name: "JavaScript", level: 90, icon: "🟨" },
        { name: "TypeScript", level: 75, icon: "🔷" },
        { name: "Tailwind CSS", level: 85, icon: "🎨" },
        { name: "HTML/CSS", level: 95, icon: "📄" }
      ]
    },
    {
      title: "Backend",
      icon: "⚙️",
      color: "#68D391",
      skills: [
        { name: "Node.js", level: 85, icon: "🟢" },
        { name: "Python", level: 80, icon: "🐍" },
        { name: "Symfony", level: 75, icon: "🎼" },
        { name: "SQL", level: 80, icon: "🗄️" },
        { name: "REST APIs", level: 85, icon: "🔗" }
      ]
    },
    {
      title: "Tools & Others",
      icon: "🛠️",
      color: "#F687B3",
      skills: [
        { name: "Git", level: 90, icon: "📝" },
        { name: "Linux", level: 85, icon: "🐧" },
        { name: "Docker", level: 70, icon: "🐳" },
        { name: "VS Code", level: 95, icon: "💻" },
        { name: "Debugging", level: 90, icon: "🐛" }
      ]
    }
  ];

  return (
    <motion.section 
      id="skills"
      className="skills-section"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="skills-container">
        <motion.div className="skills-header" variants={itemVariants}>
          <h2 className="section-title">🚀 Technical Skills</h2>
          <div className="title-underline"></div>
          <p className="skills-subtitle">
            Technologies I love working with and the tools that help me build amazing things
          </p>
        </motion.div>

        <div className="skills-grid">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className="skill-category"
              variants={itemVariants}
              whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
            >
              <div className="category-header">
                <span className="category-icon">{category.icon}</span>
                <h3 className="category-title">{category.title}</h3>
              </div>
              
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    className="skill-item"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ 
                      delay: categoryIndex * 0.2 + skillIndex * 0.1,
                      duration: 0.5 
                    }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="skill-info">
                      <span className="skill-icon">{skill.icon}</span>
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    
                    <div className="skill-bar">
                      <motion.div
                        className="skill-progress"
                        style={{ backgroundColor: category.color }}
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ 
                          delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.3,
                          duration: 1,
                          ease: "easeOut"
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div className="skills-footer" variants={itemVariants}>
          <div className="learning-section">
            <h3>🌱 Currently Learning</h3>
            <div className="learning-items">
              {['GraphQL', 'AWS', 'Rust', 'Machine Learning'].map((item, index) => (
                <motion.span
                  key={item}
                  className="learning-item"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 + index * 0.1 }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  {item}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Skills;