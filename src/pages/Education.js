import styles from "../styling.css";
import { useState,useEffect } from "react";

function Education() {
 

    return (
    
      <div className="Education">
        <div className="myeducation">
         <section id="education">
        <h1 className="educationtext">Education</h1>
        <div className="first-box">
        <p>BeaconHouse System(2017-19)</p>
        <p>GCSE'S</p>
        <p>6A* 2A</p>
        </div>
        <div className="second-box">
         
        <p>BeaconHouse System(2019-21)</p>
        <p>Alevels</p>
        <p>2A 1B</p>
        </div>
        <div className="third-box">
        <p>Queen Mary University of London(2021-24)</p>
        <p>Bsc Computer Science</p>
        <p>1st Class(4.0 gpa Expected)</p>
        </div>
        
     
          <img className="myimage" src="myimage.jpg" width="320" height="300"></img>
          <img className="educationimage" src="education.jpeg" width="300" height="300"></img>
      
        </section>
        </div>
      </div>
     
    );
  }
  
  export default Education;
  
  
  
  