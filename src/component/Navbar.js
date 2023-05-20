
import "./Navbar.css"
import { Link } from 'react-router-dom'
import React, { useState } from "react";
import {BsInstagram,BsGithub} from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';
import {FaBars,FaTimes} from 'react-icons/fa';

export const Navbar = () => {
  const[click,setclick]=useState(false);
const handleClick=()=>setclick(!click);
  return (
    <div className='header'>
      
      <ul className={click ? "nav-menu.active":"nav-menu"}>
        <li> <Link to={"/"}> Home</Link></li>
    
     
        <li> <Link to={"/"}> About</Link></li>
      
        <li> <Link to={"/"}> Skills</Link></li>
      
        <li> <Link to={"/"}> Projects</Link></li>
      
        <li> <Link to={"/"}> Contact</Link></li>
       
        </ul>
        <ul className='nav-menuicons'>
        
        <li>
              <a
                href="https://www.linkedin.com/in/omkar-sonmale-10b742218/"  target="_blank" rel="noreferrer">
                <BsLinkedin  className="linkedin" />
              </a>
              </li>
              <li>
              <a
                href="https://www.linkedin.com/in/omkar-sonmale-10b742218/"  target="_blank" rel="noreferrer">
                <BsInstagram className="instagram" />
              </a>
              </li>
              <li>
              <a
                href="https://www.linkedin.com/in/omkar-sonmale-10b742218/"  target="_blank" rel="noreferrer">
                <BsGithub className="github" />
              </a>
              </li>
              
        </ul>
        <div className='hamburger' onClick={handleClick}>
        {click ? (  <FaTimes size={20} style={{color:"#fff"}}/>
        ): (
           <FaBars size={20} style={{color:"#fff"}}/>
           )}
        

      

        </div>
    </div>
  )
}
