import React, { useState } from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import axiosWithAuth from '../authorization/axiosWithAuth';
import { apples } from '../mock-data/item';
import Item from './item';
import AddItem from './AddItem';


function items(){
const [products, setProducts] = useState(apples)

// const fetchProducts = () => {
//     axiosWithAuth().get('')
//     .then((res) => {
//         const products = res.data 
//         setProducts(products)
//     })
//     .catch((err) => {
//         console.error(err)
//     })
// }
    return(
        <div className='products'>
            <nav>
                <NavLink id="/add" to="/items/add">
                    Add New Item
                </NavLink>
            </nav>
            <Routes>
                <Route path="/add" element={<AddItem />} />
            </Routes>
            {products.map((product, i) => {
                return (
                    <Item key={i} product={product}/> 
                )
            })}

        </div>
    )
}

export default items;