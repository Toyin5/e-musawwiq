import React from 'react'
import logo from '../1.png'
import "./Header.css"
function click() {
    console.log("Clicked!")
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelectorAll('.nav__link')

    navToggle.addEventListener('click', () => {
        document.body.classList.toggle('nav-open');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            document.body.classList.remove('nav-open');
        })
    })
}
export default function Header() {
    return (
        <div className="header">
            <div>
                <img src={logo} alt="logo" />
            </div>
            <div>
                <h1>E-Musawwiq</h1>
            </div>
            <div className="navbar">
                <button class="nav-toggle" aria-label="toggle navigation" onClick={click}>
                    <span class="hamburger"></span>
                </button>
                <nav class="nav">
                    <ul class="nav__list">
                        <li class="nav__item"><a href="#home" class="nav__link">Home</a></li>
                        <li class="nav__item"><a href="#report" class="nav__link">Report a bug</a></li>
                        <li class="nav__item"><a href="#contact" class="nav__link">Contact Us</a></li>
                    </ul>
                </nav>
            </div>
            {/*TODO */}
            {/*1. NavBar  Done */}
            {/*2. Main Body */}
            {/* 3. Footer */}
        </div>
    )
}
