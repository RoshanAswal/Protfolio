import styles from './App.module.css';
import Edu from './components/Education/Edu';
import Exp from './components/Experience/Exp';
import Intro from './components/Intro/Intro';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import { useState,useEffect } from 'react';
import Hamburger from 'hamburger-react';

function App() {
  const [activeLink,setActiveLink]=useState('');
  const [open,setOpen]=useState(false);
  const [scrolled,setScrolled]=useState(false);

  useEffect(() => {

    window.addEventListener("scroll", () => {
      const height=window.scrollY;
      if(height>200){
        setScrolled(true);
      }else{
        setScrolled(false);
      }

      if(height>2500){
        setActiveLink('Contact');
      }else if(height>1800){
        setActiveLink('Experience');
      }else if(height>1200){
        setActiveLink('Projects');
      }else if(height>400){
        setActiveLink('Education');
      }else{
        setActiveLink('');
      }
    })
  })

  return (
    <div className={styles.App}>
      <div className={styles.wrapper}>
        <div className={styles.box}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div className={styles.stickyNav} id={scrolled?styles.scroll:''}>
        <div className={styles.hamburger}>
          <Hamburger toggled={open} toggle={setOpen}/>
        </div>
        <div className={open?styles.mobileNav:styles.hideNav}>
          <ul>
            <li>
              <a>Education</a>
            </li>
            <li>
              <a>Projects</a>
            </li>
            <li>
              <a>Experience</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
          </ul>
        </div>
        <div className={styles.Navbar}>
          <div>
            <h2>Protfolio</h2>
          </div>
          <nav>
            <a className={activeLink==='Education'?styles.activeLink1:''}>Education</a>
            <a className={activeLink==='Projects'?styles.activeLink2:''}>Projects</a>
            <a className={activeLink==='Experience'?styles.activeLink3:''}>Experience</a>
            <a className={activeLink==='Contact'?styles.activeLink4:''}>Contact</a>
            <span></span>
          </nav>
        </div>
      </div>

      <div id='#Intro' className={styles.Intro}>
        <Intro />
      </div>
      <div id='#Education' className={styles.Education}>
        <Edu />
      </div>
      <div id='#Projects' className={styles.Projects}>
        <Projects />
      </div>
      <div id='#Experience' className={styles.Experience}>
        <Exp />
      </div>
      <div id='#Contact' className={styles.Contact}>
        <Contact />
      </div>
    </div>
  )
}

export default App
