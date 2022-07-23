import React, { useState, useEffect, useRef } from 'react'
import images from './images/maincollegeimage.png'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Showalert from './Alert'

import itemContext from './context/items/itemcontext'
import { useContext } from 'react'
import LoadingBar from 'react-top-loading-bar'

// firebase imports starts here...
import { app, database } from '../../src/firebaseConfig'
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

//! we are using user's google accounts for sign in purposes so we don't need to create website specific accounts anymore.

const Navbar = (props) => {

    let imagestyle = {
        width: '125px',
        height: '80px'
    }

    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    

    const handlelogout = () => {
        localStorage.removeItem('token');
        // navigate('/login')
        signOut(auth).then(() => {
            props.showalert("Logout successful", 'danger')
        }).catch((error) => {
            console.log('signout error => ', error);
            alert(error.message)
        });
    }



    const handlesignup = async (e) => {
        e.preventDefault();
        setprogress(30)
        signInWithPopup(auth, provider)
            .then((data) => {
                console.log('googlesign in data  => ', data)
                // console.log('our access token is ', data.user.accessToken)

                localStorage.setItem('token', data.user.accessToken);
                localStorage.setItem('userid', data._tokenResponse.localId);
                localStorage.setItem('username', data._tokenResponse.displayName);

                alert('sign up successful')
                props.showalert(`${data._tokenResponse.displayName} , Welcome to Lost&Found@IIITDMJ `, 'success')
            })
            .catch((error) => {
                console.log(error);
                alert(error.message)
            })
        setprogress(80)
        setprogress(100)
    }


    const navigate = useNavigate();



    const context = useContext(itemContext);
    const { progress, setprogress, signupRef } = context;

    return (
        <>
            <LoadingBar
                color='#f11946'
                height={3}
                progress={progress}
            />

            <nav className="navbar navbar-expand-lg bg-light ">
                <div className="container-fluid">

                    <Link className="navbar-brand" to="/" >
                        <img src={images} alt="image not found" style={imagestyle} />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>



                    <div className="collapse navbar-collapse  justify-content-end" id="navbarSupportedContent">

                        {!localStorage.getItem('token') ? <div className="d-flex">
                            <button className="btn btn-primary mx-2" onClick={handlesignup} ref={signupRef}>Sign Up with google</button>
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