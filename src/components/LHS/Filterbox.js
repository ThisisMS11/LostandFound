import React, { useContext } from 'react'
import Filter from './Filter'
import itemContext from '../context/items/itemcontext'

const Filterbox = () => {
  let style1 = {
    border: "solid 1px #d5cfcf",
    borderRadius: '10px',
    width: '100%',
    height: '50px'
  }

  const context = useContext(itemContext)
  let { handlefilter, getallitems } = context;

  // creating the list of other options provided in the dropdown menu of things

  const applyfilter = async () => {
    let list = await getallitems();
    handlefilter(list)
  }




  let dropdownoptions = [
    ['All', 'Lost', 'Found'],
    ['All Time', 'last 1 day', 'last 3 days', 'last 5 days', 'last 10 days'],
    // add further filter tags here only....
    ['All', 'general', 'smartphones', 'documents', 'clothing', 'electronics', 'money']
  ]
  return (
    <div id='Filterbox' style={style1} className='d-flex justify-content-around align-items-center'>
      <Filter dropdownoptions={dropdownoptions[0]} filtername='categoryfilter' initialvalue={dropdownoptions[0][0]} />
      <Filter dropdownoptions={dropdownoptions[1]} filtername='durationfilter' initialvalue={dropdownoptions[1][0]} />
      <Filter dropdownoptions={dropdownoptions[2]} filtername='tagfilter' initialvalue={dropdownoptions[2][0]} />
      <button type="button" className="btn btn-dark" onClick={applyfilter}>Apply filter</button>
    </div >
  )
}

export default Filterbox