import React, { useState } from 'react';
import { Route, Routes, NavLink } from 'react-router-dom';
import axiosWithAuth from '../authorization/axiosWithAuth';
import { apples } from '../mock-data/item';
import Item from './item';
import AddItem from './AddItem';
import '../styles/items.css'


function items(){
const [products, setProducts] = useState(apples)

const fetchProducts = () => {
    axiosWithAuth().get('')
    .then((res) => {
        const products = res.data 
        setProducts(products)
    })
    .catch((err) => {
        console.error(err)
    })
}
    return(
        <div className='products'>
            <Routes>
                <Route path="/items/add" element={<AddItem />} />
            </Routes>
            <nav>
                <NavLink id="add" to="/items/add">
                    Add New Item
                </NavLink>
            </nav>
            {products.map((product, i) => {
                return (
                    <Item key={i} product={product}/> 
                )
            })}

        </div>
    )
}

export default items;