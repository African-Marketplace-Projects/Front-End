import React, { useState } from 'react';
import { Route, Routes, NavLink } from 'react-router-dom';
import axios from 'axios';

import { apples } from '../mock-data/item';
import Item from './item';
import AddItem from './AddItem';
import '../styles/items.css'


function Items(){
const [products, setProducts] = useState(apples)

const fetchProducts = () => {
    axios.get('https://african-market-web-api.herokuapp.com/api/items')
    .then((res) => {
        console.log(res.data)
        setProducts(res.data)
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
        <button onClick={fetchProducts}>get products</button>
        </div>
    )
}

export default Items;