import React, { useState, useRef, useContext } from 'react'
import Itemform from './Itemform';
import Filterbox from '../styles/filterBox.css';
import { useNavigate } from 'react-router-dom';
import itemContext from '../context/items/itemcontext';

// firebase imports starts here...


const Buttoncontainer = (props) => {
    let style1 = {
        border: "solid 1px #d5cfcf",
        borderRadius: '10px',
        width: 'fit-content',
        // height: '595px',
    }

    // !the below usestate are for shifting the screen between buttons and form

    const [display, setDisplay] = useState('flex');

    const navigate = useNavigate();

    const context = useContext(itemContext)


    const shiftscreen = (s) => {
        if (localStorage.getItem('token')) {
            setDisplay('none');
            setFormdisplay({
                display: 'block'
            })
            setHead(s)
        }
        else {
            props.showalert("you need to login for adding an item", "warning")
            // here i need to make the login in pop using usereference
            context.signupRef.current.click();
        }
    }




    const [formdisplay, setFormdisplay] = useState({
        display: 'none'
    })

    const backtobuttons = () => {
        setFormdisplay({
            display: 'none'
        })
        setDisplay('flex')
    }


    const [head, setHead] = useState();

    const closeform = useRef(null);

    return (
        <div style={style1} className='d-flex flex-column justify-content-center align-items-center container col-4'>
            <i className="fa-solid fa-xmark fa-2x" id='crossicon' ref={closeform} style={formdisplay} onClick={backtobuttons}></i>


            {/* item form container */}
            <div style={formdisplay}>
                <Itemform headingmaterial={head} showalert={props.showalert} closeform={closeform} />
            </div>

            {/* buttons container */}
            <div className={`container d-${display} justify-content-center align-items-center flex-column`}>
                <button type="button" className={`btn btn-danger my-4`} onClick={() => shiftscreen('Lost')}>Lost something</button>
                <button type="button" className={`btn btn-success`} onClick={() => shiftscreen('Found')}>found something</button>
            </div>

        </div>
    )
}

export default Buttoncontainer