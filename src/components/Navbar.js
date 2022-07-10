import React from 'react'
import images from './images/maincollegeimage.png'
const Navbar = () => {

    let imagestyle ={
        width: '125px',
        height: '80px'
    }
    return (
        <>
            <nav class="navbar navbar-expand-lg bg-light d-flex">
                <div class="d-flex col-12 justify-content-around">
                    <a class="navbar-brand col-4" to="/">
                        <img src={images} alt="image not found" style={imagestyle} />
                    </a>

                    <div className=" fs-3 d-flex align-items-center justify-content-center col-4 text-center">
                        LostandFound
                    </div>

                    <div class="collapse navbar-collapse col-2 d-flex justify-content-end" id="navbarSupportedContent">
                        <button type="button" class="btn btn-primary mx-2">Login</button>
                        <button type="button" class="btn btn-primary mx-2">Sign up</button>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar