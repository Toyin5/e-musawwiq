import React from 'react'
import database from './firebase'
import "./Main.css"
import Header from "./Header"
import Product from './Product'
import { useState , useEffect} from 'react'
import { collection, getDocs } from 'firebase/firestore'
import Loader from './Loader'
import {FaSearch} from "react-icons/fa"
import Categories from './Categories'
import {Routes, Route} from "react-router-dom"
import Food from './Categories/Food'

export default function Main({...props}) {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [search, setSearch] = useState("")
    const toAdd = [];

    useEffect(() => {
        async function fetchData() { 
        const querySnapshot = await getDocs(collection(database, "products"));
        querySnapshot.docs.forEach(doc => toAdd.push(doc.data()));
        if (toAdd.length !== 0) setLoading(false)
        setProducts([...products, ...toAdd])}
        fetchData();
    }, [])

    const filterItem = (toFilter) => {
        const filteredProducts = products.filter((item) => item.category[1].toLowerCase() === toFilter.toLowerCase())
        setProducts(filteredProducts)
    }

    
    
    return (
        <div>
            <Header />
            <div class="search">
                <input type="text" class="searchTerm" onChange={e => setSearch(e.target.value)} placeholder="Search a product..." />
                <button type="submit" class="searchButton">
                    <FaSearch />
                </button>
            </div>
            <Categories />
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
                            <Product 
                            name = {pro.name} 
                            link = {pro.link} 
                            img = {pro.imgSrc} 
                            price={pro.price} 
                            desc = {pro.desc} 
                            key={pro.name}  />
                            )}
                    </div>
                    }
                    <Routes>
                        <Route path="/food" element={filterItem("food")}/>
                        <Route path="/phone" element={filterItem("phone")} />
                        <Route path="/electronics" element={filterItem("electronics")} />
                        <Route path="/clothing" element={filterItem("clothing")} />
                        <Route path="/services" element={filterItem("services")} />
                    </Routes>
        </div>
    )
}