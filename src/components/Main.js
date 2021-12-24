import React from 'react'
import database from './firebase'
import "./Main.css"
import Product from './Product'
import { useState , useEffect} from 'react'
import { collection, getDocs } from 'firebase/firestore'


export default function Main() {

    const [products, setProducts] = useState([])
    const toAdd = [];
    useEffect( async() => {
        const querySnapshot = await getDocs(collection(database, "products"));
        querySnapshot.docs.forEach(doc => toAdd.push(doc.data()));
        setProducts([...products, ...toAdd])
    }, [])

    return (
        <div className='main'>
            {products.map(pro => 
               <Product name = {pro.name} link = {pro.link} img = {pro.imgSrc} price={pro.price} desc = {pro.desc} key={pro.name}  />
            )}
        </div>
    )
}