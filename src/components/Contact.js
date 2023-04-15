import styles from "../styling.css";

function Contact()
{
    return(
      <div className="Contactme">
        <p className="Contact">Contact me</p>
        <div className="Contactimages">
        <a href="https://github.com/Azan10">
         <img src="github.png"></img>
         </a>
         <a href="https://www.linkedin.com/in/muhammad-azan-0a55b6112/">
         <img src="linkedin.png"></img>
         </a>
         <a href="https://mail.google.com/mail/u/1/#inbox">
         <img src="gmail.png" width="38" height="28"></img>
         </a>
        
         </div>
      </div>
    )
}

export default Contact