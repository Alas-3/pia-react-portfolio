import React from "react";
import './styles.css';

export default function Home(){
    return(
         <section class="home" id="home">
        <div class="max-width">
            <div class="home-content">
                <div class="text-1">Hello, my name is</div>
                <div class="text-2">Sofia Yuzon</div>
                <div class="text-3"><span class="typing"></span></div>
                <a href="#">Contact Me</a>
            </div>
        </div>
    </section>
    );
}