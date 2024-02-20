import React from "react"
import styles from './Intro.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram,faLinkedinIn,faGithub } from "@fortawesome/free-brands-svg-icons";

const Intro = () => {
  return (
    <div className={styles.IntroPage}>
      <div className={styles.personalInfo}>
        <h2>Hi, I'm Roshan Aswal</h2>
        <h3>Full Stack Developer and ML Enthusiast</h3>
      </div>
      <div className={styles.socialMedia}>
        <a href="https://github.com/RoshanAswal" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub}/>
        </a>
        <a href="https://www.linkedin.com/in/roshan-aswal/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedinIn}/>
        </a>
        <a href="https://www.instagram.com/r_dev02/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram}/>
        </a>
      </div>
      <div className={styles.IntroBackground}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#3886eb" fillOpacity="1" 
            d="M0,224L48,186.7C96,149,192,75,288,64C384,53,480,107,576,149.3C672,192,768,224,864,234.7C960,245,1056,235,1152,
            240C1248,245,1344,267,1392,277.3L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,
            320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
          </path>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#117ac1" fillOpacity="1" 
            d="M0,160L80,181.3C160,203,320,245,480,245.3C640,245,800,203,960,202.7C1120,203,1280,245,1360,266.7L1440,288L1440,
            320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z">
          </path>
        </svg>
        <img src="../../../public/bg.png"></img>
      </div>
    </div>
  )
}

export default Intro
