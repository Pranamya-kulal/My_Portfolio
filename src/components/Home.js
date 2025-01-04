import React, { useEffect } from 'react';
import './Home.css'; // Ensure you import the updated CSS for styling

const Home = () => {
  useEffect(() => {
    // Create the custom cursor element
    const cursor = document.createElement('div');
    cursor.classList.add('cursor');
    document.body.appendChild(cursor);

    // Move the cursor with mouse
    const moveCursor = (e) => {
      cursor.style.top = `${e.clientY}px`;
      cursor.style.left = `${e.clientX}px`;
    };

    // Event listener for mouse movement
    document.addEventListener('mousemove', moveCursor);

    // Cleanup the cursor on component unmount
    return () => {
      document.removeEventListener('mousemove', moveCursor);
      document.body.removeChild(cursor);
    };
  }, []);

  return (
    <div className="home-container">
      <h2 className="home-title">About Me</h2>
      <p className="home-description">
        Hello! I'm a passionate web developer, creating unique and exciting user experiences with the latest technologies. Let's build something amazing together!
      </p>

      {/* Adding a responsive and animated profile image */}
      <div className="image-container">
        <img
          src="https://via.placeholder.com/600x400"
          alt="Profile"
          className="profile-image"
        />
      </div>

      {/* Social media links with animations */}
      <div className="social-links">
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-icon github">
          GitHub
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon linkedin">
          LinkedIn
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon twitter">
          Twitter
        </a>
      </div>
    </div>
  );
};

export default Home;
