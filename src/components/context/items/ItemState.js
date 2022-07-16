import React, { Component, useState } from 'react'
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



    // !variables for obtaining real time filter values from filterbox Component.

    const [categoryfilter, setcategoryfilter] = useState();
    const [durationfilter, setdurationfilter] = useState();
    const [tagfilter, settagfilter] = useState();


    //! variable for handling user specific notes in UserEnteries.js
    const [item, setitem] = useState(iteminitial)

    //! variable for all user's all notes to be displayed on the CardsBox.js
    const [allitem, setallitem] = useState([]);

    const giveid = (link) => {
        let id = '';
        for (let i = 0; i < link.length; i++) {
            const element = link[i];
            if (element == 'd') {
                if (link[i + 1] == '/') {
                    for (let j = i + 2; j < link.length; j++) {
                        if (link[j] == '/') {
                            break;
                        }
                        id = id + link[j];
                    }
                }
            }
        }
        return id;
    }



    const host = 'http://localhost:4501';


    // !for the loading bar progress
    const [progress, setprogress] = useState();


    // Adding iteminfo to our database
    const additem = async (Item_Name, Description, Tag, Place, Time, Contact_No, Status, Category, GoogleDriveLink, showalert) => {

        setprogress(30)
        const response = await fetch(`${host}/api/item/additem`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            },
            body: JSON.stringify({ Item_Name, Description, Tag, Place, Time, Contact_No, Status, Category, GoogleDriveLink })
        });
        setprogress(80)
        const json = await response.json();


        // ! adding the new item with the already present ones here
        setallitem(allitem.concat(json.item))

        setitem(item.concat(json.item))

        setprogress(100)

        return json;
    }

    // fetching/getting items from our database of logged in user only
    const getitems = async () => {
        // making the api call to fetch item from our database

        setprogress(30)
        const response = await fetch(`${host}/api/item/fetchalluseritems`, {
            method: 'GET',
            headers: {
                // here we are getting the token that is stored in the localstorage for further usage
                'auth-token': localStorage.getItem('token')
            },
        });
        setprogress(80)
        const json = await response.json();
        // if (json == []) {
        //     console.log('no enteries')
        // }
        setprogress(100)
        setitem(json)
    }

    // fetchallitems available in the database
    const getallitems = async () => {
        // making the api call to fetch item from our database
        setprogress(30)
        const response = await fetch(`${host}/api/item/`, {
            method: 'GET'
        });
        setprogress(80)
        const json = await response.json();
        setprogress(100)
        setallitem(json);
    }

    const deleteitem = async (id, showalert) => {
        setprogress(30)
        const response = await fetch(`${host}/api/item/deleteitem/${id}`, {
            method: 'DELETE',
            headers: {
                'auth-token': localStorage.getItem('token')
            }
        });
        setprogress(80)
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
        setprogress(100)
    }

    //context api for updating the item 
    const updateitem = async (id, Item_Name, Description, Place, Tag, Time, Contact_No, Status, Category, GoogleDriveLink, showalert) => {

        // API call for fetching data
        setprogress(30)
        const response = await fetch(`${host}/api/item/updateitem/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            },
            body: JSON.stringify({ Item_Name, Description, Place, Tag, Time, Contact_No, Status, Category, GoogleDriveLink })
        });

        setprogress(80)
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

        setprogress(100)

        if (json.success) {
            showalert(`${Item_Name} successfully updated`, 'success')
        }
    }


    return (
        <ItemContext.Provider value={{ additem, tag, setTag, getitems, item, allitem, getallitems, deleteitem, updateitem, resettag, setResettag, giveid, categoryfilter, setcategoryfilter, durationfilter, setdurationfilter, tagfilter, settagfilter, progress, setprogress }}>
            {props.children}
        </ItemContext.Provider>
    )
}

export default ItemState