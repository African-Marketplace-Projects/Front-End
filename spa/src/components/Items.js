import React, { useState } from 'react';
import axiosWithAuth from '../authorization/axiosWithAuth';
import { apples } from '../mock-data/item';
import Item from './item';



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
            {products.map((product, i) => {
                return (
                    <Item key={i} product={product}/> 
                )
            })}

        </div>
    )
}

export default items;