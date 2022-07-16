import React, { useState, useRef, useContext ,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar';
import itemContext from '../context/items/itemcontext';

const Login = (props) => {
    const [credentials, setCredentials] = useState({ email: "", password: "" })

    const navigate = useNavigate();

    const [hider, setHider] = useState('none')

    // login button text

    const context = useContext(itemContext);
    const { setprogress} = context;

    useEffect(() => {
        setprogress(99)
        setTimeout(() => {
            setprogress(100)
        }, 50);
    }, [])
    



    const handlesubmit = async (e) => {

        // ! upper upper ki information do baaki kaam backend mai hoga...
        // without this the page would reload which we don't want obviously 
        e.preventDefault();
        setprogress(30)
        const response = await fetch("http://localhost:4501/api/auth/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: credentials.email, password: credentials.password })
        });
        setprogress(80)
        // json contains success msg and auth token
        const json = await response.json();

        if (json.success) {
            //redirecting to the home page adding log out and removing login and sign up buttons
            // saving the authtoken


            // !saving the auth-token to the local browser storage
            localStorage.setItem('token', json.authtoken);
            props.showalert("Login successful", 'success')
            navigate('/')
        }
        else {
            setHider('flex')
            props.showalert("Login Failed", 'danger')
        }

        setprogress(100)
    }


    const onChange = (e) => {
        // we want to name of the element to become equal to the value inside of the element here
        // !const [credentials, setCredentials] = useState({ email: "", password: "" })
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }


    const refClose = useRef(null)

    const signupjump = () => {
        refClose.current.click();
    }

    return (
        <>
            <div className="d-none">

                <Navbar refClose={refClose} />
            </div>


            <div className="container">


                <h2 className='text-center'>Login</h2>
                <form>
                    <div className="mb-3">
                        <label for="email" className="form-label">Email address</label>

                        {/* without adding name to our inputs fields we were not able to type inside the input boxes */}
                        {/* without adding value attribute to the input ,it is working properly Why ?*/}
                        <input type="email" placeholder="Enter your Email" className="form-control" id="email" name="email" aria-describedby="emailHelp" value={credentials.email} onChange={onChange} />
                    </div>

                    <div className="mb-3">
                        <label for="password" className="form-label">Password</label>
                        <input type="password" placeholder="Enter your Password" className="form-control" id="password" name="password" value={credentials.password} onChange={onChange} />
                    </div>

                    <button type="submit" className="btn btn-primary" onClick={handlesubmit}>
                        Login
                    </button>
                </form>
                <div className={`my-4 d-${hider} align-items-center`}>
                    <div className="">Don't have an account? &nbsp;&nbsp;Sign up here</div>
                    <button className="btn btn-primary mx-4" onClick={signupjump}>
                        Signup
                    </button>
                </div>
            </div>
        </>
    )
}

export default Login