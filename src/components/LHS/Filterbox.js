import React from 'react'
import Filter from './Filter'

const Filterbox = () => {
  let style1={
    // border:'solid 2px black',
    width:'100%',
    opacity:'1',
    height:'50px'
  }
  
  // creating the list of other options provided in the dropdown menu of things

  let dropdownoptions=[
    ['lost','found'],
    ['last 1 day','last 3 days','last 5 days','last 10 days'],
    // add further filter tags here only....
    ['general','smartphones','documents','clothing','electronics','money']
  ]
  return (
    <div id='Filterbox' style={style1} className='d-flex justify-content-around align-items-center'>
      <Filter dropdownoptions={dropdownoptions[0]}/>
      <Filter dropdownoptions={dropdownoptions[1]}/>
      <Filter dropdownoptions={dropdownoptions[2]}/>
    </div>
  )
}

export default Filterbox