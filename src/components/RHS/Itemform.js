import React, { useState } from 'react'

import Filter from '../LHS/Filter'

const Itemform = (props) => {

    let dropdownoptions = [
        ['general', 'smartphones', 'documents', 'clothing', 'electronics', 'money']
    ]

    return (
        <>
            <h2 className="text-center my-2">{props.headingmaterial} Something</h2>
            <div>
                <form >
                    <div className="mb-3">
                        <label for="Item_Name" className="form-label">Item Name</label>
                        <input type="text" className="form-control" id="Item_Name" aria-describedby="emailHelp" />
                    </div>

                    <div className="mb-3">
                        <label for="Description" className="form-label">Description</label>
                        <input type="text" className="form-control" id="Description" />
                    </div>
                    <div className="mb-3">
                        <label for="Place" className="form-label">Place</label>
                        <input type="text" className="form-control" id="Place" />
                    </div>
                    <div className="mb-3">
                        <label for="GoogleDriveLink" className="form-label">GoogleDrive Link</label>
                        <input type="text" className="form-control" id="GoogleDriveLink" aria-describedby="emailHelp" placeholder='Paste GoogleDrive Photo Link here' />
                    </div>
                    <div className="mb-3">
                        <label for="Time" className='mx-4'>Time</label>
                        <input type="datetime-local" id="Time" name="Time" />
                    </div>

                    <div className="mb-3">
                        <label for="Contact_no" className='mx-2'>Contact no.</label>
                        <input type="number" id="Contact_no" name="Contact_no" />
                    </div>



                    {/* For the sake of tag */}

                    <div className="d-flex justify-content-around">
                        <Filter dropdownoptions={dropdownoptions[0]} />

                        <div className="mb-3 form-check my-2">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                            <label className="form-check-label" for="exampleCheck1">Status</label>
                        </div>


                        <button type="submit" className="btn btn-primary" >Submit</button>
                    </div>



                </form>
            </div>
        </>
    )
}

export default Itemform