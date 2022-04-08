import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
    itemInitialValues,
    initialAddItemErrors,
} from '../initialValues/initialValues.js'


function AddItem(){
    const [values, setValues] = useState(itemInitialValues)
    const [addItemErrors, setAddItemErrors] = useState(initialAddItemErrors)
    

    const addNewItem = (newItem) => {
        axios.post('', newItem)
        .then((res) => {
            console.log(res)
        })
        .catch((err) => {
            console.error(err)
        })
    }

    const onChange = (event) => {
        const { name, value } = event.target

        setValues({
            ...values,
            [name]: value,
        });
    };

    const onSubmit = (event) => {
        
        event.preventDefault();
        addNewItem(values);
    };

    return(
        <div className='add-item-container'>
            <div className='item-form-title'>
                <h1>Add Product Here</h1>
            </div>
            <div className='add-item-form'>
                <div className='add-item-errors'>
                    <div>
                        <p>{addItemErrors.itemName}</p>
                    </div>
                    <div>
                        <p>{addItemErrors.itemDescription}</p>
                    </div>
                    <div>
                        <p>{addItemErrors.itemPrice}</p>
                    </div>
                    <div>
                        <p>{addItemErrors.location}</p>
                    </div>
                </div>
                <form className='add-form' onSubmit={onSubmit}>
                    <label>Product Name
                        <input
                            type='text'
                            name='itemName'
                            value={values.itemName}
                            onChange={onChange}
                        />
                    </label>
                    <label>Price
                        <input
                            type='text'
                            name='itemPrice'
                            value={values.itemPrice}
                            onChange={onChange}
                        />
                    </label>
                    <label>Description
                        <input
                            type='text'
                            name='itemDescription'
                            value={values.itemName}
                            onChange={onChange}
                        />
                    </label>
                    <label>Location
                        <input
                            type='text'
                            name='location'
                            value={values.location}
                            onChange={onChange}
                        />
                    </label>
                    <button>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default AddItem;