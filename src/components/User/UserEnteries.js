import React, { useContext, useEffect, useState, useRef } from 'react'
import Card from '../LHS/Card'
import itemContext from '../context/items/itemcontext'
import Filter from '../LHS/Filter'
import filterbox from '../styles/filterBox.css'

const UserEnteries = (props) => {


    let { showalert } = props;

    const context = useContext(itemContext);
    let { getitems, item, deleteitem, updateitem, resettag, giveid } = context;

    // improvement can be there but for now 
    let dropdownoptions = [
        ['general', 'smartphones', 'documents', 'clothing', 'electronics', 'money']
    ]


    // whenever the UserEnteries component would render itself ,code inside of the useeffect would run.
    useEffect(() => {
        getitems();
    }, [])


    // reference variable for opening the modal
    const ref = useRef(null);
    const refClose = useRef(null);

    // Item_Name, Description, Tag, Place, Time, Contact_No, Status, Category, GoogleDriveLink
    const [resetitem, setresetitem] = useState({ id: "", Item_Name: "", Description: "", Tag: "", Time: "", Place: "", Contact_No: "", Status: "", Category: "", GoogleDriveLink: "" });



    // to open the modal 

    const openmodal = (item) => {
        console.log('the id of the item clicked is ', item.id);

        // !here we are placing the default(current) information in the modal input boxes...

        ref.current.click();
        setresetitem({ id: item._id, Item_Name: item.Item_Name, Description: item.Description, Tag: item.Tag, Time: item.Time, Place: item.Place, Contact_No: item.Contact_No, Status: item.Status, Category: item.Category, GoogleDriveLink: item.GoogleDriveLink })
    }


    // handleupdate function
    const handleupdate = () => {
        // ! here we will call the updateitem function from the context api.
        // sequence :- id, Item_Name, Description, Place, Tag, Time, Contact_No, Status, Category, GoogleDriveLink, showalert
        // console.log('the item after updation looks like this ', resetitem)

        refClose.current.click();

        console.log('category ', props.headingmaterial)
        updateitem(resetitem.id, resetitem.Item_Name, resetitem.Description, resetitem.Place, resettag, resetitem.Time, resetitem.Contact_No, resetitem.Status, resetitem.Category, resetitem.GoogleDriveLink, showalert)
    }

    const onChange = (e) => {
        // we want to name of the element to become equal to the value inside of the element here
        setresetitem({ ...resetitem, [e.target.name]: e.target.value })
    }

    return (
        <>
            {/* Modal for updating our item information */}

            {/* <!-- Button trigger modal --> */}
            <button type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#staticBackdrop" ref={ref}>
                Launch static backdrop modal
            </button>

            {/* <!-- Modal --> */}
            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">Update Item info</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            {/* here comes our update form */}
                            {/* Item_Name, Description, Tag, Place, Time, Contact_No, Status, Category, GoogleDriveLink */}
                            <div>
                                <form >
                                    <div className="mb-3">
                                        <label for="Item_Name" className="form-label">Item Name</label>
                                        <input type="text" className="form-control" id="Item_Name" aria-describedby="emailHelp" name='Item_Name' onChange={onChange} value={resetitem.Item_Name} />
                                    </div>

                                    <div className="mb-3">
                                        <label for="Description" className="form-label">Description</label>
                                        <input type="text" className="form-control" id="Description" name='Description' onChange={onChange} value={resetitem.Description} />
                                    </div>
                                    <div className="mb-3">
                                        <label for="Place" className="form-label">Place</label>
                                        <input type="text" className="form-control" id="Place" name='Place' onChange={onChange} value={resetitem.Place} />
                                    </div>
                                    <div className="mb-3">
                                        <label for="GoogleDriveLink" className="form-label">GoogleDrive Link</label>
                                        <input type="text" className="form-control" id="GoogleDriveLink" aria-describedby="emailHelp" placeholder='Paste GoogleDrive Photo Link here' name='GoogleDriveLink' onChange={onChange} value={resetitem.GoogleDriveLink} />
                                    </div>

                                    <div className="mb-3">
                                        <label for="Time" className='mx-4'>Time</label>
                                        <input type="datetime-local" id="Time" name="Time" onChange={onChange} value={resetitem.Time} />
                                    </div>

                                    <div className="mb-3">
                                        <label for="Contact_no" className='mx-2'>Contact no.</label>
                                        <input type="number" id="Contact_no" name="Contact_No" onChange={onChange} value={resetitem.Contact_No} />
                                    </div>

                                    <div className="d-flex justify-content-around">
                                        <Filter dropdownoptions={dropdownoptions[0]} filtername='modalupdatefilter' initialvalue={resetitem.Tag} />

                                        <div className="mb-3 form-check my-2">
                                            <label className="form-check-label" for="exampleCheck1">Status</label>
                                            <input type="checkbox" className="form-check-input" id="exampleCheck1" name="Status" onChange={onChange} value={resetitem.Status} />
                                        </div>

                                    </div>

                                </form>
                            </div>
                        </div>

                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" ref={refClose}>Close</button>
                            <button type="button" className="btn btn-primary" onClick={handleupdate}>Update</button>
                        </div>
                    </div>
                </div>
            </div>


            {/* modal code ends here */}

            <div className='container d-flex flex-wrap justify-content-center align-items-center'>
                {
                    // !item contains all the user notes in json format
                    item.map((e) => {
                        return <div className='mx-4'><Card imageid={giveid(e.GoogleDriveLink)} Item_Name={e.Item_Name} User={e.User} Description={e.Description} Place={e.Place} Category={e.Category} Contact_No={e.Contact_No} Status={e.Status} Record_date={e.Record_date} Time={e.Time} />
                            <div className="d-flex justify-content-around border border-dark py-2 rounded opacity-75">
                                {/* <button className="btn btn-primary">Delete</button>
                            <button className="btn btn-primary">Update</button> */}

                                {/* id,Item_Name, Description, Place, Time, Record_date, Contact_No, Status, Category ,showalert*/}
                                <i className="fa-solid fa-pen-to-square dandu" data-toggle="tooltip" data-placement="top" title="update item" onClick={() => { openmodal(e) }} ></i>

                                <i className="fa-solid fa-trash dandu" data-toggle="tooltip" data-placement="top" title="delete item" onClick={() => { deleteitem(e._id, showalert) }}></i>
                            </div>
                        </div>

                    })
                }
            </div>
        </>
    )
}

export default UserEnteries

// () => { updateitem(e._id, e.Item_Name, e.Description, e.Place, e.Time, e.Record_date, e.Contact_No, e.Status, e.Category, props.showalert) }