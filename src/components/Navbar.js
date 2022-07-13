import React, { useState, useEffect, useRef } from 'react'
import images from './images/maincollegeimage.png'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Showalert from './Alert'

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


    // for connecting the below and navbar sign up buttons




    return (
        <>
            <nav className="navbar navbar-expand-lg bg-light d-flex">
                <div className="d-flex col-12 justify-content-around">
                    <Link className="navbar-brand col-4" to="/">
                        <img src={images} alt="image not found" style={imagestyle} />
                    </Link>

                    <div className=" fs-3 d-flex align-items-center justify-content-center col-4 text-center">
                        LostandFound
                    </div>



                    <div className="collapse navbar-collapse col-2  justify-content-end" id="loginsignup">
                        {!localStorage.getItem('token') ? <div className="d-flex">
                            <Link className="btn btn-primary mx-2" to='/login'>Login</Link>
                            <Link className="btn btn-primary mx-2" to='/signup' ref={props.refClose}>Sign up</Link>
                        </div> : <button className="btn btn-primary mx-2" onClick={handlelogout}>LogOut</button>}
                    </div>
                </div>
            </nav>
            <Showalert />
        </>
    )
}

export default Navbar