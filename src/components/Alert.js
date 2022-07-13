import React from 'react'

const Showalert = (props) => {
    const capitalize = (word) => {
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }

    return (

        // !if alerto turns null that is going to happen after 1500 milliseconds every time alert is going to be displayed the alert will not show itself as false and True= false.

        props.alerto && <div>
            <div className={`alert alert-${props.alerto.type} alert-dismissible fade show`} role="alert">
                <strong>{capitalize(props.alerto.type)}</strong> : {props.alerto.msg}
                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        </div>
    )
}

export default Showalert