import React from 'react'
import CardsBox from './CardsBox'
import Filterbox from './Filterbox'

const ItemMainBox = () => {
  let style1 = {
    border: 'solid 2px black',
    width: '1050px',
    height: '600px'
  }
  return (
    <div style={style1}>
      <Filterbox/>

      <CardsBox/>
    </div>
  )
}

export default ItemMainBox