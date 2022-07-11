import React from 'react'
import images from './images/maincollegeimage.png'
const Navbar = () => {

    let imagestyle ={
        width: '125px',
        height: '80px'
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-light d-flex">
                <div className="d-flex col-12 justify-content-around">
                    <a className="navbar-brand col-4" to="/">
                        <img src={images} alt="image not found" style={imagestyle} />
                    </a>

                    <div className=" fs-3 d-flex align-items-center justify-content-center col-4 text-center">
                        LostandFound
                    </div>

                    <div className="collapse navbar-collapse col-2 d-flex justify-content-end" id="navbarSupportedContent">
                        <button type="button" className="btn btn-primary mx-2">Login</button>
                        <button type="button" className="btn btn-primary mx-2">Sign up</button>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar