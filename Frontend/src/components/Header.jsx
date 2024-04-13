import React from "react";

import HighlightIcon from "@mui/icons-material/Highlight";
import { Link } from 'react-router-dom'
import { alignProperty } from "@mui/material/styles/cssUtils";
import { useLogout } from "../Hooks/useLogout";
import { useAuthContext } from "../Hooks/useAuthContext";
function Header() {
  const { logout } = useLogout()
  const { user } = useAuthContext()
  const handleClick = () => {
    logout()
  }

  return (
    <header>
    <nav flex = "1" className="navbar "  >
    
    
     <h1  >
        <HighlightIcon />
        <Link to="/"> 
        Keeper
        </Link>
      </h1>
    
      <div  className="navbar navbar-light collapse  navbar-expand " id="navbarNav" >
       
      
      {!user && (
        <ul className="navbar-nav ">
      <li className="nav-item active">
      <Link to="/login" className="nav-link  ">Login</Link>
      </li>
      <li className="nav-item">
      <Link to="/signup" className="nav-link ">Signup</Link> 
      </li>
      </ul>)}

      {user && (
        <ul className="navbar-nav ">
        <li className="nav-item ">
        <span>{user.email}</span></li>
      <li className="nav-item">
            <button onClick={handleClick} >Log out</button>
          </li>
          </ul>)}
     
      {/* <Link to="/login">Login</Link>
            
            <Link to="/signup">Signup</Link>  */}
          
        </div>
        </nav>
    </header>
  );
}

export default Header;
{/* <nav class="navbar navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
</nav>
<div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Features</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Pricing</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>
  </div>
<!-- As a heading -->
<nav class="navbar navbar-light bg-light">
  <span class="navbar-brand mb-0 h1">Navbar</span>
</nav> */}