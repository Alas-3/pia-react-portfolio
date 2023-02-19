import React from "react";
import './styles.css';
import pia from './assets/pia.jpg';

export default function About(){
    return(
        <section class="about" id="about">
        <div class="max-width">
            <h2 class="title">About me</h2>
            <div class="about-content">
                <div class="column left">
                    <img src={pia} alt="my-icon"/>
                </div>
                <div class="column right">
                    <div class="text">I'm Sofia<span class="typing-2"></span></div>
                    <p>I am a BSIT student at Our Lady of Fatima University</p>
                    <a href="#contact">My Personal Email</a>
                </div>
            </div>
        </div>
    </section>
    );
}