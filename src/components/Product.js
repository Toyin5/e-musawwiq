import React from 'react'
import "./Product.css"
// import img from "../2.png"

export default function Product({...props}) {
    return (
        <div className='product'>
            <h3>{props.name}</h3>
            <img src={props.img} alt='productImg' />
            <p>{props.desc}</p>
            <p>{props.price}</p>
            <button><a href='#home' target="_blank">Buy</a></button>
        </div>
    )
}
