import React, { useState } from 'react'
import ItemContext from './itemcontext'
const ItemState = (props) => {

    // creating state for tag input


    // here i can create all the states and functions.
    // * just for test 
    const [final, setFinal] = useState('this is a state from context api');

    const [tag, setTag] = useState();

    // variable for resetting the category in update modal
    const [resettag, setResettag] = useState();


    const iteminitial = [];


    //! variable for handling user specific notes in UserEnteries.js
    const [item, setitem] = useState(iteminitial)

    //! variable for all user's all notes to be displayed on the CardsBox.js
    const [allitem, setallitem] = useState([]);



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

        setallitem(allitem.concat(json))

        setitem(item.concat(json))

        return json;
    }

    // fetching/getting items from our database of logged in user only
    const getitems = async () => {
        // making the api call to fetch item from our database
        const response = await fetch(`${host}/api/item/fetchalluseritems`, {
            method: 'GET',
            headers: {
                // here we are getting the token that is stored in the localstorage for further usage
                'auth-token': localStorage.getItem('token')
            },
        });
        const json = await response.json();
        // if (json == []) {
        //     console.log('no enteries')
        // }
        setitem(json)
    }

    // fetchallitems available in the database
    const getallitems = async () => {
        // making the api call to fetch item from our database
        const response = await fetch(`${host}/api/item/`, {
            method: 'GET'
        });
        const json = await response.json();

        setallitem(json);
    }

    const deleteitem = async (id, showalert) => {
        const response = await fetch(`${host}/api/item/deleteitem/${id}`, {
            method: 'DELETE',
            headers: {
                'auth-token': localStorage.getItem('token')
            }
        });
        const json = await response.json();

        let item_Item_Name = json.item.Item_Name;

        if (json.success) {
            showalert(`${item_Item_Name} successfully deleted`, 'success')
        }

        const newitems = item.filter((item) => { return item._id !== id })

        const allnewitems = allitem.filter((item) => { return item._id !== id })


        // resetting the items variables to be displayed on the home screen
        setitem(newitems)
        setallitem(allnewitems)
    }

    //context api for updating the item 
    const updateitem = async (id, Item_Name, Description, Place, Tag, Time, Contact_No, Status, Category, GoogleDriveLink, showalert) => {

        // API call for fetching data
        const response = await fetch(`${host}/api/item/updateitem/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            },
            body: JSON.stringify({ Item_Name, Description, Place, Tag, Time, Contact_No, Status, Category, GoogleDriveLink })
        });
        const json = await response.json();

        // it will create a deep copy
        let newItem = JSON.parse(JSON.stringify(item))

        console.log('the newItem is ', newItem)
        //! upto this point the entry in the database has been updated but the variables used for obtaining the notes are still the same so to update those as well we do the following:-


        //finding the note and updating it.
        for (let index = 0; index < newItem.length; index++) {
            let element = newItem[index];
            if (element._id == id) {
                element.Item_Name = Item_Name
                element.Description = Description
                element.Place = Place
                element.Tag = Tag
                element.Time = Time
                element.Contact_No = Contact_No
                element.Status = Status
                element.Category = Category
                element.GoogleDriveLink = GoogleDriveLink
                break;
            }
        }

        setitem(newItem)
    }


    return (
        <ItemContext.Provider value={{ additem, tag, setTag, getitems, item, allitem, getallitems, deleteitem, updateitem, resettag, setResettag }}>
            {props.children}
        </ItemContext.Provider>
    )
}

export default ItemState