import React, { useState, useEffect, useRef } from 'react'
import images from './images/maincollegeimage.png'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Showalert from './Alert'

import itemContext from './context/items/itemcontext'
import { useContext } from 'react'
import LoadingBar from 'react-top-loading-bar'

const Navbar = (props) => {

    let imagestyle = {
        width: '125px',
        height: '80px'
    }


    const handlelogout = () => {
        localStorage.removeItem('token');
        navigate('/login')
        props.showalert("Logout successful", 'danger')

    }

    const navigate = useNavigate();



    const context = useContext(itemContext);
    const { progress, setprogress } = context;

    return (
        <>
            <LoadingBar
                color='#f11946'
                height={3}
                progress={progress}
            />
            {/* <nav className="navbar navbar-expand-lg bg-light d-flex">
                <div className="d-flex col-12 justify-content-around">
                    <Link className="navbar-brand col-4" to="/">
                        <img src={images} alt="image not found" style={imagestyle} />
                    </Link>

                    {/* <div className=" fs-3 d-flex align-items-center justify-content-center col-4 text-center">
                        Lost&Found
                    </div> */}



            {/* <div className="collapse navbar-collapse my-lg-0 justify-content-end" id="navbarSupportedContent">
                        {!localStorage.getItem('token') ? <div className="d-flex">
                            <Link className="btn btn-primary mx-2" to='/login'>Login</Link>
                            <Link className="btn btn-primary mx-2" to='/signup' ref={props.refClose}>Sign up</Link>
                        </div> : <div>
                            <Link className="btn btn-primary mx-2" to='/account'>My Enteries</Link>
                            <button className="btn btn-primary mx-2" onClick={handlelogout}>LogOut</button>
                        </div>}
                    </div>
                </div> */}
            {/* </nav> */}

            <nav class="navbar navbar-expand-lg bg-light ">
                <div class="container-fluid">

                        <Link className="navbar-brand" to="/">
                            <img src={images} alt="image not found" style={imagestyle} />
                        </Link>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>

    

                    <div class="collapse navbar-collapse  justify-content-end" id="navbarSupportedContent">

                        {!localStorage.getItem('token') ? <div className="d-flex">
                            <Link className="btn btn-primary mx-2" to='/login'>Login</Link>
                            <Link className="btn btn-primary mx-2" to='/signup' ref={props.refClose}>Sign up</Link>
                        </div> : <div>
                            <Link className="btn btn-primary mx-2" to='/account'>My Enteries</Link>
                            <button className="btn btn-primary mx-2" onClick={handlelogout}>LogOut</button>
                        </div>}
                    </div>
                </div>
            </nav>
            {/* <Showalert /> */}
        </>
    )
}

export default Navbar