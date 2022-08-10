import React from 'react';


function Item(props){
    const {product} = props;


    return(
        <div className='product-info'>
            <p>{product.item_name}</p>
            <p>{product.item_price}</p>
            <p>{product.item_description}</p>
            <p>{product.item_location}</p>
        </div>
    )
}

export default Item;