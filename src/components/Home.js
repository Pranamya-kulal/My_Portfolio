import React, { useState, useEffect, useRef } from "react";
import "./Home.css";
import Lottie from "lottie-react";
import animationData from "../animations/Animation - 1736402525089.json";

// Icons
import { 
  FaHtml5, FaCss3Alt, FaJsSquare, FaReact, 
  FaNodeJs, FaDatabase, FaCode,
  FaGithub, FaLinkedin, FaTwitter, FaEnvelope 
} from "react-icons/fa";

const TypingEffect = () => {
  const texts = [
    "Technology Enthusiast",
    "Developer", 
    "Problem Solver"
  ];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => 
        (prevIndex + 1) % texts.length
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="typing-container">
      <p 
        key={currentTextIndex} 
        className="typing-effect"
        style={{
          animation: `typing 2s steps(40, end), 
                     blink 0.75s step-end infinite`
        }}
      >
        {texts[currentTextIndex]}
      </p>
    </div>
  );
};

const Home = () => {
  const educationSectionRef = useRef(null);
  const [isEducationVisible, setIsEducationVisible] = useState(false);

  // Education Scroll Animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsEducationVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1 // Trigger when 10% of section is visible
      }
    );

    const currentSection = educationSectionRef.current;
    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);

  // Education Data
  const educationData = [
    {
      degree: "Bachelor of Engineering in Computer Science",
      institution: "Sahyadri College of Engineering and Management",
      period: "2022 - Present",
      description: "Studying computer science with an emphasis on modern technologies and practical problem-solving.",
      icon: "🎓"
    },
    {
      degree: "Pre University",
      institution: "St.Agnes PU College", 
      period: "2020 - 2022",
      description: "Completed pre-university studies with strong academic performance and foundational knowledge.",
      icon: "📚"
    },
    {
      degree: "High School",
      institution: "St.Agnes Cbse School",
      period: "2017 - 2020", 
      description: "Completed secondary education with a comprehensive academic background.",
      icon: "🏫"
    }
  ];

  return (
    <div className="home-container">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-text-column">
          <div className="hero-content">
            <h1 className="slide-in">Hey, I'm Pranamya!</h1>
            <TypingEffect />
            
            <div className="social-links">
              {[
                { Icon: FaGithub, link: "https://github.com/Pranamya-kulal" },
                { Icon: FaLinkedin, link: "https://www.linkedin.com/in/pranamya-120a12264/" },
                
                { Icon: FaEnvelope, link: "mailto:pranamya444@gmail.com" }
              ].map(({ Icon, link }) => (
                <a 
                  key={link}
                  href={link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="social-icon"
                >
                  <Icon size={30} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="hero-animation-column">
          <Lottie 
            animationData={animationData}
            loop={true}
            autoplay={true}
            className="hero-lottie-animation"
          />
        </div>
      </div>

      {/* Skills Section */}
      <div className="skills-section">
        <h2 className="skills-header">Tech Skills</h2>
        <div className="skills-grid">
          {[
            { Icon: FaHtml5, name: "HTML5", color: "#E44D26" },
            { Icon: FaCss3Alt, name: "CSS3", color: "#2965F1" },
            { Icon: FaJsSquare, name: "JavaScript", color: "#F7DF1E" },
            { Icon: FaReact, name: "React", color: "#61DBFB" },
            { Icon: FaNodeJs, name: "Node.js", color: "#68A063" },
            { Icon: FaDatabase, name: "Databases", color: "#F4A300" },
            { Icon: FaCode, name: "Programming", color: "lightblue" }
          ].map(({ Icon, name, color }) => (
            <div 
              key={name} 
              className="skill-card"
              style={{ '--skill-color': color }}
            >
              <Icon className="skill-icon" />
              <span className="skill-name">{name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Education Section */}
      <div 
        ref={educationSectionRef} 
        className="education-section"
      >
        <h2 className="education-header">My Educational Journey</h2>
        <div className="education-timeline">
          {educationData.map((edu, index) => (
            <div 
              key={index} 
              className={`education-item ${isEducationVisible ? 'visible' : ''}`}
            >
              <div className="education-content">
                <div className="education-icon">{edu.icon}</div>
                <h3>{edu.degree}</h3>
                <p>{edu.institution}</p>
                <span>{edu.period}</span>
                <div className="education-description">{edu.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
  
export default Home;
