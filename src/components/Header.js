import React, {useState, useEffect} from 'react'
import logo from '../1.png'
import "./Header.css"
import {FaEllipsisV} from "react-icons/fa"
export default function Header({...props}) {
    const [toggleMenu, setToggleMenu] = useState(false);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const toggleNav = () => {
        setToggleMenu(!toggleMenu) 
      }
    useEffect(() => {
        const changeWidth = () => {
          setScreenWidth(window.innerWidth);
        }
    
        window.addEventListener('resize', changeWidth)

        return () => {
            window.removeEventListener('resize', changeWidth)
        }
    
      }, [])
    
    return (
            <div className="header">
                <div>
                    <img src={logo} alt="logo" />
                </div>
                    <nav class="nav">
                    {(toggleMenu || screenWidth > 500) && (
                        <ul className="list">
                            <li className="items"><a href="/">Home</a></li>
                            <li className="items"><a href="/report">Report a bug</a></li>
                            <li className="items"><a href="/contact">Contact Us</a></li>
                        </ul>)}
                    <button className="nav-toggle btn" aria-label="toggle navigation" onClick={toggleNav}>
                        <FaEllipsisV />
                    </button>
                    </nav>        
            </div>
    )
}
