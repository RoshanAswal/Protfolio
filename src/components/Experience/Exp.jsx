import React from 'react'
import styles from './Exp.module.css';
import employer1 from '../../assets/skizaa.png';

const Exp = () => {
  return (
    <div className={styles.expPage}>
      <div className={styles.heading}>Experience</div>
      <div className={styles.expDiv}>
        <div id={styles.exp1}>
          <button className={styles.employer}>
            <img src={employer1}/>
          </button>
          <div className={styles.des}>
            <h2>Skizaa</h2>
            <h3>Designation - Frontend Intern</h3>
            <h4>Duration - 2 months</h4>
            <p>
              Created a Forms-like survey tool enabling clients to craft customized questions (rating, ranking, short, multiple
              choice) for user responses.
              Implemented drag-and-drop functionality for form customization, enhancing user experience and Reduced form creation
              time by 50% through optimized API calls, and addressed frontend bugs for improved organizational efficiency.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Exp
