import styles from "../styling.css";
function DisplayExperience(props) {
    return (
      <div>
        <img src={props.image} height="150" width="200" alt="Experience Image" />
       
        <p>{props.text}</p>
        <a className="link" href={props.url}>Link</a>

        <p>{props.code}</p>
        
      </div>
    );
  }
  
  export default DisplayExperience;
  