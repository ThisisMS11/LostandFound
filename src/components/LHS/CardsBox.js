import React, { useContext, useEffect } from 'react'
import Card from './Card'
import itemContext from '../context/items/itemcontext'

const CardsBox = () => {
  let boxstyle = {
    height: '522px',
    border: "solid 1px #d5cfcf",
    borderRadius: '10px',
  }

  const context = useContext(itemContext);
  let { allitem, getallitems } = context;


  // !fetching all the notes here
  // whenever getallitems would change anywhere in the react app this useeffect would trigger itself.
  useEffect(() => {
    getallitems();
    // console.log('here are all the items',allitem);
  }, [getallitems])




  return (
    <div className=' container d-flex my-4 justify-content-start flex-wrap overflow-auto' style={boxstyle}>

      {/* Iterating the cards information here */}
      {
        // allitem contains all the items present in our database added by all different users
        allitem.map((e) => {
          return <div className='mx-3'><Card imageid={e.GoogleDriveLink} Item_Name={e.Item_Name} User={e.User} Description={e.Description} Place={e.Place} Category={e.Category} Contact_No={e.Contact_No} Status={e.Status} Record_date={e.Record_date} Time={e.Time} /> </div>

        })
      }


    </div>
  )
}

export default CardsBox