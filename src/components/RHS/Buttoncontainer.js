import React, { useState } from 'react'
import Itemform from './Itemform';
import Filterbox from '../styles/filterBox.css';

const Buttoncontainer = () => {
    let style1 = {
        border: 'solid 2px black',
        width: '500px',
        height: '600px',
    }

    // !the below usestate are for shifting the screen between buttons and form

    const [display, setDisplay] = useState('flex');


    const shiftscreen = (s) => {
        setDisplay('none');
        setFormdisplay({
            display:'block'
        })
        setHead(s)
    }

    const [formdisplay, setFormdisplay] = useState({
        display:'none'
    })

    const backtobuttons=()=>{
        setFormdisplay({
            display:'none'
        })
        setDisplay('flex')
    }


    const [head, setHead] = useState();

    return (
        <div style={style1} className='d-flex justify-content-center align-items-center'>
            <i className="fa-solid fa-xmark fa-2x" id='crossicon' style={formdisplay} onClick={backtobuttons}></i>


            {/* item form container */}
            <div style={formdisplay}>
                <Itemform headingmaterial={head}/>
            </div>

            {/* buttons container */}
            <div className={`container d-${display} justify-content-center align-items-center flex-column`}>
                <button type="button" className={`btn btn-danger my-4`} onClick={()=>shiftscreen('Lost')}>Lost something</button>
                <button type="button" className={`btn btn-success`} onClick={()=>shiftscreen('Found')}>found something</button>
            </div>

        </div>
    )
}

export default Buttoncontainer