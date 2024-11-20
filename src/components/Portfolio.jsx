import './Styles.css';
import profileImage from '../assets/sarika.jpg';
import { useState, useEffect } from 'react';

function Portfolio() {
    // const texts = [
    //   "Software Developer",
    //   "Problem Solver",
    //   "Frontend Engineer",
    //   "ML Enthusiast",
    //   "Tech Enthusiast"
    // ];
  
    // const [displayText, setDisplayText] = useState('');
    // const [phase, setPhase] = useState('removing');
    // const [currentIndex, setCurrentIndex] = useState(0); 
  
    // useEffect(() => {
    //   let timer;
  
    //   if (phase === 'removing') {
    //     if (displayText.length > 0) {
    //       timer = setTimeout(() => {
    //         setDisplayText(displayText.slice(0, -1)); 
    //       }, 100);
    //     } else {
    //       setPhase('adding');
    //       setCurrentIndex((currentIndex + 1) % texts.length); 
    //     }
    //   } else if (phase === 'adding') {
    //     const newText = texts[currentIndex];
    //     if (displayText.length < newText.length) {
    //       timer = setTimeout(() => {
    //         setDisplayText(newText.slice(0, displayText.length + 1)); 
    //       }, 100);
    //     } else {
    //       setPhase('removing'); 
    //     }
    //   }
  
    //   return () => clearTimeout(timer); 
    // }, [displayText, phase, currentIndex]);
      const texts = [
        "Software Developer",
        "Full Stack Developer",
        "Frontend Engineer",
        "Backend Specialist",
        "Cloud Architect",
        "Tech Enthusiast"
      ];
    
      const [displayText, setDisplayText] = useState('');
      const [phase, setPhase] = useState('removing');
      const [currentIndex, setCurrentIndex] = useState(0);
    
      useEffect(() => {
        let timer;
    
        if (phase === 'removing') {
          if (displayText.length > 0) {
            timer = setTimeout(() => {
              setDisplayText(displayText.slice(0, -1)); // Remove characters one by one
            }, 100);
          } else {
            setPhase('adding');
            setCurrentIndex((currentIndex + 1) % texts.length); // Move to next text
          }
        } else if (phase === 'adding') {
          const newText = texts[currentIndex];
          if (displayText.length < newText.length) {
            timer = setTimeout(() => {
              setDisplayText(newText.slice(0, displayText.length + 1)); // Add characters one by one
            }, 100);
          } else {
            timer = setTimeout(() => {
              setPhase('waiting'); // Add a pause before removing
            }, 1000); // Pause for 1 second
          }
        } else if (phase === 'waiting') {
          timer = setTimeout(() => {
            setPhase('removing'); // Transition to removing after the pause
          }, 1000); // Pause for 1 second
        }
    
        return () => clearTimeout(timer); // Cleanup timer
      }, [displayText, phase, currentIndex]);
    
  return (
    <div className="App">
      <header className="App-header">
        <p className="name">{"{"} SARIKAGADUPUDI {"}"}</p>
        <nav className="navbar">
        <a className="navBarLink">Skills & Experience</a>
        <a className="navBarLink">Education</a>
        <a className="navBarLink">Projects</a>
        <a className="navBarLink">My Resume</a>
        <a className="navBarLink">Contact Me</a>
        </nav>
        <div className='about-container'>
          <span className='about'>
            Hi there !<br/>
            I am<br/> </span>
            <span className='about-name'>Sarika Gadupudi<br/>
            </span>
            {/* <div className="typewriter"> */}
          <p id="text">{displayText}</p>
                {/* </div> */}
        </div>
        <div>
          <img src={profileImage} className='profile-image'/>
        </div>
        <div className="about-content">
        <p>A passionate Software Developer,
        dedicated to mastering the art of coding<br />
        while envisioning and crafting the next transformative innovation.</p>
        </div>
      </header>
    </div>
  );
}

export default Portfolio;

