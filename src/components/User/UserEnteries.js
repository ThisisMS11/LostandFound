import React from 'react'
import Card from '../LHS/Card'

const UserEnteries = () => {
    let Items = [
        {
            "_id": {
                "$oid": "62ca583abd085c07f814f84f"
            },
            "Item_Name": "Samsung F-12",
            "User": {
                "$oid": "62c6c4c8bbdec4e1e9d72a44"
            },
            "image1": "smartphone",
            "Description": "Has a Google Sticker at the back of the cover",
            "Tag": "smartphone",
            "Place": "near ojas canteen h3 hostel",
            "Time": "Mon, 11 oct 2022 17:28:35",
            "Record_date": "10/7/2022, 10:10:24 am",
            "Contact_No": 9680453581,
            "Status": true,
            "Category": "Lost",
            "__v": 0
        },
        {
            "_id": {
                "$oid": "62ca583abd085c07f814f84f"
            },
            "Item_Name": "Gaming pad Far-12",
            "User": {
                "$oid": "62c6c4c8bbdec4e1e9d72a44"
            },
            "Description": "i had decided to play free fire with my friends but i lost it.",
            "image1": "joystick",
            "Tag": "electronics",
            "Place": "near ojas canteen h3 hostel",
            "Time": "Mon, 11 oct 2022 17:28:35",
            "Record_date": "10/7/2022, 10:10:24 am",
            "Contact_No": 9680453581,
            "Status": true,
            "Category": "Lost",
            "__v": 0
        },
        {
            "_id": {
                "$oid": "62ca583abd085c07f814f84f"
            },
            "Item_Name": "Google cap",
            "User": {
                "$oid": "62c6c4c8bbdec4e1e9d72a44"
            },
            "Description": "parcelpants written on it.",
            "image1": "cap",
            "Tag": "clothing",
            "Place": "cricket ground in front of h3 hostel",
            "Time": "Mon, 11 oct 2022 17:28:35",
            "Record_date": "10/7/2022, 10:10:24 am",
            "Contact_No": 8100453581,
            "Status": true,
            "Category": "Lost",
            "__v": 0
        }

    ]
    return (
        <div className='container d-flex flex-wrap justify-content-center align-items-center'>
            {
                Items.map((e) => {
                    return <div className='mx-4'><Card image1={e.image1} Item_Name={e.Item_Name} User="Mohit Saini" Description={e.Description} Place={e.Place} Category={e.Category} Contact_No={e.Contact_No} Status={e.Status} Record_date={e.Record_date} Time={e.Time} />
                        <div className="d-flex justify-content-around border border-dark py-2 rounded opacity-75">
                            {/* <button className="btn btn-primary">Delete</button>
                            <button className="btn btn-primary">Update</button> */}
                            <i className="fa-solid fa-pen-to-square" ></i>
                            <i class="fa-solid fa-trash "></i>
                        </div>
                    </div>

                })
            }
        </div>
    )
}

export default UserEnteries