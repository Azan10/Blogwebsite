import styles from "../styling.css";

function Skills()
{ return(
    <section id="skills">
    <div>
    <h1 className="skills">Skills</h1>
    <img className="skillsimage" src="skills.png" alt={"Not available"} width="280" height="280" />
    <hr className="secondhr"></hr>
    <div className="barchart-container">
        <img className="barchart" src="barchart.png" alt={"pic Not available"} width="400" height="300"/>
    </div>
  
    </div>
    </section>
   
   
)
}
export default Skills;