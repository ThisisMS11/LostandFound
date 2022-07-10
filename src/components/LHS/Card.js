import React from 'react'

const Card = () => {
    let style1={
        width:'18rem'
    }
    return (
        <>
            <div className="card" style={style1}>
                <img src="https://source.unsplash.com/500x300/?web-development" className="card-img-top" alt="Image not fou" />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">An item</li>
                        <li className="list-group-item">A second item</li>
                        <li className="list-group-item">A third item</li>
                    </ul>
            </div>
        </>
    )
}

export default Card