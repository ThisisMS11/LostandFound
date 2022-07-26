import React, { useContext, useEffect } from 'react'
import Card from './Card'
import style from '../styles/filterBox.css'
import itemContext from '../context/items/itemcontext'

const CardsBox = () => {
  let boxstyle = {
    height: '522px',
    border: "solid 1px #d5cfcf",
    borderRadius: '10px',
  }

  const context = useContext(itemContext);
  let { allitem, getallitems, giveid } = context;


  // !fetching all the notes here
  // whenever getallitems would change anywhere in the react app this useeffect would trigger itself.

  // **************
  // useEffect(() => {
  //   // mohit();
  //   getallitems();

  //   console.log('inside cardbox checking no enteries div');
  // }, [])

  // console.log('here are all the items',allitem);

  // the data has to be filtered here

  // const mohit = async () => {
  //   const response = await fetch('https://drive.google.com/uc?export=view&id=14way_dVImUuU-1eVMd85LWhSONYyjPDW');
  //   const json = await response.json();
  //   console.log('our json is ', json.Status);
  // }



  return (


    <div className=' container d-flex my-4 justify-content-center flex-wrap overflow-auto scroller-design' style={boxstyle}>

      {/* Iterating the cards information here */}
      {
        // allitem contains all the items present in our database added by all different users
        allitem.map((e) => {
          return <div className='mx-3' key={e.id} ><Card imageid={giveid(e.GoogleDriveLink)} Item_Name={e.Item_Name} User={e.User} Description={e.Description} Place={e.Place} Category={e.Category} Contact_No={e.Contact_No} Status={e.Status} Record_date={e.Record_date} Time={e.Time} /> </div>

        })
      }


    </div>
  )
}

export default React.memo(CardsBox);

// allitems json has to be filtered for displaying the filter relevant over the screen