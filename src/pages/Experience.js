import DisplayExperience from "../components/DisplayExperience";
import styles from "../styling.css";

function Experience()
{
    return(
     
      <div className="proj">
        <section id="experience">
        <h1 className="Experience">Experience</h1>
        <div className="projects">
        <DisplayExperience text="Made A live weather mobile app specially for skiers."
         url="https://642650a68b6d751450f3f07b--super-raindrop-9e6871.netlify.app/"
         image="Weatherapp.jpeg"
    
         />

        <DisplayExperience text="Made Amazon Clone using react "
        image="amazon.png"
        url="https://clone-b556c.web.app"
        />


      <DisplayExperience text="Made a full working website which offers  education "
        image="education.png"
        url="url:website"
       />

         <DisplayExperience text="Made a text adventure game using OOP in JAVA."
         url="https://github.com/Azan10/Java-OOP-Textgame"
        image="game.png"
        
         />

       
   

    
        <div className="nextline">
       
        <DisplayExperience text="Worked as lab demonstrator helping students in programming exercices at QMUL university."
        url="https://www.glassdoor.co.uk/Hourly-Pay/Queen-Mary-University-of-London-Demonstrator-Hourly-Pay-E310484_D_KO32,44.htm"
        image="teaching.jpg"
       
       

      
       
       
       
         
         
        />
        </div>
        </div>
        </section>
      </div>
      
    )
}

export default Experience;