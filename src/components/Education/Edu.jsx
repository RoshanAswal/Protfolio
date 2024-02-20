import React from "react";
import { useState } from "react";
import styles from './Edu.module.css';
import { EducationDetails } from "./EduDetails";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Lottie from "react-lottie";
import EduAnimation from '../../assets/Animation - 1707723188970.json';


const Edu = () => {

  const handleMouseMove = (e) => {
    const x = e.pageX - e.target.offsetLeft;
    const y = e.pageY - e.target.offsetTop;
  
    e.target.style.setProperty('--x', x + 'px');
    e.target.style.setProperty('--y', y + 'px');
  }
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: EduAnimation,
    renderer: 'svg'
  }

  return (
    <div className={styles.EducationPage}>
      <div className={styles.heading}>
        <h2>Education</h2>
      </div>
      <div className={styles.EduCards}>
        <div className={styles.cardInfo}>
          {
            EducationDetails.map((edu,index)=>{
              const {title,detail,Grade,time,icon}=edu;
              return(
                <div key={index} className={styles.EduCard} onMouseMove={(e)=>handleMouseMove(e)}>
                  <div id={styles.eduIcon}>
                    <FontAwesomeIcon icon={icon}  id={styles.icon}/>
                  </div>        
                  <br />          
                  <div id={styles.eduTitleInfo}>
                    <h2>{title}</h2>
                    <h5>{time}</h5>
                  </div>
                  <br />
                  <div id={styles.eduDetailInfo}>
                    <p>{detail}</p>
                    <br />
                    <h4>Grade - {Grade}</h4>
                  </div>
                </div>
              )
            })
          }
        </div>
        <div>
          <Lottie
            options={defaultOptions}
            height={350}
            width={400}
          />
        </div>
      </div>
    </div>
  )
}

export default Edu
