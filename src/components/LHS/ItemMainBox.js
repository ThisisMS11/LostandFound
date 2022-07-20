import React from 'react'
import CardsBox from './CardsBox'
import Filterbox from './Filterbox'

const ItemMainBox = (props) => {
  let style1 = {
    // border: 'solid 2px black',
    width: '1050px',
    height: '600px'
  }

  
  return (
    <div >
      <Filterbox/>

      <CardsBox/>
    </div>
  )
}

export default ItemMainBox