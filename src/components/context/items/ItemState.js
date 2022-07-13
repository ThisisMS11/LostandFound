import React, { useState } from 'react'
import ItemContext from './itemcontext'
const ItemState = (props) => {

    // creating state for tag input


    // here i can create all the states and functions.
    // * just for test 
    const [final, setFinal] = useState('this is a state from context api');

    const [tag, setTag] = useState()


    const host = 'http://localhost:4501';


    // Adding iteminfo to our database
    const additem = async (Item_Name, Description, Tag, Place, Time, Contact_No, Status, Category, GoogleDriveLink) => {
        const response = await fetch(`${host}/api/item/additem`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            },
            body: JSON.stringify({ Item_Name, Description, Tag, Place, Time, Contact_No, Status, Category, GoogleDriveLink })
        });
        const json = await response.json();
        console.log(json);
    }


    return (
        <ItemContext.Provider value={{ additem, tag, setTag }}>
            {props.children}
        </ItemContext.Provider>
    )
}

export default ItemState