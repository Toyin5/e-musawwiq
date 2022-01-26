import React, {useState, useEffect} from 'react'
import logo from '../1.png'
import "./Header.css"
import {FaEllipsisV} from "react-icons/fa"
import { Link } from 'react-router-dom'
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
                    <Link to="/"><img src={logo} alt="logo" /></Link>
                </div>
                    <nav class="nav">
                    {(toggleMenu || screenWidth > 500) && (
                        <ul className="list">
                            <li className="items"><Link to="/">Home</Link></li>
                            <li className="items"><Link to="/report">Report a bug</Link></li>
                            <li className="items"><Link to="/contact">Contact Us</Link></li>
                        </ul>)}
                    <button className="nav-toggle btn" aria-label="toggle navigation" onClick={toggleNav}>
                        <FaEllipsisV />
                    </button>
                    </nav>        
            </div>
    )
}
