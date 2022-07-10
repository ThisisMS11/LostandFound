import React from 'react'
import Card from './Card'

import image1 from '../images/neckband.jpg'

const CardsBox = () => {
  let boxstyle={
    height:'522px'
  }

  // here let's hard code some data in json format...
  let Items=[
    {
      "_id": {
        "$oid": "62ca583abd085c07f814f84f"
      },
      "Item_Name": "Samsung F-12",
      "User": {
        "$oid": "62c6c4c8bbdec4e1e9d72a44"
      },
      "image1":"smartphone",
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
      "image1":"joystick",
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
      "image1":"cap",
      "Tag": "clothing",
      "Place": "cricket ground in front of h3 hostel",
      "Time": "Mon, 11 oct 2022 17:28:35",
      "Record_date": "10/7/2022, 10:10:24 am",
      "Contact_No": 8100453581,
      "Status": true,
      "Category": "Lost",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "62ca583abd085c07f814f84f"
      },
      "Item_Name": "Samsung neckband",
      "User": {
        "$oid": "62c6c4c8bbdec4e1e9d72a44"
      },
      "Description": "has a red spot over it boats rockers ",
      "image1":"neckband",
      "Tag": "earphones",
      "Place": "near tinkering lab ",
      "Time": "Mon, 11 oct 2022 17:28:35",
      "Record_date": "10/7/2022, 10:10:24 am",
      "Contact_No": 7854584451,
      "Status": true,
      "Category": "Lost",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "62ca583abd085c07f814f84f"
      },
      "Item_Name": "Tesla car",
      "User": {
        "$oid": "62c6c4c8bbdec4e1e9d72a44"
      },
      "Description": "has the plate no xxxx 20022",
      "image1":"car",
      "Tag": "car",
      "Place": "near h3 hostel parked at hexagon",
      "Time": "Mon, 11 oct 2022 17:28:35",
      "Record_date": "10/7/2022, 10:10:24 am",
      "Contact_No": 9610243581,
      "Status": true,
      "Category": "Lost",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "62ca583abd085c07f814f84f"
      },
      "Item_Name": "Apple Watch",
      "User": {
        "$oid": "62c6c4c8bbdec4e1e9d72a44"
      },
      "Description": "White in color along with some ayush name written on it",
      "image1":"smartwatch",
      "Tag": "watch",
      "Place": "at physics lab hexagon canteen",
      "Time": "Mon, 11 oct 2022 17:28:35",
      "Record_date": "10/7/2022, 10:10:24 am",
      "Contact_No": 9120453581,
      "Status": true,
      "Category": "Lost",
      "__v": 0
    },
    
  ]
  // destructuring for better understanding
  // let {Item_Name,Description,Place,Category,Status,Contact_No,Record_date,Time,image1}=Items[0];
  return (
    <div className='border border-dark container d-flex justify-content-around my-4 flex-wrap overflow-auto' style={boxstyle}>
  
        {/* Iterating the cards information here */}
        {
          Items.map((e)=>{
            return <Card image1={e.image1} Item_Name={e.Item_Name} User="Mohit Saini" Description={e.Description} Place={e.Place} Category={e.Category} Contact_No={e.Contact_No} Status={e.Status} Record_date={e.Record_date} Time={e.Time}/>

          })
        }


    </div>
  )
}   

export default CardsBox