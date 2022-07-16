import React, { useState, useContext,useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import itemContext from '../context/items/itemcontext';

const Signup = (props) => {

    const [credentials, setCredentials] = useState({ name: "", email: "", password: "", cpassword: "" })

    const { name, email, password, cpassword } = credentials;

    const navigate = useNavigate();


    const context = useContext(itemContext);
    const { setprogress } = context;

    useEffect(() => {
        setprogress(99)
        setTimeout(() => {
            setprogress(100)
        }, 50);
    }, [])

    const handlesubmit = async (e) => {

        e.preventDefault();
        if (password === cpassword) {
            setprogress(30)
            const response = await fetch("http://localhost:4501/api/auth/createuser", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, password })
            });

            // json contains success msg and auth-token
            setprogress(80)
            const json = await response.json();

            // saving the authtoken
            if (json.success) {
                console.log("Signup successful");
                localStorage.setItem('token', json.authtoken);
                navigate('/')
                props.showalert("Sign up successful", 'success')
            }
            else {
                props.showalert(json.errors[0].msg, 'danger')
            }
        }
        else {
            props.showalert("confirm password did not match", 'danger')
        }
        setprogress(100)

    }

    const onChange = (e) => {
        // we want to name of the element to become equal to the value inside of the element here
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }

    return (
        <div className='container'>
            <h2 className='text-center'>Sign up</h2>
            <form>
                <div className="mb-3">
                    <label for="name" className="form-label">Name</label>
                    <input type="Text" className="form-control" id="name" onChange={onChange} value={name} name="name" />
                </div>

                <div className="mb-3">
                    <label for="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" onChange={onChange} value={email} name="email" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>

                <div className="mb-3">
                    <label for="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" onChange={onChange} value={password} name="password" />
                </div>

                <div className="mb-3">
                    <label for="cpassword" className="form-label">Confirm Password</label>
                    <input type="password" className="form-control" id="cpassword" onChange={onChange} value={cpassword} name="cpassword" />
                </div>

                <button type="submit" className="btn btn-primary" onClick={handlesubmit}>Sign up</button>
            </form>
        </div>
    )
}

export default Signup