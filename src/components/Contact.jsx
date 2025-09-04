import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

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

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormData({ name: '', email: '', message: '' });
  };

  const contactMethods = [
    {
      icon: '📧',
      title: 'Email',
      value: 'andreatsilva@proton.me',
      link: 'mailto:andreatsilva@proton.me',
      color: '#FF6B6B'
    },
    {
      icon: '💼',
      title: 'LinkedIn',
      value: 'Connect with me',
      link: 'https://www.linkedin.com/in/andre-silva',
      color: '#0077B5'
    },
    {
      icon: '🐙',
      title: 'GitHub',
      value: 'andreatsilva',
      link: 'https://github.com/andreatsilva',
      color: '#333'
    },
    
  ];

  return (
    <motion.section 
      id="contact"
      className="contact-section"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="contact-container">
        <motion.div className="contact-header" variants={itemVariants}>
          <h2 className="section-title">💬 Let's Connect</h2>
          <div className="title-underline"></div>
          <p className="contact-subtitle">
            Ready to collaborate on something awesome? Or just want to chat about code, gaming, or the latest tech trends?
          </p>
        </motion.div>

        <div className="contact-content">
          <motion.div className="contact-methods" variants={itemVariants}>
            <h3>Get in touch</h3>
            <div className="methods-grid">
              {contactMethods.map((method, index) => (
                <motion.a
                  key={method.title}
                  href={method.link}
                  target={method.link.startsWith('http') ? '_blank' : '_self'}
                  rel={method.link.startsWith('http') ? 'noopener noreferrer' : ''}
                  className="contact-method"
                  variants={itemVariants}
                  whileHover={{ 
                    y: -5, 
                    boxShadow: "0 15px 30px rgba(0,0,0,0.1)",
                    scale: 1.02
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div 
                    className="method-icon"
                    style={{ backgroundColor: method.color }}
                  >
                    {method.icon}
                  </div>
                  <div className="method-info">
                    <h4>{method.title}</h4>
                    <p>{method.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div className="contact-form-container" variants={itemVariants}>
            <h3>Send me a message</h3>
            <motion.form 
              className="contact-form"
              onSubmit={handleSubmit}
              initial={{ opacity: 0.8 }}
              whileHover={{ opacity: 1 }}
            >
              <div className="form-group">
                <motion.input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  whileFocus={{ scale: 1.02, boxShadow: "0 5px 15px rgba(0,0,0,0.1)" }}
                />
              </div>

              <div className="form-group">
                <motion.input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  whileFocus={{ scale: 1.02, boxShadow: "0 5px 15px rgba(0,0,0,0.1)" }}
                />
              </div>

              <div className="form-group">
                <motion.textarea
                  name="message"
                  placeholder="Your Message"
                  rows="5"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  whileFocus={{ scale: 1.02, boxShadow: "0 5px 15px rgba(0,0,0,0.1)" }}
                />
              </div>

              <motion.button
                type="submit"
                className="submit-button"
                whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0,0,0,0.2)" }}
                whileTap={{ scale: 0.95 }}
                disabled={isSubmitted}
              >
                {isSubmitted ? (
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    ✅ Message Sent!
                  </motion.span>
                ) : (
                  'Send Message 🚀'
                )}
              </motion.button>
            </motion.form>
          </motion.div>
        </div>

        <motion.div className="contact-footer" variants={itemVariants}>
          <div className="fun-fact">
            <h4>🎮 Fun Fact</h4>
            <p>
              When I'm not coding, you'll find me exploring new games, tinkering with Linux configurations, 
              or planning the next over-engineered project that definitely needs a GUI.
            </p>
          </div>
          
          <div className="availability">
            <div className="status-indicator">
              <div className="status-dot available"></div>
              <span>Available for new opportunities</span>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;