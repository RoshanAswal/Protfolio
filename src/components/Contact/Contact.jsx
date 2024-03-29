import React from 'react'
import styles from './Contact.module.css';

const Contact = () => {
  return (
    <div className={styles.contactPage}>
      <div className={styles.heading}>Contact Me.</div>
      <div className={styles.info}>
        <div>Feel Free to contact</div>
        <div>aswalroshan2002@gmail.com</div>
        <div onClick={()=>window.location.href='mailto:aswalroshan2002@gmail.com'}>Say Hello!</div>
      </div>
    </div>
  )
}

export default Contact
