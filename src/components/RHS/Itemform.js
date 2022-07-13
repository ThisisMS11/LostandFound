import React, { useState } from 'react'

import Filterbox from '../styles/filterBox.css';

const Itemform = (props) => {
    const [otherOptionshow, setOtherOptionshow] = useState('other-option-hide');

    const dropclass = () => {
        if (otherOptionshow === 'other-option-show') {
            setOtherOptionshow('other-option-hide')
        }
        else {
            setOtherOptionshow('other-option-show')
        }
    }

    const [name, setName] = useState('general');
    const dropclassinneroptions = (color) => {
        dropclass();
        setName(color)
    }

    let borderstyle = {
        border: 'solid 2px red'
    }
    let headingstyle = {
        textAlign: 'center'
    }

    return (
        <>
            <h2 style={headingstyle}>{props.headingmaterial} something</h2>
            <div>
                <form >
                    <div className="mb-3">
                        <label for="Item_Name" className="form-label">Item Name</label>
                        <input type="text" className="form-control" id="Item_Name" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label for="Description" className="form-label">Description</label>
                        <input type="text" className="form-control" id="Description" />
                    </div>
                    <div className="mb-3">
                        <label for="Place" className="form-label">Place</label>
                        <input type="text" className="form-control" id="Place" />
                    </div>
                    <div className="mb-3">
                        <label for="Time" className='mx-2'>Time</label>
                        <input type="datetime-local" id="Time" name="Time" />
                    </div>


                    <div className="mb-3">
                        <label for="Contact_no" className='mx-2'>Contact no.</label>
                        <input type="number" id="Contact_no" name="Contact_no" />
                    </div>


                    {/* For the sake of tag */}

                    <div>

                        <div id="selectedfilter" className='selectedfilterstyle'>
                            <label className='mx-2'>Tag</label>
                            <div id="name">
                                {name}
                            </div>
                            <i className="fa-solid fa-caret-down" id="dropdownicon" onClick={dropclass}></i>
                        </div>

                        <div id="otheroptionsbox">
                            <div className={otherOptionshow} onClick={() => dropclassinneroptions('general')}>general</div>
                            <div className={otherOptionshow} onClick={() => dropclassinneroptions('smartphones')}>smartphones</div>
                            <div className={otherOptionshow} onClick={() => dropclassinneroptions('documents')}>documents</div>
                            <div className={otherOptionshow} onClick={() => dropclassinneroptions('clothing')}>clothing</div>
                            <div className={otherOptionshow} onClick={() => dropclassinneroptions('electronics')}>electronics</div>
                            <div className={otherOptionshow} onClick={() => dropclassinneroptions('money')}>money</div>

                        </div>
                    </div>



                    <div className="mb-3 form-check" id='checkbutton'>
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" for="exampleCheck1">Status</label>
                    </div>

                    <button type="submit" className="btn btn-primary" id='submitbutton'>Submit</button>
                </form>
            </div>
        </>
    )
}

export default Itemform