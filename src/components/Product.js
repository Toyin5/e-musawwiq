import React from 'react'
import "./Product.css"
import img from "../2.png"

export default function Product() {
    return (
        <div className='product'>
            <h3>Name</h3>
            <img src={img} alt='productImg' />
            <h4>$10</h4>
            <button><a href='' target="_blank">Buy</a></button>
        </div>
    )
}
