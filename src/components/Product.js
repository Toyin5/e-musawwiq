import React from 'react'
import "./Product.css"
// import img from "../2.png"

export default function Product({...props}) {
    return (
        <div className='product'>
            <h5>{props.name}</h5>
            <img src={props.img} alt={props.name} />
            <p>{props.desc}</p>
            <p>${props.price}</p>
            <button><a href={props.link} target="_blank" rel='noreferrer'>Buy</a></button>
        </div>
    )
}
