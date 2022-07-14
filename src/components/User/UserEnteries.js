import React, { useContext, useEffect, useState } from 'react'
import Card from '../LHS/Card'
import itemContext from '../context/items/itemcontext'

const UserEnteries = () => {


    const context = useContext(itemContext);
    let { getitems,item,deleteitem} = context;


    // whenever the UserEnteries component would render itself ,code inside of the useeffect would run.
    useEffect(() => {
            getitems();
    }, [item])

    return (
        <div className='container d-flex flex-wrap justify-content-center align-items-center'>
            {
                // !item contains all the user notes in json format
                item.map((e) => {
                    return <div className='mx-4'><Card image1={e.Tag} Item_Name={e.Item_Name} User={e.User} Description={e.Description} Place={e.Place} Category={e.Category} Contact_No={e.Contact_No} Status={e.Status} Record_date={e.Record_date} Time={e.Time} />
                        <div className="d-flex justify-content-around border border-dark py-2 rounded opacity-75">
                            {/* <button className="btn btn-primary">Delete</button>
                            <button className="btn btn-primary">Update</button> */}
                            <i className="fa-solid fa-pen-to-square" ></i>
                            <i class="fa-solid fa-trash " onClick={() => { deleteitem(e._id) }}></i>
                        </div>
                    </div>

                })
            }
        </div>
    )
}

export default UserEnteries