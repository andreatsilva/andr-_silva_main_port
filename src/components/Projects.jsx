import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

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

  const projects = [
    {
      id: 1,
      title: 'PDF Manager',
      description: 'A practical tool for managing PDF files with features like merging, splitting, and editing.',
      longDescription: 'Built with Python and tkinter, this desktop application provides an intuitive interface for common PDF operations. Features include batch processing, password protection, and metadata editing.',
      tech: ['Python', 'tkinter', 'PyPDF2'],
      link: 'https://github.com/andreatsilva/pdf-manager',
      icon: '��',
      color: '#FF6B6B',
      status: 'Completed'
    },
    {
      id: 2,
      title: 'To-Do App',
      description: 'A simple yet effective to-do list application to help manage tasks efficiently.',
      longDescription: 'A full-stack task management application with user authentication, real-time updates, and a clean, responsive interface. Built with modern web technologies.',
      tech: ['React', 'Node.js', 'MongoDB'],
      link: 'https://github.com/andreatsilva/todo-app',
      icon: '✅',
      color: '#4ECDC4',
      status: 'Completed'
    },
    {
      id: 3,
      title: 'C Firewall with GTK UI',
      description: 'An over-engineered project that implements a firewall in C with a graphical user interface using GTK.',
      longDescription: 'A low-level network security tool that demonstrates systems programming skills. Features packet filtering, rule management, and a user-friendly GTK interface for configuration.',
      tech: ['C', 'GTK', 'Linux', 'Networking'],
      link: 'https://github.com/andreatsilva/c-firewall',
      icon: '🔥',
      color: '#45B7D1',
      status: 'In Progress'
    },
    {
      id: 4,
      title: 'Pescamar Website',
      description: 'A Symfony-based website that showcases my early work in web development.',
      longDescription: 'My first professional web development project during internship. A fully functional business website with content management, responsive design, and SEO optimization.',
      tech: ['Symfony', 'PHP', 'MySQL', 'Bootstrap'],
      link: 'https://pescamar.info',
      icon: '🐟',
      color: '#96CEB4',
      status: 'Live'
    }
  ];

  return (
    <motion.section 
      id="projects"
      className="projects-section"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="projects-container">
        <motion.div className="projects-header" variants={itemVariants}>
          <h2 className="section-title">🚀 Notable Projects</h2>
          <div className="title-underline"></div>
          <p className="projects-subtitle">
            A collection of projects that showcase my journey from practical tools to over-engineered solutions
          </p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="project-card"
              variants={itemVariants}
              whileHover={{ y: -10, boxShadow: "0 25px 50px rgba(0,0,0,0.15)" }}
              onClick={() => setSelectedProject(project)}
            >
              <div className="project-header">
                <div 
                  className="project-icon"
                  style={{ backgroundColor: project.color }}
                >
                  {project.icon}
                </div>
                <div className="project-status">
                  <span className={`status-badge ${project.status.toLowerCase().replace(' ', '-')}`}>
                    {project.status}
                  </span>
                </div>
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-tech">
                  {project.tech.slice(0, 3).map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="tech-more">+{project.tech.length - 3}</span>
                  )}
                </div>
              </div>

              <div className="project-footer">
                <motion.button
                  className="project-button"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Details
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div className="projects-cta" variants={itemVariants}>
          <p>Want to see more of my work?</p>
          <motion.a
            href="https://github.com/andreatsilva"
            target="_blank"
            rel="noopener noreferrer"
            className="github-cta"
            whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0,0,0,0.2)" }}
            whileTap={{ scale: 0.95 }}
          >
            <span>🌱</span>
            Explore my GitHub garden
          </motion.a>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="project-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="project-modal"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="modal-header">
                <div 
                  className="modal-icon"
                  style={{ backgroundColor: selectedProject.color }}
                >
                  {selectedProject.icon}
                </div>
                <div>
                  <h3>{selectedProject.title}</h3>
                  <span className={`status-badge ${selectedProject.status.toLowerCase().replace(' ', '-')}`}>
                    {selectedProject.status}
                  </span>
                </div>
                <button 
                  className="modal-close"
                  onClick={() => setSelectedProject(null)}
                >
                  ×
                </button>
              </div>

              <div className="modal-content">
                <p>{selectedProject.longDescription}</p>
                
                <div className="modal-tech">
                  <h4>Technologies Used:</h4>
                  <div className="tech-list">
                    {selectedProject.tech.map((tech, index) => (
                      <span key={index} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <motion.a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="modal-link"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {selectedProject.link.includes('github') ? '📂 View Code' : '🌐 Visit Site'}
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
};

export default Projects;