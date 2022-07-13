import React, { useState, useContext } from 'react'
import itemContext from '../context/items/itemcontext';

const Filter = (props) => {
    let { dropdownoptions, filtername } = props;

    const context = useContext(itemContext)
    let {setTag } = context;

    const [selectedfilter, setSelectedfilter] = useState(dropdownoptions[0]);


    const filterheadingchanger = (heading) => {
        setSelectedfilter(heading)

        // !using filtername prop to uniquely identify each filter component.
        if (filtername == 'itemformfilter') {
            setTag(heading)
        }
    }

    return (
        <>
            <div className="dropdown d-none">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown button
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li><a className="dropdown-item" to='/'>Action</a></li>
                    <li><a className="dropdown-item" to='/'>Another action</a></li>
                    <li><a className="dropdown-item" to='/'>Something else here</a></li>
                </ul>
            </div>

            {/* working dropdown */}
            <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    {selectedfilter}
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    {/* iterating the drop down options here  */}
                    {dropdownoptions.map(
                        (e) => {
                            return <li><a className="dropdown-item" to='/' onClick={() => filterheadingchanger(e)}>{e}</a></li>;
                        }
                    )}
                </ul>
            </div>
        </>
    )
}

export default Filter