import React from 'react'
import { Link } from 'react-router-dom'
import "./Categories.css"



function Categories() {

    
    function toggleClass(e){
        // e.preventDefault()
    }

    return (
        <div className='categories'>
            <button><Link to='/' onClick={toggleClass}>All</Link></button>
            <button><Link to='/phone' onClick={toggleClass}>Phones</Link></button>
            <button><Link to='/food' onClick={toggleClass}>Foods</Link></button>
            <button><Link to='/electronics' onClick={toggleClass}>Electronics</Link></button>
            <button><Link to='/clothing' onClick={toggleClass}>Clothing</Link></button>
            <button><Link to='/services' onClick={toggleClass}>Services</Link></button>
            {/* <button></button> */}
        </div>
    )
}

export default Categories
