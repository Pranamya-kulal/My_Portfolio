import React, { useState, useEffect } from 'react';
import Lottie from 'lottie-react';
import emailjs from 'emailjs-com';
import { motion } from 'framer-motion'; // Add framer-motion
import contactAnimation from '../animations/Animation - 1736524454179.json';
import './Contact.css';

// Initialize EmailJS
emailjs.init('WlE3Lo-OvyV_p5fSs');

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSent, setIsSent] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleEmailChange = (e) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);
    setIsValidEmail(validateEmail(inputEmail));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!isValidEmail) {
      alert('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);

    try {
      const result = await emailjs.send(
        'service_tbs8tpb',  // Service ID
        'template_h52ywc2', // Template ID
        {
          from_name: name,
          to_name: 'Pranamya',
          message: message,
          from_email: email,
        }
      );

      console.log('SUCCESS!', result.status, result.text);
      setIsSent(true);
      
      // Reset form
      setName('');
      setEmail('');
      setMessage('');
      setIsValidEmail(true);

      // Hide success message after 3 seconds
      setTimeout(() => setIsSent(false), 3000);
    } catch (error) {
      console.error('FAILED...', error);
      alert('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Animation variants for form
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <motion.div 
      className="contact-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div 
        className="contact-left"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h2 
          className="contact-header"
          variants={itemVariants}
        >
          Contact Me
        </motion.h2>
        
        {isSent && (
          <motion.p 
            className="success-message"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            Your message has been sent successfully!
          </motion.p>
        )}
        
        <motion.form 
          onSubmit={handleSubmit} 
          className="contact-form"
          variants={containerVariants}
        >
          <motion.div className="form-field" variants={itemVariants}>
            <label htmlFor="name" className="label">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="input"
              required
              minLength={2}
            />
          </motion.div>

          <motion.div className="form-field" variants={itemVariants}>
            <label htmlFor="email" className="label">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              className={`input ${!isValidEmail && email ? 'invalid-email' : ''}`}
              required
            />
            {!isValidEmail && email && (
              <p className="email-error">Please enter a valid email address</p>
            )}
          </motion.div>

          <motion.div className="form-field" variants={itemVariants}>
            <label htmlFor="message" className="label">Message</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows="6"
              className="textarea"
              required
              minLength={10}
            ></textarea>
          </motion.div>

          <motion.button
            type="submit"
            className="submit-btn"
            disabled={!name || !isValidEmail || !message || isSubmitting}
            variants={itemVariants}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </motion.button>
        </motion.form>
      </motion.div>
      
      <div className="contact-right">
        <Lottie 
          animationData={contactAnimation}
          loop={true}
          className="contact-animation"
        />
      </div>
    </motion.div>
  );
};

export default Contact;
