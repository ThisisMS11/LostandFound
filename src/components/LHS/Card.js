import React from 'react'

const Card = (props) => {
    let style1 = {
        width: '18rem'
    }

    let { Item_Name, Description, Place, Time, Record_date, Contact_No, Status, Category ,image1} = props;
    return (
        <>
            <div className="card my-2" style={style1}>
                <img src={`https://source.unsplash.com/500x300/?${image1}`} className="card-img-top" alt="Image not found" />
                {/* <img src="https://drive.google.com/uc?export=view&id=1AaEdVBlbUPUzzvwHTlnIRTic4X0YSEWK" className="card-img-top" alt="drive image"/> */}

                <div className="card-body">

                    <h5 className="card-title">{Item_Name}</h5>
                    <span className="badge text-bg-danger position-absolute top-0 end-0">{Category}</span>
                    <p className="card-text">{Description}</p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between align-items-center ">
                        <div className='fw-semibold'>Place:</div>
                        <div className="">{Place}</div>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center ">
                        <div className='fw-semibold'>Time:</div>
                        <div className="">{Time}</div>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center ">
                        <div className='fw-semibold'>Recorded:</div>
                        <div className="">{Record_date}</div>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center ">
                        <div className='fw-semibold'>Contact_No:</div>
                        <div className="">{Contact_No}</div>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center ">
                        <div className='fw-semibold'>Status:</div>
                        <div className="">{Status}</div>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Card