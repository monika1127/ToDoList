import React from 'react'

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar__header">ToDos</div>
            <div className="navbar__counters">
                <div className="navbar__counter">X done</div>
                <div className="navbar__counter">Y to be done</div>
            </div>
        </div>
    )
}

export default Navbar
