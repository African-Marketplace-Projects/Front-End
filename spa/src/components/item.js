import React from 'react';


function Item(props){
    const {product} = props;


    return(
        <div className='product-info'>
            <p>{product.itemName}</p>
            <p>{product.itemDescription}</p>
            <p>{product.itemPrice}</p>
        </div>
    )
}

export default Item;