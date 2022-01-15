import React from 'react'
import database from './firebase'
import "./Main.css"
import Header from "./Header"
import Product from './Product'
import { useState , useEffect} from 'react'
import { collection, getDocs } from 'firebase/firestore'
import Loader from './Loader'
import {FaSearch} from "react-icons/fa"


export default function Main() {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [search, setSearch] = useState("")
    const toAdd = [];
    useEffect( async() => {
        const querySnapshot = await getDocs(collection(database, "products"));
        querySnapshot.docs.forEach(doc => toAdd.push(doc.data()));
        if (toAdd.length !== 0) setLoading(false)
        setProducts([...products, ...toAdd])
    }, [])
    
    return (
        <div>
            <Header />
            <div class="search">
                <input type="text" class="searchTerm" onChange={e => setSearch(e.target.value)} placeholder="Search a product..." />
                <button type="submit" class="searchButton">
                    <FaSearch />
                </button>
            </div>
            <div className='main'>
                {(loading) ? 
                    <Loader /> :
                    <div className='products'>
                        { products.filter(pro => {
                                if (search === "") {
                                    return pro
                                } else if (pro.name.toLowerCase().includes(search.toLowerCase())){
                                    return pro
                                }
                            }).map(pro => 
                            <Product name = {pro.name} 
                            link = {pro.link} 
                            img = {pro.imgSrc} 
                            price={pro.price} 
                            desc = {pro.desc} 
                            key={pro.name}  />
                            )}
                    </div>
                    }
            </div>
        </div>
    )
}