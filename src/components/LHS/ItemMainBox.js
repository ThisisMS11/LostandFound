import React, { useContext, useEffect, useState } from 'react'
import CardsBox from './CardsBox'
import Filterbox from './Filterbox'
import itemContext from '../context/items/itemcontext'

const ItemMainBox = (props) => {

  let boxstyle = {
    height: '522px',
    border: "solid 1px #d5cfcf",
    borderRadius: '10px',
    fontSize: "33px",
    opacity: '0.65'
  }


  const context = useContext(itemContext)
  let { allitem, getallitems, displaydecider, setDisplaydecider } = context;



  useEffect(() => {
    (async () => {
      let items = await getallitems();

      if (items.length > 0) {
        setDisplaydecider(true)
      }
      else {
        setDisplaydecider(false)
      }

    })();

  }, [])
  
  
  return (
    <div >
      <Filterbox />
      {displaydecider ? <CardsBox /> : <div className='container d-flex align-items-center justify-content-center' style={boxstyle}>No Enteries</div>}

    </div>
  )
}

export default ItemMainBox