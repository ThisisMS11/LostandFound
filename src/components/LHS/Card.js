import React, { useState, useEffect } from 'react'
import moimage from '../images/neckband.jpg'

import filterbox from '../styles/filterBox.css'

const Card = (props) => {
    let style1 = {
        width: '18rem'
    }

    let { Item_Name, Description, Place, Time, Record_date, Contact_No, Status, Category, imageid } = props;

    const [badgecolor, setBadgecolor] = useState();

    useEffect(() => {
        if (Category == 'Lost') {
            setBadgecolor('danger')
        }
        else if (Category == 'Found') {
            setBadgecolor('success')
        }
    }, [])

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const ensuringsize = {
        width: '286px',
        height: '260px',
        border:'none'
    }


    return (
        <>
            <div className="card my-2" style={style1}>

                <div id="alternateimage">
                    <img src={`https://drive.google.com/uc?export=view&id=${imageid}`} className="card-img-top"  style={ensuringsize} />


                    {/* for testing whether the actual item image would hide the no image found photo or not */}
                    {/* <img src={moimage} className="card-img-top" style={ensuringsize} /> */}
                </div>

                {/* <img src="https://drive.google.com/uc?export=view&id=1AaEdVBlbUPUzzvwHTlnIRTic4X0YSEWK" className="card-img-top" alt="drive image"/> */}

                <div className="card-body">

                    <h5 className="card-title">{capitalizeFirstLetter(Item_Name)}</h5>

                    {/* lost or found badge over the card */}
                    <span className={`badge text-bg-${badgecolor} position-absolute top-0 end-0`}>{Category}</span>
                    <p className="card-text">{capitalizeFirstLetter(Description)}</p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between align-items-center ">
                        <div className='fw-semibold'>Place:</div>
                        <div className="">{Place}</div>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center ">
                        <div className='fw-semibold'>Date:</div>
                        <div className="">{Time}</div>
                    </li>

                    <li className="list-group-item d-flex justify-content-between align-items-center ">
                        <div className='fw-semibold'>Contact_No:</div>
                        <div className="">{Contact_No}</div>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center ">
                        <div className='fw-semibold'>Status:</div>
                        <div className="">{Status}</div>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center ">
                        <div className='fw-semibold'>Recorded:</div>
                        <div className="">{Record_date}</div>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default React.memo(Card);