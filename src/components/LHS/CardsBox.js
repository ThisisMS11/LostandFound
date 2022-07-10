import React from 'react'
import Card from './Card'

const CardsBox = () => {
  return (
    <div className='border border-dark container d-flex justify-content-around my-4'>
        <Card/>
        <Card/>
        <Card/>
    </div>
  )
}   

export default CardsBox