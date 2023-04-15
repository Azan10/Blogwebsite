
import styles from "../styling.css";
import { Link } from 'react-scroll';

function Navbar()
{
  return(
    <nav className="mainpage-navigation">
        <ul>
            <li><Link to="intro" smooth={true} duration={500}>Intro</Link></li>
            <li><Link to="education" smooth={true} duration={500}>About me</Link></li>
            <li><Link to="experience" smooth={true} duration={500} >Experience</Link></li>
          
           
            
        </ul>
      </nav>
   

  );
}

export default Navbar;
