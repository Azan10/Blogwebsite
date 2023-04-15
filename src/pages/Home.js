import Displayinfo from "../components/Displayinfo";
import styles from "../styling.css";

function Home() {
  return (
    <div>
      <section id="intro">
     
      <Displayinfo className="info-box" />
      <h1 className="myname">I'm Azan a,</h1>
      <h1 className="course">Computer Science Student</h1>
      <p className="myinfo">"As a second-year Computer Science student at the prestigious Queen Mary University, 
      I am committed to excelling in both academics and extracurricular activities. In addition to my studies, 
      I have also been actively involved in sports and am proud to have made valuable contributions to the QMUL coding society and 
      QMUL data science club. Through my participation in these clubs, I have gained valuable knowledge and skills beyond the 
      traditional classroom setting. The advancements in Artificial Intelligence have further fueled my motivation to learn and 
      explore new programming languages and frameworks. I am eager to continue pushing my boundaries and expanding my knowledge in 
      this exciting field".
      </p>
      <hr></hr>
      
      </section>
    
    </div>
   
  );
 
}

export default Home;
