import React from "react";
import logoImage from '../assets/logo.png';

export default function NavBar(){
    return(
        <nav className="nav-bar">
            <img src= {logoImage} alt="logo" className="nav-bar-logo" />
            <h1 className="nav-bar-title">KeyForge: Secure Passwords</h1>
        </nav>
    )
}