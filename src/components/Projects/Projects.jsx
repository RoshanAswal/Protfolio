import React, { useRef,useState } from "react"
import styles from './Projects.module.css';
import img1 from '../../assets/slide1.png';
import img2 from '../../assets/slide2.png';
import img3 from '../../assets/slide3.png';
import Lottie from "react-lottie";
import OG from '../../assets/OG.json';
import EShop from '../../assets/EShop.json';
import Language from '../../assets/Language.json';

const Projects = () => {
  const project1Ref=useRef(null);
  const project2Ref=useRef(null);
  const project3Ref=useRef(null);

  const des1Ref=useRef(null);
  const des2Ref=useRef(null);
  const des3Ref=useRef(null);

  const centerRef=useRef(null);

  const [btnClicked,setBtnClicked]=useState('btn2');

  const Project1Anime = {
    loop: true,
    autoplay: true,
    animationData: OG,
    renderer: 'svg'
  }
  const Project2EShop = {
    loop: true,
    autoplay: true,
    animationData: EShop,
    renderer: 'svg'
  }
  const project3Off={
    loop:true,
    autoplay:true,
    animationData:Language,
    renderer:'svg'
  }

  const slideFunction=(btn)=>{
    hideDes();
    if(btn=='btn1'){
      if(btnClicked=='btn1')return;
      setBtnClicked(btn);
      project1Ref.current.style.marginLeft='940px';
      project2Ref.current.style.margin='0px';
      project3Ref.current.style.margin='0px';

      project1Ref.current.style.opacity='1';
      project2Ref.current.style.opacity='.5';
      project3Ref.current.style.opacity='.5';

    }else if(btn=='btn2'){
      if(btnClicked=='btn2')return;
      project1Ref.current.style.margin='0px';
      project2Ref.current.style.margin='0px';
      project3Ref.current.style.margin='0px';

      project2Ref.current.style.opacity='1';
      project1Ref.current.style.opacity='.5';
      project3Ref.current.style.opacity='.5';

      setBtnClicked(btn);
    }else{
      if(btnClicked=='btn3')return;

      project3Ref.current.style.marginRight='900px';
      project1Ref.current.style.margin='0px';
      project2Ref.current.style.margin='0px';

      project3Ref.current.style.opacity='1';
      project1Ref.current.style.opacity='.5';
      project2Ref.current.style.opacity='.5';
    
      setBtnClicked(btn);
    }
  } 
  const showDes=(project)=>{
    if(project=='project1' && btnClicked=='btn1'){
      centerRef.current.style.zIndex=2;
      centerRef.current.style.background='linear-gradient(107deg, rgb(5, 102, 205) 27.4%, rgb(0, 208, 255) 92.7%)';
      
      des1Ref.current.style.opacity=1;
      des2Ref.current.style.opacity=0;
      des3Ref.current.style.opacity=0;
    }else if(project=='project2' && btnClicked=='btn2'){
      centerRef.current.style.zIndex=2;
      centerRef.current.style.background='linear-gradient(107deg, rgb(5, 102, 205) 27.4%, rgb(0, 208, 255) 92.7%)';

      des1Ref.current.style.opacity=0;
      des2Ref.current.style.opacity=1;
      des3Ref.current.style.opacity=0;
    }else if(project=='project3' && btnClicked=='btn3'){
      centerRef.current.style.zIndex=2;
      centerRef.current.style.background='linear-gradient(107deg, rgb(5, 102, 205) 27.4%, rgb(0, 208, 255) 92.7%)';

      des1Ref.current.style.opacity=0;
      des2Ref.current.style.opacity=0;
      des3Ref.current.style.opacity=1;
    }
  }
  const hideDes=()=>{
    centerRef.current.style.zIndex=-1;
    centerRef.current.style.background='none ';

    des1Ref.current.style.opacity=0;
    des2Ref.current.style.opacity=0;
    des3Ref.current.style.opacity=0;
  }
  const OpenProject=()=>{
    if(btnClicked=='btn1'){
      window.open("https://e-commerce-gamma-ivory-69.vercel.app/");
    }else if(btnClicked=='btn2'){
      window.open("https://www.only-geeks.com/");
    }else if(btnClicked=='btn3'){
      window.open("https://github.com/RoshanAswal/Offensive_Language_Detector");
    }
  }
  return (
    <div className={styles.ProjectPage}>
      <div className={styles.heading}>Projects</div>
      <div className={styles.carousal}>
        <div className={styles.selectors}>
          <button className={styles.btn1} onClick={()=>{slideFunction('btn1')}}><a href="#project1"></a></button>
          <button className={styles.btn2} onClick={()=>{slideFunction('btn2')}}><a href="#project2"></a></button>
          <button className={styles.btn3} onClick={()=>{slideFunction('btn3')}}><a href="#project3"></a></button>
        </div>
        <div className={styles.centerFrame} ref={centerRef} onClick={()=>{OpenProject()}}>
          <div id={styles.des1} ref={des1Ref} onMouseLeave={()=>hideDes()}>
            <h2>E-Commerce</h2>
            <h3>2022</h3>
            <p>
              This is a full-stack e-commerce web application to buy t-shirts for both men and women.
              Website is fully responsive.
              Filters for t-shirts include gender, age, price range, brand, and season, aiding in 
              personalized selection for style, fit, and budget preferences.
            </p>
            <button>Checkout</button>
          </div>
          <div id={styles.des2} ref={des2Ref} onMouseLeave={()=>hideDes()}>
            <h2>Only Geeks</h2>
            <h3>2023</h3>
            <p>
              The online anime quiz web app enables users to engage in community discussions, participate
              in real-time contests, and compete for prizes. It fosters a vibrant community of anime enthusiasts,
              offering a dynamic platform for social interaction and competitive gaming, creating an immersive
              and rewarding experience for fans to connect and enjoy.
            </p>
            <button>Checkout</button>
          </div>
          <div id={styles.des3} ref={des3Ref} onMouseLeave={()=>hideDes()}>
            <h2>Offensive Language Detection</h2>
            <h3>2022</h3>
            <p>
              This WebApp integrates a Machine Learning model for detecting offensive, hate, and negative comments.
              By leveraging classification model in AI, the platform effectively identifies and addresses potentially
              harmful language, promoting respectful and constructive communication.
            </p>
            <button>Checkout</button>
          </div>
        </div>
        <div className={styles.slider}>
          <div className={styles.project1} ref={project1Ref} onMouseEnter={()=>{showDes('project1')}}>
            <Lottie
              options={Project2EShop}
              height={400}
              width={450}
            />
            <h2>E-Commerce</h2>
          </div>
          <div className={styles.project2} ref={project2Ref} onMouseEnter={()=>{showDes('project2')}}>
            <Lottie
              options={Project1Anime}
              height={400}
              width={450}
            />
            <h2>OnlyGeeks-Online Quiz</h2>
          </div>
          <div className={styles.project3} ref={project3Ref} onMouseEnter={()=>{showDes('project3')}}>
            <Lottie
              options={project3Off}
              height={400}
              width={450}
            />
            <h2>Offensive Language Detector</h2>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Projects
