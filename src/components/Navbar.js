import React from "react";
import './styles.css';

export default function Navbar(){
    return(
        <nav class="navbar">
        <div class="max-width">
            <div class="logo"><a href="#home">So<span>fia</span></a></div>
            <ul class="menu">
                <li><a href="#home" class="menu-btn">Home</a></li>
                <li><a href="#about" class="menu-btn">About</a></li>
            </ul>
        </div>
    </nav>
    );
}