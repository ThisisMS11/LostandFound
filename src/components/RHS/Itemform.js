import React, { useState, useContext } from 'react'
import Filter from '../LHS/Filter'
import itemContext from '../context/items/itemcontext'

const Itemform = (props) => {

    // dropdownoptions for form tag part
    let dropdownoptions = [
        ['general', 'smartphones', 'documents', 'clothing', 'electronics', 'money']
    ]

    // using the item context api here
    const context = useContext(itemContext)

    // destructuring our context api functions here.
    const { additem, tag } = context;

    const [item, setItem] = useState({ Item_Name: "", Description: "", Tag: "", Place: "", Time: "", Contact_No: "", GoogleDriveLink: "", Category: "", Status: "" })


    const onChange = (e) => {
        // we want to name of the element to become equal to the value inside of the element here
        setItem({ ...item, [e.target.name]: e.target.value })
    }

    const handlesubmit = async (e) => {
        e.preventDefault();

        // correcting status error checked = 'on' , not checked = 'off'
        if (item.Status == "") {
            item.Status = "off"
        }


        // giving category based on buttonclick via prop obtained i.e. head props.headingmaterial
        item.Category = props.headingmaterial;

        // setting the tag here by fetching it from our context api
        item.Tag = tag;

        // Item_Name, Description, Tag, Place, Time, Contact_No, Status, Category, GoogleDriveLink
        console.log("Item info :--->>>> ", item);
        let { Item_Name, Description, Tag, Place, Time, Contact_No, Status, Category, GoogleDriveLink } = item;

        const answer = await additem(Item_Name, Description, Tag, Place, Time, Contact_No, Status, Category, GoogleDriveLink);

        if(answer.success){
            props.showalert('Item added sucessfully','success')
        }

    }

    return (
        <>
            <h2 className="text-center my-2">{props.headingmaterial} Something</h2>
            <div>
                <form >
                    <div className="mb-3">
                        <label for="Item_Name" className="form-label">Item Name</label>
                        <input type="text" className="form-control" id="Item_Name" aria-describedby="emailHelp" name='Item_Name' onChange={onChange} />
                    </div>

                    <div className="mb-3">
                        <label for="Description" className="form-label">Description</label>
                        <input type="text" className="form-control" id="Description" name='Description' onChange={onChange} />
                    </div>
                    <div className="mb-3">
                        <label for="Place" className="form-label">Place</label>
                        <input type="text" className="form-control" id="Place" name='Place' onChange={onChange} />
                    </div>
                    <div className="mb-3">
                        <label for="GoogleDriveLink" className="form-label">GoogleDrive Link</label>
                        <input type="text" className="form-control" id="GoogleDriveLink" aria-describedby="emailHelp" placeholder='Paste GoogleDrive Photo Link here' name='GoogleDriveLink' onChange={onChange} />
                    </div>

                    <div className="mb-3">
                        <label for="Time" className='mx-4'>Time</label>
                        <input type="datetime-local" id="Time" name="Time" onChange={onChange} />
                    </div>

                    <div className="mb-3">
                        <label for="Contact_no" className='mx-2'>Contact no.</label>
                        <input type="number" id="Contact_no" name="Contact_No" onChange={onChange} />
                    </div>



                    {/* For the sake of tag */}

                    <div className="d-flex justify-content-around">
                        <Filter dropdownoptions={dropdownoptions[0]} filtername='itemformfilter' />

                        <div className="mb-3 form-check my-2">
                            <label className="form-check-label" for="exampleCheck1">Status</label>
                            <input type="checkbox" className="form-check-input" id="exampleCheck1" name="Status" onChange={onChange} />
                        </div>


                        <button type="submit" className="btn btn-primary" onClick={handlesubmit}>Submit</button>
                    </div>



                </form>
            </div>
        </>
    )
}

export default Itemform